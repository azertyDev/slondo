import React, {EventHandler, FC} from 'react'
import {
    Modal,
    Backdrop,
    Fade,
    IconButton,
    Typography, List, ListItem, ListItemText
} from '@material-ui/core'
import {CloseIcon} from '@src/components/elements/icons'
import {useStyles} from './useStyles'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {Link} from '@root/i18n'

type ModalTypes = {
    id?: number,
    content: string,
    handleClose: EventHandler<any>,
    handleSubmit?: () => void,
    open: boolean
}

export const CustomModal: FC<ModalTypes> = ({ id, content, handleClose, open, handleSubmit }) => {
    const classes = useStyles()

    const settings = (
        <>
            <Typography className="title" variant="h6">
                Объявление № {id}
            </Typography>
            <List component="nav" aria-label="main" className={classes.settingsList} disablePadding>
                <ListItem button>
                    <ListItemText
                        primary='Деактивировать'
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText
                        primary="Поднять в ленте"
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondary="(можно использовать 1 раз в 3 дня)"
                        secondaryTypographyProps={{ variant: 'subtitle2' }}
                    />
                </ListItem>
            </List>
        </>
    )

    const disableFavorite = (
        <>
            <Typography className="title" variant="h6">
                Вы действительно хотите удалить объявление из избранных
            </Typography>
            <div className='confirm'>
                <ButtonComponent className='submit'>
                    <Typography variant='subtitle1'>
                        Да
                    </Typography>
                </ButtonComponent>
                <ButtonComponent>
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
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 300
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <IconButton
                            onClick={handleClose}
                            className={classes.closeBtn}
                        >
                            <CloseIcon />
                        </IconButton>
                        {content === 'settings' && (settings)}
                        {content === 'disableFavorite' && (disableFavorite)}
                        {content === 'completePurchase' && (completePurchase)}
                        {content === 'buyNow' && (buyNow)}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}