import {FC} from 'react';
import {CloseIcon} from '@src/components/elements/icons';
import {IconButton} from '@material-ui/core';
import {ClassNameMap} from '@material-ui/styles';
import {useStyles} from './useStyles';

type CloseBtnPropsType = {
    handleClose: () => void
};

export const CloseBtn: FC<CloseBtnPropsType> = ({handleClose}) => {
    const classes: ClassNameMap<any> = useStyles();
    return (
        <IconButton
            className={classes.root}
            onClick={handleClose}
        >
            <CloseIcon/>
        </IconButton>
    );
};