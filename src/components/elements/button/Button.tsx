import React, {FC, PropsWithChildren} from 'react'
import {ButtonBase, ButtonBaseProps} from '@material-ui/core'
import {useStyles} from "./useStyles"


export const ButtonComponent: FC<PropsWithChildren<ButtonBaseProps>> = (props) => {
    const {className, ...otherProps} = props;
    const classes = useStyles(props);

    return (
        <ButtonBase className={`${classes.root} ${className}`} {...otherProps}/>
    )
};
