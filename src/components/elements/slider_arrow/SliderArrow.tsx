import React, {FC} from "react"
import {IconButton} from "@material-ui/core"
import {useStyles} from "./useStyles"
import {SliderArrowIcon} from "@src/components/elements/icons/slider_arrow/SliderArrowIcon";


type SliderArrowProps = {
    className?: string;
    onClick?: () => void;
    type?: string;
};

export const SliderArrow: FC<SliderArrowProps> = ({onClick, className, type}) => {
    const classes = useStyles();
    return (
        <IconButton
            className={`${classes.root} ${className}`}
            onClick={onClick}
        >
            <SliderArrowIcon className={type}/>
        </IconButton>
    )
};