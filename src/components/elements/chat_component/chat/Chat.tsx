import {FC, Fragment, MouseEvent, MutableRefObject} from 'react';
import {useDate} from '@src/hooks';
import {Box, IconButton, Menu, MenuItem, TextField, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MoreVert, Send, KeyboardArrowLeft} from '@material-ui/icons';
import {ContactType, MessageType, OptionsType} from '../ChatContainer';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

type ChatProps = {
    isFetch: boolean,
    handleBack: () => void,
    options: OptionsType[],
    selectedContact: ContactType,
    message: string,
    messages: MessageType[],
    handleMessage: (v) => void
    sendMessage: () => void,
    handleMenu: (option) => () => void
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
        // handleAnchor,
        // menuAnchor,
        // handleCloseMenu,
        firstMessageRef,
        messagesBottomRef
    } = props;

    const getDate = useDate();
    const isSystemUser = !!selectedContact?.sys;
    const {contact} = selectedContact;
    const {t} = useTranslation('common');
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const emptyMsg = message.trim() === '';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {contact.id !== null
                ? <>
                    <div className='chat-header'>
                        {isXsDown && (
                            <CustomButton onClick={handleBack}>
                                <KeyboardArrowLeft color='action' fontSize='medium'/>
                            </CustomButton>
                        )}
                        <Typography variant='subtitle1'>
                            {isSystemUser ? 'Slondo.uz' : contact.name}
                        </Typography>
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
                                maxRows={3}
                                value={message}
                                className='input'
                                onChange={handleMessage}
                                onKeyDown={handleMessage}
                                placeholder={t('write_message')}
                                variant='outlined'
                            />
                            <IconButton
                                className='send-btn'
                                onClick={sendMessage}
                                disabled={emptyMsg || isFetch}
                            >
                                <Send/>
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