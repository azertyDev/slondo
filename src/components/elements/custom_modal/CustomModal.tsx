import {FC} from 'react';
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
                open={openModal}
                closeAfterTransition
                className={classes.modal}
                onClose={handleModalClose}
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 300}}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
            >
                <Fade in={openModal}>
                    <div className={classes.paper}>
                        <IconButton
                            onClick={handleModalClose}
                            classes={{
                                root: classes.button
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {children}
                    </div>
                </Fade>
            </Modal>
        </>
    );
};