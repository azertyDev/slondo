import React, {PropsWithChildren} from 'react'
import {ButtonBase} from '@material-ui/core'
import {useStyles} from "./useStyles"

type ButtonProps = {
    children?: PropsWithChildren<any>,
    [props: string]: any
}

export const ButtonComponent  = (props: ButtonProps) => {
    const {className, ...otherProps} = props;
    const classes = useStyles();

    return (
        <ButtonBase disableTouchRipple={true} className={`${classes.root} ${className}`} {...otherProps}/>
    )
};
