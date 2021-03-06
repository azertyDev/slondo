import React from 'react';
import Avatar from '@material-ui/core/Avatar';

// styles
import { useStyles, StyledBadge } from './useStyles';

export const UserAvatarComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root + ' ' + props.className}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar
                    alt="avatar"
                    src="https://i.pinimg.com/originals/6c/a1/68/6ca168f20499b9edf0092a57373ea5b7.jpg"
                />
            </StyledBadge>
        </div>
    );
};
