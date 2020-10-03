import React from "react";
import {IconButton} from "@material-ui/core";
import {RightArrow} from '../icons'
import {useStyles} from "./useStyles"


export const SliderArrow = ({clickHandler = null, direction = null}) => {
    const classes = useStyles();
    return (
        <IconButton className={classes.root} onClick={clickHandler}>
            <img className={direction === 'left' ? 'left-arrow' : ''} src={RightArrow}/>
        </IconButton>
    )
};