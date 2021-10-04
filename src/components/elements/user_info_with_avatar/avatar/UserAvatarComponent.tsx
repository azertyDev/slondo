import {FC} from 'react';
import Link from "next/link";
import {Box, Avatar} from '@material-ui/core';
import {useStyles} from './useStyles';

type UserAvatarComponentTypes = {
    userId: number,
    avatar?: string
    width?: string | number,
    height?: string | number
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = (props) => {
    const {userId, avatar, width, height} = props;

    const classes = useStyles({width, height});
    return (
        <Box
            mr={1}
            display='flex'
            alignItems='center'
            className={classes.root}
        >
            {/*<Link href={`/user/profile_posts/${userId}`}>*/}
            {/*    <a>*/}
            <Avatar
                alt="avatar"
                src={avatar ?? '/img/avatar.svg'}
            />
            {/*    </a>*/}
            {/*</Link>*/}
        </Box>
    );
};
