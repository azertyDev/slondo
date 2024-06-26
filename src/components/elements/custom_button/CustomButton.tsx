import {FC, PropsWithChildren} from 'react';
import {ButtonBase, ButtonBaseProps} from '@material-ui/core';
import {useStyles} from './useStyles';

export const CustomButton: FC<PropsWithChildren<ButtonBaseProps>> = (props) => {
    const {className, disabled, ...otherProps} = props;

    const classes = useStyles(props);
    return (
        <ButtonBase
            {...otherProps}
            disabled={disabled}
            className={className}
            classes={{root: classes.root}}
        />
    );
};