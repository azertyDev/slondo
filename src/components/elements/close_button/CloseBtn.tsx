import {FC} from 'react';
import {CloseIcon} from '@src/components/elements/icons';
import {IconButton} from '@material-ui/core';
import {ClassNameMap} from '@material-ui/styles';
import {useStyles} from './useStyles';

type CloseBtnPropsType = {
    className?: string,
    handleClose: () => void
};

export const CloseBtn: FC<CloseBtnPropsType> = ({handleClose, className = ''}) => {
    const classes: ClassNameMap<any> = useStyles();
    return (
        <IconButton
            className={`${classes.root} ${className}`}
            onClick={handleClose}
        >
            <CloseIcon/>
        </IconButton>
    );
};