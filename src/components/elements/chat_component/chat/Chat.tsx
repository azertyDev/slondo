import {FC, Fragment, useRef, useEffect, MouseEvent} from 'react';
import {useDate} from "@src/hooks";
import {IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Send, CropOriginal} from "@material-ui/icons";
import {ContactType, MessageType, OptionsType} from "../ChatContainer";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

type ChatProps = {
    options: OptionsType[],
    contact: ContactType,
    message: string,
    messages: MessageType[],
    handleImage: (v) => void,
    handleMessage: (v) => void
    sendMessage: () => void,
    handleMenu: (option) => () => void
    handleAnchor: (e: MouseEvent<HTMLElement>) => void,
    handleCloseMenu: () => void,
    menuAnchor: HTMLElement,
    firstMessageRef: (node) => void
};

export const Chat: FC<ChatProps> = (props) => {
    const {
        options,
        contact,
        messages,
        message,
        handleImage,
        handleMessage,
        handleMenu,
        sendMessage,
        handleAnchor,
        menuAnchor,
        handleCloseMenu,
        firstMessageRef
    } = props;

    const isSystemUser = contact?.sys;
    const {getDate} = useDate();
    const {t} = useTranslation('common');
    const messagesBottomRef = useRef(null);

    const scrollToBottom = () => {
        messagesBottomRef.current.scrollIntoView(false);
    };

    useEffect(() => {
        messagesBottomRef.current && scrollToBottom();
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {contact
                ? <>
                    <div className='chat-header'>
                        <Typography variant='subtitle1'>
                            {isSystemUser ? 'Slondo.uz' : contact.name}
                        </Typography>
                        {!isSystemUser && (
                            <>
                                <IconButton
                                    aria-label="more"
                                    aria-haspopup="true"
                                    aria-controls="long-menu"
                                    onClick={handleAnchor}
                                >
                                    <MoreVert/>
                                </IconButton>
                                <Menu
                                    keepMounted
                                    id="long-menu"
                                    anchorEl={menuAnchor}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    onClose={handleCloseMenu}
                                    open={Boolean(menuAnchor)}
                                >
                                    {options.map(option => (
                                        <MenuItem
                                            key={option}
                                            onClick={handleMenu(option)}
                                        >
                                            {t(option)}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        )}
                    </div>
                    <div className='message-list'>
                        {messages.map(({author, message}, index) => {
                            const {text, images, created_at} = message;
                            const isFirstMsg = index === 0;
                            const {time} = getDate(created_at);

                            return (
                                <Fragment key={index}>
                                    <div
                                        ref={isFirstMsg ? firstMessageRef : null}
                                        className={
                                            `message ${+author.id === contact.id
                                                ? 'left-side'
                                                : 'right-side'}`
                                        }
                                    >
                                        {text && (
                                            <Typography
                                                className='msg-text'
                                                variant='subtitle2'
                                            >
                                                <pre>
                                                    {message.text}
                                                </pre>
                                            </Typography>
                                        )}
                                        {images && images.map(({id, url}) =>
                                            <img
                                                key={id}
                                                src={url.default}
                                            />
                                        )}
                                        <Typography className='time'>
                                            {time}
                                        </Typography>
                                    </div>
                                </Fragment>
                            );
                        })}
                        <div ref={messagesBottomRef}/>
                    </div>
                    <div className='compose'>
                        <label htmlFor='message' className='img-wrapper'>
                            <CropOriginal/>
                        </label>
                        <input
                            type='file'
                            id='message'
                            onChange={handleImage}
                            accept='image/jpeg, image/png'
                        />
                        <div className='textField'>
                            <textarea
                                value={message}
                                className='input'
                                onChange={handleMessage}
                                onKeyDown={handleMessage}
                                placeholder={t('write_message')}
                            />
                            <IconButton
                                className='send-btn'
                                onClick={sendMessage}
                                disabled={message === ''}
                            >
                                <Send/>
                            </IconButton>
                        </div>
                    </div>
                </>
                : <Typography>
                    {t('select_chat')}
                </Typography>}
        </div>
    );
};