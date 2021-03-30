import React, {FC, ReactElement} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';

type MyArchivePropsType = {
    isFetch: boolean;
    list?: any[];
    openModal: boolean;
    handleModalOpen: (id) => () => void;
    handleModalClose: () => void;
    ModalContent: () => ReactElement;
}

export const Archive: FC<MyArchivePropsType> = (props) => {
    const {
        list,
        isFetch,
        openModal,
        handleModalOpen,
        handleModalClose,
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
                handleModalClose={handleModalClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>

    );
};
