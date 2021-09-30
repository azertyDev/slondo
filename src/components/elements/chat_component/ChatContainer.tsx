import {FC, MouseEvent, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {Grid} from "@material-ui/core";
import {chatAPI} from "@src/api/api";
import {Chat} from './chat/Chat';
import {Contacts} from './contacts/Contacts';
import {ErrorCtx, SocketCtx} from "@src/context";
import {useModal} from "@src/hooks";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

export type MessageType = {
    author: { id: number },
    message_id: number,
    message: {
        text: string,
        images: {
            id: number,
            url: {
                default: string,
                original: string,
                extra: string
            }
        }[],
        created_at: string
    }
};

type ChatContainerProps = {
    initContactId?: number
};

export type ContactType = {
    id: number,
    name: string,
    avatar: string,
    isBlocked: boolean,
    locked: boolean,
    sys: boolean
}

export type OptionsType = 'block_user' | 'unblock_user' | 'remove_user';

export const ChatContainer: FC<ChatContainerProps> = ({initContactId = null}) => {
    const socket = useContext(SocketCtx);
    const messagesChannel = 'private-channel:App\\Events\\PrivateMessageEvent';
    const contactsUpdateChannel = 'contact-update-channel:App\\Events\\ContactUpdateEvent';
    const usersOnlineChannel = 'updateUserStatus';

    const {t} = useTranslation('common');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [page, setPage] = useState(1);
    const [isFetch, setIsFetch] = useState(false);

    const [contact, setContact] = useState<ContactType>(null);
    const [contacts, setContacts] = useState<ContactType[]>([]);

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [message, setMessage] = useState('');
    const [totalMessages, setTotalMessages] = useState(0);

    const hasMoreMsgs = totalMessages > messages.length;

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const messagesRef = useRef([]);
    const messageRef = useRef(null);

    const options: OptionsType[] = [
        `${contact?.isBlocked ? 'unblock_user' : 'block_user'}`,
        'remove_user'
    ];

    const {
        modalOpen,
        handleModalOpen,
        handleModalClose
    } = useModal();

    const handleAnchor = (event: MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const firstMessageRef = useCallback(node => {
        if (isFetch) return;
        if (messageRef.current) messageRef.current.disconnect();

        messageRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMoreMsgs) {
                setPage(prevPageNumber => prevPageNumber + 1);
            }
        });

        if (node) messageRef.current.observe(node);
    }, [isFetch, hasMoreMsgs]);

    const fetchUserContacts = async () => {
        try {
            setIsFetch(true);
            const contacts = await chatAPI.getUserContacts();

            if (initContactId) {
                const contact = contacts.find(({contact}) => contact.id === initContactId);

                const {
                    sys,
                    locked,
                    isBlocked,
                    contact: {id, name, avatar}
                } = contact ?? await chatAPI.getContactById(initContactId);

                setContact({
                    id,
                    name,
                    avatar,
                    locked,
                    isBlocked,
                    sys: !!sys
                });
            }

            unstable_batchedUpdates(() => {
                setContacts(contacts);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
                setIsFetch(false);
            });
        }
    };

    const fetchMessages = async () => {
        try {
            setIsFetch(true);

            const isFirstPage = page === 1;

            const {data, total} = await chatAPI.getMessages(contact.id, page, 4);

            const fetchedMessages = isFirstPage ? data : [...messages, ...data];

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setTotalMessages(total);
                setMessages(fetchedMessages);
                if (isFirstPage) messagesRef.current = fetchedMessages;
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
                setIsFetch(false);
            });
        }
    };

    const selectContact = (selectedContact) => () => {
        selectedContact.id !== contact?.id && setContact(selectedContact);
    };

    const sendMessage = async () => {
        try {
            const form = new FormData();
            form.append('message', message);
            form.append('receiver_id', contact.id.toString());

            const {
                message_id,
                author,
                text,
                images,
                created_at
            } = await chatAPI.sendMessage(form);

            unstable_batchedUpdates(() => {
                setMessages([
                    ...messages,
                    {
                        message_id,
                        author,
                        message: {
                            text,
                            images,
                            created_at
                        }
                    }
                ]);
                message !== '' && setMessage('');
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleMessage = ({key, shiftKey, target: {value}}) => {
        if (key === 'Enter' && !shiftKey && message !== '') {
            sendMessage();
        } else setMessage(value);
    };

    const handleImage = async ({target}) => {
        try {
            const form = new FormData();
            const [img] = target.files;
            form.append('files[]', img);
            form.append('receiver_id', contact.id.toString());

            const {
                message_id,
                sender_id,
                text,
                images,
                created_at
            } = await chatAPI.sendMessage(form);

            unstable_batchedUpdates(() => {
                setMessages([
                    ...messages,
                    {
                        message_id,
                        message: {
                            text,
                            images,
                            created_at
                        },
                        author: {id: sender_id}
                    }
                ]);
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const contactsChannelListener = async ({contact_id}) => {
        if (contacts.every(con => con.id !== contact_id)) {
            await fetchUserContacts();
        }
    };

    const messageChannelListener = (data: any) => {
        const {sender_id, images, message_id, text, created_at} = data;
        const message = {
            text,
            images,
            created_at
        };
        unstable_batchedUpdates(() => {
            messagesRef.current.push({
                message_id,
                message,
                author: {id: sender_id}
            });
            setMessages([...messagesRef.current]);
        });
    };

    const removeUser = async () => {
        await chatAPI.removeUser(contact.id)
            .catch(e => setErrorMsg(e.message));
    };

    const blockUser = async () => {
        await chatAPI.blockUser(contact.id)
            .catch(e => setErrorMsg(e.message));
    };

    const handleMenu = (option: OptionsType) => () => {
        switch (option) {
            case "block_user":
            case "unblock_user":
                blockUser();
                break;
            case "remove_user":
                handleModalOpen();
        }
        setMenuAnchor(null);
    };

    useEffect(() => {
        fetchUserContacts();
    }, []);

    useEffect(() => {
        contact && fetchMessages();
    }, [contact?.id, page]);

    useEffect(() => {
        if (socket) {
            socket.on(messagesChannel, messageChannelListener);
            socket.on(contactsUpdateChannel, contactsChannelListener);
            socket.on(usersOnlineChannel, (list) => {
                // console.log(list);
            });
            return () => {
                socket.off(messagesChannel);
                socket.off(contactsUpdateChannel);
                socket.off(usersOnlineChannel);
            };
        }
    }, [socket]);

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={5}>
                <Contacts
                    contacts={contacts}
                    selectContact={selectContact}
                />
            </Grid>
            <Grid item xs={7}>
                <Chat
                    options={options}
                    contact={contact}
                    message={message}
                    messages={messages}
                    menuAnchor={menuAnchor}
                    firstMessageRef={firstMessageRef}
                    handleMenu={handleMenu}
                    handleImage={handleImage}
                    sendMessage={sendMessage}
                    handleAnchor={handleAnchor}
                    handleMessage={handleMessage}
                    handleCloseMenu={handleCloseMenu}
                />
            </Grid>
            <ConfirmModal
                open={modalOpen}
                handleConfirm={removeUser}
                cancelTxt={t('cancel')}
                handleClose={handleModalClose}
                confirmTxt={t('cabinet:confirm')}
                title={t('remove_contact_confirm')}
            />
        </Grid>
    );
};