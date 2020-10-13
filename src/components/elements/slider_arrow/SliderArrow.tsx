import React from "react"
import {IconButton} from "@material-ui/core"
import {RightArrow} from '../icons'
import {useStyles} from "./useStyles"


export const SliderArrow = ({className = '', clickHandler = null, direction = null}) => {
    const classes = useStyles();
    return (
        <IconButton className={`${classes.root} ${className}`} onClick={clickHandler}>
            <img className={direction === 'left' ? 'left-arrow' : ''} src={RightArrow} alt='arrow'/>
        </IconButton>
    )
};