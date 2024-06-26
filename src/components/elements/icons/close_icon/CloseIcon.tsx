import React from 'react'
import {IconButton} from "@material-ui/core"
import {useStyles} from './useStyles'

export const ButtonCloseIcon = ({onClick}) => {
    const classes= useStyles();
    return (
        <IconButton className={classes.root} onClick={onClick}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 1.81208L10.8121 9L18 16.1879L16.1879 18L9 10.8121L1.81208 18L0 16.1879L7.18792 9L0 1.81208L1.81208 0L9 7.18792L16.1879 0L18 1.81208Z"
                    fill="#fafafa"
                />
            </svg>
        </IconButton>
    );
};
