import React, {FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {StyledBadge, useStyles} from './useStyles';

type UserAvatarComponentTypes = {
    avatar?: string
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = ({avatar}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <StyledBadge
                variant="dot"
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
            >
                <Avatar
                    alt="avatar"
                    src={avatar ?? ''}
                />
            </StyledBadge>
        </div>
    );
};
