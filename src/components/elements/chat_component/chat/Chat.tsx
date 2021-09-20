import {useModal} from "@src/hooks";
import {AuthCtx} from "@src/context";
import {FC, Fragment, MouseEvent, useContext, useState} from 'react';
import {IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Send, CropOriginal} from "@material-ui/icons";
import {MessageType} from "../ChatContainer";
import {useTranslation} from "next-i18next";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {useStyles} from './useStyles';

type ChatProps = {
    user,
    message: string,
    messages: MessageType[],
    handleImage: (v) => void,
    handleMessage: (v) => void
    sendMessage: () => void,
    removeContact: () => void
};

const options = [
    'mute_contact',
    'remove_contact'
];

export const Chat: FC<ChatProps> = (props) => {
    const {
        user,
        messages,
        message,
        handleImage,
        handleMessage,
        removeContact,
        sendMessage
    } = props;

    const {t} = useTranslation('common');
    const self = useContext(AuthCtx).user;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedMenuItem, selectMenuItem] = useState(null);

    const title = (() => {
        switch (selectedMenuItem) {
            case 'mute_contact':
                return 'mute_contact_confirm';
            case 'remove_contact':
                return 'remove_contact_confirm';
        }
    })();

    const {
        modalOpen,
        handleModalOpen,
        handleModalClose
    } = useModal();

    const handleAnchor = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleConfirm = () => {
        switch (selectedMenuItem) {
            case 'mute_contact':
                removeContact();
                break;
            case 'remove_contact':
                removeContact();
        }
    };

    const handleMenu = ({target: {innerText}}: any) => {
        switch (innerText) {
            case 'mute_contact':
                selectMenuItem('mute_contact');
                break;
            case 'remove_contact':
                selectMenuItem('remove_contact');
        }
        handleModalOpen();
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {user && user.id !== null
                ? <>
                    <div className='chat-header'>
                        <Typography variant='subtitle1'>
                            {user.name}
                        </Typography>
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
                            anchorEl={anchorEl}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            onClose={handleClose}
                            open={Boolean(anchorEl)}
                        >
                            {options.map(option => (
                                <MenuItem
                                    key={option}
                                    onClick={handleMenu}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    <div className='message-list'>
                        {messages.map(({author, id, message}) => {
                            const {text, images} = message;
                            return (
                                <Fragment key={id}>
                                    {text && (
                                        <div
                                            key={id}
                                            className={
                                                `message ${author.id === self.id
                                                    ? 'right-side' : 'left-side'}`
                                            }
                                        >
                                            {text && (
                                                <Typography variant='subtitle1'>
                                                    <pre>
                                                        {message.text}
                                                    </pre>
                                                </Typography>
                                            )}
                                        </div>)}
                                    {images && images.map(({id, url}) =>
                                        <img key={id} src={url.default}/>
                                    )}
                                </Fragment>
                            );
                        })}
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
            <ConfirmModal
                open={modalOpen}
                title={title}
                cancelTxt={t('cancel')}
                confirmTxt={t('confirm')}
                handleConfirm={handleConfirm}
                handleClose={handleModalClose}
            />
        </div>
    );
};