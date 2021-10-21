import {FC} from 'react';
import {CloseIcon} from '@src/components/elements/icons';
import {IconButton} from '@material-ui/core';
import {useStyles} from './useStyles';

type CloseBtnPropsType = {
    className?: string,
    handleClose: () => void
};

export const CloseBtn: FC<CloseBtnPropsType> = ({handleClose, className = ''}) => {
    const classes: any = useStyles();
    return (
        <IconButton
            onClick={handleClose}
            className={`${classes.root} ${className}`}
        >
            <CloseIcon/>
        </IconButton>
    );
};