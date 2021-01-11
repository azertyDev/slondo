import React, {FC} from "react"
import {IconButton} from "@material-ui/core"
import {useStyles} from "./useStyles"


type SliderArrowProps = {
    className?: string;
    onClick?: () => void;
};

export const SliderArrow: FC<SliderArrowProps> = ({onClick, className}) => {
    const classes = useStyles();
    return (
        <IconButton
            className={`${classes.root} ${className}`}
            onClick={onClick}
        />
    )
};