import React, {FC, ReactElement} from 'react';
import {useStyles} from './useStyles';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {CardDataType} from '@root/interfaces/Cabinet';

type FavoritePropsType = {
    isFetch: boolean,
    list: CardDataType[],
    handleClose: () => void,
    openModal: boolean,
    handleModalOpen: (id) => () => void,
    ModalContent: () => ReactElement;
}

export const Favorite: FC<FavoritePropsType> = (props) => {
    const {
        isFetch,
        list,
        handleClose,
        openModal,
        handleModalOpen,
        ModalContent
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetCard
                isFetch={isFetch}
                list={list}
                handleModalOpen={handleModalOpen}
            />
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </div>
    );
};
