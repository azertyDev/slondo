import {FC, useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {browser} from 'process';
import {Box, Avatar} from '@material-ui/core';
import {StyledBadge, useStyles} from './useStyles';
import {AuthCtx, SocketCtx} from '@src/context';

type UserAvatarComponentTypes = {
    userId: number,
    avatar?: string
    width?: string | number,
    height?: string | number
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = (props) => {
    const {
        userId,
        avatar,
        width,
        height
    } = props;

    const socket = useContext(SocketCtx);
    const [online, setOnline] = useState(false);
    const isSelf = useContext(AuthCtx).user.id === userId;

    const onlineClass = online ? 'online' : '';

    useEffect(() => {
        if (browser && socket && userId) {
            socket.emit('checkOnline', userId);
            socket.on('getOnline', ({online}) => {
                setOnline(online);
            });
        }
    }, [socket, userId]);

    const classes = useStyles({width, height});
    return (
        <Box
            mr={1}
            display='flex'
            alignItems='center'
            className={classes.root}
        >
            <StyledBadge
                variant='dot'
                invisible={!online}
                overlap="circular"
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
                color={online ? 'secondary' : 'error'}
            >
                <Link href={`/user/profile_posts/${userId}`}>
                    <a>
                        <Avatar
                            alt="avatar"
                            src={avatar ?? '/img/avatar.svg'}
                        />
                    </a>
                </Link>
            </StyledBadge>
            {/*<div className={`status ${onlineClass}`} />*/}
        </Box>
    );
};
