import React from 'react'
import {Modal} from '@material-ui/core'

// styles
import {useStyles} from './useStyles'


export const ModalComponent = ({children, isOpen, handleCloseModal}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Modal
                open={isOpen}
                onClose={handleCloseModal}
                className={classes.modal}
            >
                {children}
            </Modal>
        </div>
    )
}