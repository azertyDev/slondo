import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {Grid} from "@material-ui/core";
import {chatAPI} from "@src/api/api";
import {Chat} from './chat/Chat';
import {Contacts} from './contacts/Contacts';
import {MESSAGES_PER_PAGE} from "@src/constants";
import {useStyles} from './useStyles';
import {SocketCtx} from "@src/context";

export type MessageType = {
    id: number,
    message: {
        text: string,
        images: {
            id: number, url: {
                default: string,
                original: string,
                extra: string
            }
        }[]
    },
    author
};

type ChatType = {
    user,
    messages: MessageType[]
}

type ChatContainerProps = {
    user?
};

export const ChatContainer: FC<ChatContainerProps> = ({user = null}) => {
    const initChat = {
        user,
        messages: []
    };

    const socket = useContext(SocketCtx);
    const messageEventURL = 'private-channel:App\\Events\PrivateMessageEvent';

    const [page, setPage] = useState(1);
    const [contacts, setContacts] = useState([]);
    const [chat, setChat] = useState<ChatType>(initChat);

    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [isFetch, setIsFetch] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const fetchUserContacts = async () => {
        try {
            setIsFetch(true);
            const contacts = (await chatAPI.getUserContacts()).data;

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
            const params = {
                page,
                itemsPerPage: MESSAGES_PER_PAGE,
                receiver_id: chat.user.id
            };

            setIsFetch(true);
            const messages = (await chatAPI.getMessages(params)).data;

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setChat({...chat, messages});
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
                setIsFetch(false);
            });
        }
    };

    const selectChat = ({id, name, avatar}) => () => {
        const user = {id, name, avatar};
        id !== chat.user?.id && setChat({...chat, user});
    };

    const sendMessage = async () => {
        try {
            const form = new FormData();
            form.append('receiver_id', chat.user.id);
            form.append('message', message);

            await chatAPI.sendMessage(form);
            message !== '' && setMessage('');
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const removeContact = async () => {
        try {
            await chatAPI.removeContact(chat.user.id);
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
            form.append('receiver_id', chat.user.id);
            await chatAPI.sendMessage(form);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const messageListener = ({data}: { data: MessageType }) => {
        const {messages} = chat;
        console.log(data);
        setChat({
            ...chat,
            messages: [...messages, data]
        });
    };

    useEffect(() => {
        fetchUserContacts();
    }, []);

    useEffect(() => {
        chat.user && fetchMessages();
    }, [chat.user, page]);

    useEffect(() => {
        if (socket) {
            socket.on(messageEventURL, messageListener);
            return () => {
                socket.off(messageEventURL);
            };
        }
    }, [socket]);

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={5}>
                <Contacts
                    contacts={contacts}
                    selectChat={selectChat}
                />
            </Grid>
            <Grid item xs={7}>
                <Chat
                    {...chat}
                    message={message}
                    handleImage={handleImage}
                    sendMessage={sendMessage}
                    removeContact={removeContact}
                    handleMessage={handleMessage}
                />
            </Grid>
        </Grid>
    );
};