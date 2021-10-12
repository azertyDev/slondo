import {FC, Fragment, MouseEvent, MutableRefObject} from 'react';
import {useDate} from '@src/hooks';
import {Box, IconButton, TextField, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {Send, KeyboardArrowLeft} from '@material-ui/icons';
import {ContactType, MessageType, OptionsType} from '../ChatContainer';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';

type ChatProps = {
    isFetch: boolean,
    handleBack: () => void,
    options: OptionsType[],
    selectedContact: ContactType,
    message: string,
    messages: MessageType[],
    handleMessage: (v) => void
    sendMessage: () => void,
    hideContacts: boolean,
    handleMenu: (option) => () => void
    handleChatClose,
    handleAnchor: (e: MouseEvent<HTMLElement>) => void,
    handleCloseMenu: () => void,
    menuAnchor: HTMLElement,
    firstMessageRef: (node) => void
    messagesBottomRef: MutableRefObject<any>
};

export const Chat: FC<ChatProps> = (props) => {
    const {
        isFetch,
        handleBack,
        // options,
        selectedContact,
        messages,
        message,
        handleMessage,
        // handleMenu,
        sendMessage,
        handleChatClose,
        // handleAnchor,
        // menuAnchor,
        // handleCloseMenu,
        firstMessageRef,
        hideContacts,
        messagesBottomRef
    } = props;

    const getDate = useDate();
    const isSystemUser = !!selectedContact?.sys;
    const {contact} = selectedContact;
    const {t} = useTranslation('common');
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const emptyMsg = message.trim() === '';

    const classes = useStyles({hideContacts});
    return (
        <div className={classes.root}>
            {contact.id !== null
                ? <>
                    <div className='chat-header'>
                        {(isXsDown && !hideContacts) && (
                            <IconButton
                                className='back-btn'
                                onClick={handleBack} size='small'
                            >
                                <KeyboardArrowLeft fontSize='medium' />
                            </IconButton>
                        )}
                        <Typography variant='subtitle1'>
                            {isSystemUser ? 'Slondo.uz' : contact.name}
                        </Typography>
                        {hideContacts && (
                            <CloseBtn
                                className='close-btn'
                                handleClose={hideContacts ? handleChatClose : handleBack}
                            />
                        )}
                        {/*{!isSystemUser && (*/}
                        {/*    <>*/}
                        {/*        <IconButton*/}
                        {/*            aria-label="more"*/}
                        {/*            aria-haspopup="true"*/}
                        {/*            aria-controls="long-menu"*/}
                        {/*            onClick={handleAnchor}*/}
                        {/*        >*/}
                        {/*            <MoreVert/>*/}
                        {/*        </IconButton>*/}
                        {/*        <Menu*/}
                        {/*            keepMounted*/}
                        {/*            id="long-menu"*/}
                        {/*            anchorEl={menuAnchor}*/}
                        {/*            onClose={handleCloseMenu}*/}
                        {/*            open={Boolean(menuAnchor)}*/}
                        {/*            transformOrigin={{*/}
                        {/*                vertical: 'top',*/}
                        {/*                horizontal: 'center'*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            {options.map(option => (*/}
                        {/*                <MenuItem*/}
                        {/*                    key={option}*/}
                        {/*                    onClick={handleMenu(option)}*/}
                        {/*                >*/}
                        {/*                    {t(option)}*/}
                        {/*                </MenuItem>*/}
                        {/*            ))}*/}
                        {/*        </Menu>*/}
                        {/*    </>*/}
                        {/*)}*/}
                    </div>
                    <div className='message-list'>
                        <div ref={messagesBottomRef}/>
                        {messages.map(({author, message}, index) => {
                            const {text, created_at} = message;
                            const anchorMsg = index === messages.length - 4;
                            const {time} = getDate(created_at);

                            return (
                                <Fragment key={index}>
                                    <div
                                        ref={anchorMsg ? firstMessageRef : null}
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
                                        <Typography className='time'>
                                            {time}
                                        </Typography>
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                    <div className='compose'>
                        <Box className='messaging-input'>
                            <TextField
                                fullWidth
                                multiline
                                autoFocus
                                maxRows={3}
                                value={message}
                                className='input'
                                variant='outlined'
                                onChange={handleMessage}
                                onKeyDown={handleMessage}
                                placeholder={t('write_message')}
                                color='secondary'
                            />
                            <IconButton
                                disableRipple
                                disableTouchRipple
                                disableFocusRipple
                                className='send-btn'
                                onClick={sendMessage}
                                disabled={emptyMsg || isFetch}
                            >
                                <Send />
                            </IconButton>
                        </Box>
                    </div>
                </>
                : <Typography>
                    {t('select_chat')}
                </Typography>}
        </div>
    );
};