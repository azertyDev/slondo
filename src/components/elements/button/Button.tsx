import React, {PropsWithChildren} from 'react'
import {ButtonBase, ButtonBaseProps} from '@material-ui/core'
import {useStyles} from "./useStyles"


export const ButtonComponent = (props: PropsWithChildren<ButtonBaseProps>) => {
    const {className, ...otherProps} = props;
    const classes = useStyles();

    return (
        <ButtonBase className={`${classes.root} ${className}`} {...otherProps}/>
    )
};
