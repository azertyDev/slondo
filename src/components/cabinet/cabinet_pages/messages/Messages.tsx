import React, {FC} from 'react'
import {
    Grid, Typography,
    IconButton,
    Menu,
    MenuItem, InputBase
} from '@material-ui/core'
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper'
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SendIcon from '@material-ui/icons/Send'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import {useStyles} from './useStyles'

export const Messages: FC<any> = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const title = 'Сообщения'
    const options = [
        'None',
        'Atria',
        'Callisto'
    ]

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const classes: any = useStyles();
    return <div>
        <CabinetWrapper headerTitle={title} title={title}>
            <Grid container className={classes.messengerWrapper}>
                <Grid item xs={4} className={classes.sidebar}>
                    <div className='conversation-list'>
                        {Array.from({length: 15}).map(() => {
                            return <div className='conversation-item'>
                                <UserAvatarComponent avatar=''/>
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
                            </div>
                        })}
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.chatBlock}>
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
                            <MoreVertIcon/>
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
                            {options.map((option) => (
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
                            <AttachFileIcon/>
                        </IconButton>
                        <div className='textField'>
                            <InputBase
                                className='input'
                                placeholder='Написать сообщение'
                                fullWidth
                            />
                            <IconButton className='send-btn'>
                                <SendIcon/>
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </CabinetWrapper>
    </div>
}
