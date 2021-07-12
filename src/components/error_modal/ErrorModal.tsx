import {FC, useContext} from 'react';
import {Modal, Typography, IconButton} from '@material-ui/core';
import {ErrorCtx} from "@src/context";
import {CloseIcon} from '@src/components/elements/icons';
import {CustomButton} from '../elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

export const ErrorModal: FC = () => {
    const {error: {isError, errorMsg}, resetError} = useContext(ErrorCtx);

    const onClose = () => {
        resetError();
    };

    const classes = useStyles();
    return (
        <Modal open={isError} onClose={onClose}>
            <div className={classes.root}>
                <div className="close-btn-wrapper" onClick={onClose}>
                    <IconButton>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <Typography className="error-text" variant="h6">
                    {errorMsg}
                </Typography>
                <Typography variant="subtitle1" color="initial">
                    Что-то пошло не так... <br/>
                    Свяжитесь с <span>службой поддержки</span> если у вас есть
                    вопросы
                </Typography>
                <CustomButton onClick={onClose}>
                    <Typography variant="subtitle1" color="initial">
                        Ок
                    </Typography>
                </CustomButton>
            </div>
        </Modal>
    );
};
