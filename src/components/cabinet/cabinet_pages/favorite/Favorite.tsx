import React, {FC, ReactElement, ReactNode} from 'react';
import {useStyles} from './useStyles';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type FavoritePropsType = {
    handleClose: () => void,
    openModal: boolean,
    handleModalOpen: (id) => () => void,
    ModalContent: () => ReactElement;
    favoriteCards: ReactNode;
}

export const Favorite: FC<FavoritePropsType> = (props) => {
    const {
        handleClose,
        openModal,
        ModalContent,
        favoriteCards
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {favoriteCards}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </div>
    );
};
