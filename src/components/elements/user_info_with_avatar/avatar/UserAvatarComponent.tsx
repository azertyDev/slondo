import {FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Box} from '@material-ui/core';
import {useStyles} from './useStyles';

type UserAvatarComponentTypes = {
    avatar?: string
    width?: string
    height?: string
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
            {/*<StyledBadge*/}
            {/*    variant="dot"*/}
            {/*    overlap="circular"*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'bottom',*/}
            {/*        horizontal: 'right'*/}
            {/*    }}*/}
            {/*>*/}
            <Avatar
                alt="avatar"
                src={avatar ?? '/img/avatar.svg'}
            />
            {/*</StyledBadge>*/}
        </Box>
    );
};
