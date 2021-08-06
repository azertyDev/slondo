import {FC} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {StyledBadge, useStyles} from './useStyles';

type UserAvatarComponentTypes = {
    avatar?: string
    width?: string
    height?: string
};

export const UserAvatarComponent: FC<UserAvatarComponentTypes> = ({avatar, width, height}) => {
    const classes = useStyles({width, height});
    return (
        <div className={classes.root}>
            <StyledBadge
                variant="dot"
                overlap="circular"
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
