import React from 'react'
import Avatar from '@material-ui/core/Avatar'

// styles
import { useStyles, StyledBadge } from './useStyles'

export const UserAvatarComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </StyledBadge>
        </div>
    )
}

