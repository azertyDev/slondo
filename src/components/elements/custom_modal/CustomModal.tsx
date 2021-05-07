import React, {FC} from 'react';
import {Backdrop, Fade, IconButton, Modal} from '@material-ui/core';
import {CloseIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';

type ModalPropsType = {
    handleModalClose: () => void,
    openModal: boolean,
    handleRemoveFavorite?: () => void,
}

export const CustomModal: FC<ModalPropsType> = (props) => {
    const {
        children,
        handleModalClose,
        openModal
    } = props;

    const classes = useStyles();
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