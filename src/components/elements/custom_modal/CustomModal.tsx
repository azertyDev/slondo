import React, {FC} from 'react';
import {Backdrop, Fade, IconButton, List, ListItem, ListItemText, Modal, Typography} from '@material-ui/core';
import {CloseIcon} from '@src/components/elements/icons';
import {ButtonComponent} from '@src/components/elements/button/Button';
import Link from 'next/link';
import {useStyles} from './useStyles';

type ModalPropsType = {
    handleModalClose: () => void,
    openModal: boolean,
    handleSubmit?: () => void,
    handleRemoveFavorite?: () => void
}

export const CustomModal: FC<ModalPropsType> = (props) => {
    const {
        children,
        handleModalClose,
        openModal,
        handleSubmit,
        handleRemoveFavorite
    } = props;
    const classes = useStyles();

    const disableFavorite = (
        <>
            <Typography className="title" variant="h6">
                Вы действительно хотите удалить объявление из избранных
            </Typography>
            <div className='confirm'>
                <ButtonComponent className='submit' onClick={handleRemoveFavorite}>
                    <Typography variant='subtitle1'>
                        Да
                    </Typography>
                </ButtonComponent>
                <ButtonComponent onClick={handleModalClose}>
                    <Typography variant='subtitle1'>
                        Нет
                    </Typography>
                </ButtonComponent>
            </div>
        </>
    )

    const completePurchase = (
        <>
            <Typography className="title" variant="h6">
                Вы подтверждаете завершение покупки?
            </Typography>
            <Typography className='subtitle' variant='subtitle1'>
                При завершении покупки вы соглашаетесь с условиями услуги “<span className='safe-deal'>Безопасная покупка</span>”
            </Typography>
            <div className='confirm'>
                <ButtonComponent className='submit'>
                    <Typography variant='subtitle1'>
                        Подтвердить
                    </Typography>
                </ButtonComponent>
            </div>
        </>
    )

    const buyNow = (
        <>
            <Typography className="title" variant="h6">
                Купить сейчас
            </Typography>
            <Typography
                variant='subtitle1'
                className='subtitle'
            >
                Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму&nbsp;
                <span className='buy-now-price'>1 400 000</span> сум и соглашаетесь с&nbsp;
                <span className='condition'>
                    <Link href="#">
                        <a>условиями</a>
                    </Link>
                </span> сайта
            </Typography>
            <div className='confirm'>
                <ButtonComponent
                    className='submit'
                    onClick={() => handleSubmit()}
                >
                    <Typography variant='subtitle1'>
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>
        </>
    )

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 300
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.paper}>
                        <IconButton
                            onClick={handleModalClose}
                            className={classes.closeBtn}
                        >
                            <CloseIcon />
                        </IconButton>
                        {children}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}