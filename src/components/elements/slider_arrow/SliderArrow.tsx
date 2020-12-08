import React from "react"
import {IconButton} from "@material-ui/core"
import {useStyles} from "./useStyles"
import {SliderArrowIcon} from "@src/components/elements/icons/slider_arrow/SliderArrowIcon";

export const SliderArrow = ({className = '', clickHandler = null, direction = null}) => {
    const classes = useStyles();
    return (
        <IconButton className={`${classes.root} ${className}`} onClick={clickHandler}>
            <SliderArrowIcon className={direction === 'left' ? 'left-arrow' : 'right-arrow'} alt="arrow"/>
        </IconButton>
    )
};