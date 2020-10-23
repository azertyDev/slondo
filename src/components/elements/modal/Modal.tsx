import React from 'react'
import {Modal} from '@material-ui/core'

// styles
import {useStyles} from './useStyles'


export const ModalComponent = ({children, className = '', isOpen, handleCloseModal}) => {

    const classes = useStyles();
    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            className={`${classes.root} ${className}`}
        >
            {children}
        </Modal>
    )
}