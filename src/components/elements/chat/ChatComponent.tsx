import {FC, MouseEvent, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {Grid, IconButton, InputBase, Menu, MenuItem, Typography} from "@material-ui/core";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {MoreVert, AttachFile, Send} from "@material-ui/icons";
import {useStyles} from './useStyles';
import {chatAPI} from "@src/api/api";

export const ChatComponent: FC = () => {
    const [contacts, setContacts] = useState([]);
    const [chat, setChat] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const title = 'Сообщения';

    const options = [
        'None',
        'Atria',
        'Callisto'
    ];

    const fetchUserContacts = async () => {
        try {
            setIsFetch(true);

            const contacts = (await chatAPI.getUserContacts()).data;

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setContacts(contacts);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.mesage);
                setIsFetch(false);
            });
        }
    };

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        fetchUserContacts();
    }, []);

    console.log(contacts);
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} className='chat-sidebar'>
                <div className='conversation-list'>
                    {Array.from({length: 3}).map((_, i) => {
                        return <div key={i} className='conversation-item'>
                            <UserAvatarComponent
                                avatar=''
                                width={50}
                                height={50}
                            />
                            <div className='user-info'>
                                <div className='user-name'>
                                    <Typography variant='subtitle1'>
                                        Feiyutech store
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                        18:36
                                    </Typography>
                                </div>
                                <Typography variant='subtitle2' className='message-fragment' noWrap>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                            </div>
                        </div>;
                    })}
                </div>
            </Grid>
            <Grid item xs={8} className='chat-block'>
                <div className='chat-header'>
                    <Typography variant='subtitle1'>
                        Feiyutech store
                    </Typography>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVert/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map(option => (
                            <MenuItem key={option} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className='message-list'>
                    <div className='message'>
                        <Typography variant='subtitle1'>First Message </Typography>
                    </div>
                </div>
                <div className='compose'>
                    <IconButton className='sendFileBtn'>
                        <AttachFile/>
                    </IconButton>
                    <div className='textField'>
                        <InputBase
                            className='input'
                            placeholder='Написать сообщение'
                            fullWidth
                        />
                        <IconButton className='send-btn'>
                            <Send/>
                        </IconButton>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};