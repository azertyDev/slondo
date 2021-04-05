import React, {FC, ReactElement} from 'react';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CardDataType} from '@root/interfaces/Cabinet';

type MyAuctionsPropsType = {
    isFetch: boolean,
    list: CardDataType[],
    handleClose: () => void,
    openModal: boolean,
    setOpenModal: (boolean) => void,
    handleModalOpen: (id?) => () => void,
    handleDeactivate?: (ads_id) => () => void,
    handleAcceptVictory?: (ads_id, is_accepted) => () => void,
    ModalContent: () => ReactElement;
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        isFetch,
        list,
        handleModalOpen,
        handleClose,
        openModal,
        handleDeactivate,
        handleAcceptVictory,
        ModalContent
    } = props;

    return (
        <>
            <CabinetCard
                list={list}
                isFetch={isFetch}
                handleModalOpen={handleModalOpen}
                handleDeactivate={handleDeactivate}
                handleAcceptVictory={handleAcceptVictory}
            />
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>
    );
};
