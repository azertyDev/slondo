import {FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Box} from '@material-ui/core';
import {useStyles} from './useStyles';

type UserAvatarComponentTypes = {
    avatar?: string
    width?: string | number,
    height?: string | number
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = ({avatar, width, height}) => {

    const classes = useStyles({width, height});
    return (
        <Box
            mr={1}
            display='flex'
            alignItems='center'
            className={classes.root}
        >
            <Avatar
                alt="avatar"
                src={avatar ?? '/img/avatar.svg'}
            />
        </Box>
    );
};
