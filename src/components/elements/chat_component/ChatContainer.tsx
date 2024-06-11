import {
    FC,
    MouseEvent,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Box, Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {Chat} from './chat/Chat';
import {Contacts} from './contacts/Contacts';
import {ErrorCtx, SocketCtx} from '@src/context';
import {useModal} from '@src/hooks';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useTranslation} from 'next-i18next';
import {chatAPI} from '@root/src/api/chat_api';
import {useStyles} from './useStyles';

export type MessageType = {
    author: {id: number};
    message_id: number;
    message: {
        text: string;
        images: {
            id: number;
            url: {
                default: string;
                original: string;
                extra: string;
            };
        }[];
        created_at: string;
    };
};

type ChatContainerProps = {
    initContactId?: number;
    hideContacts?: boolean;
    handleChatClose?;
};

export type ContactType = {
    id: number;
    isBlocked: boolean;
    locked: boolean;
    sys: number;
    numberOfMessage: number;
    contact: {
        id: number;
        name: string;
        avatar: string;
    };
};

export type OptionsType = 'block_user' | 'unblock_user' | 'remove_user';

const onlineListChannel = 'updateUserStatus';
const messagesChannel = 'private-channel:App\\Events\\PrivateMessageEvent';
const contactsUpdateChannel =
    'contact-update-channel:App\\Events\\ContactUpdateEvent';

export const ChatContainer: FC<ChatContainerProps> = props => {
    const {initContactId = null, hideContacts = false, handleChatClose} = props;

    const socket = useContext(SocketCtx);

    const initContact = {
        id: null,
        isBlocked: false,
        locked: false,
        sys: 0,
        numberOfMessage: 0,
        contact: {
            id: null,
            name: null,
            avatar: null
        }
    };

    const {t} = useTranslation('common');
    const {setErrorMsg} = useContext(ErrorCtx);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const [page, setPage] = useState(1);
    const [isFetch, setIsFetch] = useState(false);

    const [selectedContact, setSelectedContact] =
        useState<ContactType>(initContact);
    const {contact} = selectedContact;

    const [contacts, setContacts] = useState<ContactType[]>([]);
    const [onlineList, setOnlineList] = useState({});
    const [unreadMsgList, setUnreadMsgList] = useState({});

    const [message, setMessage] = useState('');
    const [totalMessages, setTotalMessages] = useState(0);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [msgBuffer, setMsgBuffer] = useState(null);

    const messageRef = useRef(null);
    const messagesBottomRef = useRef(null);
    const currentContact = useRef(null);

    const hasMoreMsgs = totalMessages > messages.length;

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const options: OptionsType[] = [
        `${selectedContact?.isBlocked ? 'unblock_user' : 'block_user'}`,
        'remove_user'
    ];

    const {modalOpen, handleModalOpen, handleModalClose} = useModal();

    const handleAnchor = (event: MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const scrollToBottom = () => {
        messagesBottomRef.current &&
            messagesBottomRef.current.scrollIntoView({
                block: 'end',
                inline: 'start'
            });
    };

    const firstMessageRef = useCallback(
        node => {
            if (isFetch) return;
            if (messageRef.current) messageRef.current.disconnect();

            messageRef.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMoreMsgs) {
                    setPage(page + 1);
                }
            });

            if (node) messageRef.current.observe(node);
        },
        [isFetch, hasMoreMsgs]
    );

    const resetUnreadCount = async () => {
        try {
            currentContact.current?.id &&
                (await chatAPI.resetUnreadCount(currentContact.current.id));
        } catch (e) {
            setErrorMsg(e.mesage);
        }
    };

    const fetchInitContact = async () => {
        const contact = await chatAPI.getContactById(initContactId);
        unstable_batchedUpdates(() => {
            setSelectedContact(contact);
            currentContact.current = contact;
        });
    };

    const fetchUserContacts = async () => {
        try {
            const contacts = await chatAPI.getUserContacts();

            const unreadList = contacts.reduce(
                (list, {contact, numberOfMessage}) => {
                    list[contact.id] = numberOfMessage;
                    return list;
                },
                {}
            );

            unstable_batchedUpdates(() => {
                setContacts(contacts);
                setUnreadMsgList(unreadList);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
            });
        }
    };

    const fetchMessages = async (contactId, page = 1) => {
        try {
            setIsFetch(true);

            const isFirstPage = page === 1;
            const {data, total} = await chatAPI.getMessages(contactId, page);
            const fetchedMessages = isFirstPage ? data : [...messages, ...data];

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setTotalMessages(total);
                setMessages(fetchedMessages);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
                setIsFetch(false);
            });
        }
    };

    const selectContact = (selectedContact: ContactType) => () => {
        unstable_batchedUpdates(async () => {
            currentContact.current = selectedContact;
            setUnreadMsgList({
                ...unreadMsgList,
                [selectedContact.contact.id]: 0
            });
            if (selectedContact.contact.id !== contact.id) {
                setPage(1);
                setSelectedContact(selectedContact);
            }
            await fetchMessages(selectedContact.contact.id);
        });
    };

    const sendMessage = async () => {
        try {
            const form = new FormData();
            form.append('message', message);
            form.append('receiver_id', contact.id.toString());

            const {message_id, author, text, images, created_at} =
                await chatAPI.sendMessage(form);

            unstable_batchedUpdates(async () => {
                await setMessages([
                    {
                        message_id,
                        author,
                        message: {
                            text,
                            images,
                            created_at
                        }
                    },
                    ...messages
                ]);
                scrollToBottom();
                message !== '' && setMessage('');
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
            });
        }
    };

    const handleBack = () => {
        setSelectedContact(initContact);
    };

    const handleMessage = ({key, shiftKey, target: {value}}) => {
        if (key === 'Enter' && !shiftKey && value.trim() !== '') {
            sendMessage();
        } else setMessage(value);
    };

    const removeUser = async () => {
        await chatAPI.removeUser(contact.id).catch(e => setErrorMsg(e.message));
    };

    const blockUser = async () => {
        await chatAPI.blockUser(contact.id).catch(e => setErrorMsg(e.message));
    };

    const handleMenu = (option: OptionsType) => () => {
        switch (option) {
            case 'block_user':
            case 'unblock_user':
                blockUser();
                break;
            case 'remove_user':
                handleModalOpen();
        }
        setMenuAnchor(null);
    };

    // Channel listeners
    const contactsChannelListener = async ({contact_id}) => {
        if (currentContact.current?.contact?.id !== contact_id) {
            await fetchUserContacts();
        }
    };

    const onlineListListener = async list => {
        setOnlineList(list);
    };

    const messageChannelListener = (msgData: any) => {
        const {sender_id, message_id, text, created_at} = msgData;

        const msg = {
            message_id,
            message: {
                text,
                created_at
            },
            author: {id: sender_id}
        };

        unstable_batchedUpdates(async () => {
            await setMsgBuffer(msg);
            scrollToBottom();
            currentContact?.current &&
                sender_id === currentContact.current.contact.id &&
                resetUnreadCount();
        });
    };

    useEffect(() => {
        fetchUserContacts();
        initContactId && fetchInitContact();
    }, []);

    useEffect(() => {
        contact.id && fetchMessages(contact.id, page);
    }, [contact.id, page]);

    useEffect(() => {
        msgBuffer &&
            contact.id === msgBuffer.author.id &&
            setMessages([msgBuffer, ...messages]);
    }, [msgBuffer]);

    useEffect(() => {
        if (socket) {
            socket.on(onlineListChannel, onlineListListener);
            socket.on(messagesChannel, messageChannelListener);
            socket.on(contactsUpdateChannel, contactsChannelListener);
        }
    }, [socket]);

    const classes = useStyles({hideContacts});
    return (
        <Grid container className={classes.root}>
            {contacts.length > 1 || contact.id ? (
                <>
                    {!hideContacts && (contact.id === null || !isXsDown) && (
                        <Grid item xs={12} sm={5}>
                            <Contacts
                                contacts={contacts}
                                onlineList={onlineList}
                                unreadMsgList={unreadMsgList}
                                selectContact={selectContact}
                                selectedContactId={selectedContact.id}
                            />
                        </Grid>
                    )}
                    {(contact.id !== null || !isXsDown) && (
                        <Grid item xs={12} sm={hideContacts ? 12 : 7}>
                            <Chat
                                isFetch={isFetch}
                                options={options}
                                message={message}
                                messages={messages}
                                menuAnchor={menuAnchor}
                                hideContacts={hideContacts}
                                handleChatClose={handleChatClose}
                                selectedContact={selectedContact}
                                firstMessageRef={firstMessageRef}
                                messagesBottomRef={messagesBottomRef}
                                handleBack={handleBack}
                                handleMenu={handleMenu}
                                sendMessage={sendMessage}
                                handleAnchor={handleAnchor}
                                handleMessage={handleMessage}
                                handleCloseMenu={handleCloseMenu}
                            />
                        </Grid>
                    )}
                    <ConfirmModal
                        open={modalOpen}
                        handleConfirm={removeUser}
                        cancelTxt={t('cancel')}
                        handleClose={handleModalClose}
                        confirmTxt={t('cabinet:confirm_stage')}
                        title={t('remove_contact_confirm')}
                    />
                </>
            ) : (
                <Box p={2} width='100%'>{t('no_messages')}</Box>
            )}
        </Grid>
    );
};
