import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Typography, IconButton } from '@material-ui/core';
import { RootState } from '@src/redux/rootReducer';
import { resetErrorAction } from '@src/redux/slices/errorSlice';
import { useStyles } from './useStyles';
import { CloseIcon } from '@src/components/elements/icons';
import { ButtonComponent } from '../elements/button/Button';

export const ErrorModal: FC = () => {
    const { isError, errorMsg } = useSelector(
        (store: RootState) => store.error,
    );
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(resetErrorAction());
    };

    const classes = useStyles();
    return (
        <Modal open={isError} onClose={onClose}>
            <div className={classes.root}>
                <div className="close-btn-wrapper" onClick={onClose}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Typography className="error-text" variant="h6">
                    {errorMsg}
                </Typography>
                <Typography variant="subtitle1" color="initial">
                    Что-то пошло не так... <br />
                    Свяжитесь с <span>службой поддержки</span> если у вас есть
                    вопросы
                </Typography>
                <ButtonComponent>
                    <Typography variant="subtitle1" color="initial">
                        Ок
                    </Typography>
                </ButtonComponent>
            </div>
        </Modal>
    );
};
