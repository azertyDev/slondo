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
    ModalContent: () => ReactElement;
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        isFetch,
        list,
        handleModalOpen,
        handleClose,
        openModal,
        ModalContent
    } = props;

    return (
        <>
            <CabinetCard
                list={list}
                isFetch={isFetch}
                handleModalOpen={handleModalOpen}
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
