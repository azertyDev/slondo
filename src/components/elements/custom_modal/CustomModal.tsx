import React, {EventHandler, FC, ReactElement} from 'react'
import {
    Modal,
    Backdrop,
    Fade,
    IconButton,
    Typography
} from '@material-ui/core'
import {CloseIcon} from '@src/components/elements/icons'
import {useStyles} from './useStyles'

type modalTypes = {
    title: string,
    children: ReactElement,
    handleClose: EventHandler<any>,
    open: boolean
}

export const CustomModal: FC<modalTypes> = ({ title, children, handleClose, open }) => {

    const classes = useStyles()
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
                        <Typography className="title" variant="h6">
                            {title}
                        </Typography>
                        {children}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}