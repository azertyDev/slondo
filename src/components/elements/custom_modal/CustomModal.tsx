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
                <ButtonComponent>
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
                Вы подтверждаете зdiv.profile-dataавершение покупки?
            </Typography>
            <Typography className='subtitle' variant='subtitle1'>
                При завершении покупки вы соглашаетесь с условиями услуги “<span>Безопасная покупка</span>”
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
                variant='subtitle1'
                className='subtitle'
                style={{ width: '80%', margin: '15px auto 0 auto', textAlign: 'center' }}
            >
                Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму 1 400 000 сум и соглашаетесь с условиями
                сайта
            </Typography>
            <div className='form' style={{ marginTop: 30 }}>
                <ButtonComponent
                    style={{ background: '#7DBCF6', padding: ' 10px 60px ' }}
                    onClick={() => handleSubmit()}
                >
                    <Typography variant='subtitle1' style={{ color: 'white' }}>
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>
        </div>
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