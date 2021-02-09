import React from "react"
import {IconButton} from "@material-ui/core"
import {useStyles} from './useStyles'

export const PrevArrowIcon = ({onClick}) => {

    const classes = useStyles();
    return (
        <IconButton className={classes.root} onClick={onClick}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 7.89474V10.1053H4.31579L10.5789 16.4211L9 18L0 9L9 0L10.5789 1.57895L4.31579 7.89474H18Z"
                    fill="white"
                />
            </svg>
        </IconButton>
    )
};
