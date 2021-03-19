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

type modalTypes = {
    id: number,
    content: string,
    handleClose: EventHandler<any>,
    open: boolean
    title: string
}

export const CustomModal: FC<modalTypes> = ({ id, content, handleClose, open }) => {
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
                        {content === 'completePurchase' && <p>completePurchase</p>}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}