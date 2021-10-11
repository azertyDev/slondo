import {FC, useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {browser} from 'process';
import {Box, Avatar, Badge} from '@material-ui/core';
import {AuthCtx, SocketCtx} from '@src/context';
import {useStyles} from './useStyles';
import {INCOGNITO_IDS} from "@src/constants";

type UserAvatarComponentTypes = {
    userId: number,
    avatar?: string
    width?: string | number,
    height?: string | number,
    isOnline?: boolean
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = (props) => {
    const {
        userId,
        avatar,
        width,
        height,
        isOnline
    } = props;

    const isIncognito = INCOGNITO_IDS.some(id => id === userId);
    const socket = useContext(SocketCtx);
    const [online, setOnline] = useState(false);
    const isSelf = useContext(AuthCtx).user.id === userId;

    const onlineStatus = (isOnline || online) && !isIncognito;

    useEffect(() => {
        if (browser && socket && userId) {
            socket.emit('checkOnline', userId);
            socket.on('getOnline', ({online}) => {
                setOnline(online);
            });
        }
    }, [socket, userId]);

    const classes = useStyles({onlineStatus, width, height});
    return (
        <Box
            mr={1}
            display='flex'
            alignItems='center'
            className={classes.root}
        >
            <Badge
                variant='dot'
                invisible={isSelf}
                overlap="circular"
                classes={{badge: classes.badge}}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
            >
                {isIncognito
                    ? <Avatar
                        alt="avatar"
                        src={avatar ?? '/img/avatar.svg'}
                    />
                    : <Link href={`/user/profile_posts/${userId}`}>
                        <a>
                            <Avatar
                                alt="avatar"
                                src={avatar ?? '/img/avatar.svg'}
                            />
                        </a>
                    </Link>}
            </Badge>
        </Box>
    );
};
