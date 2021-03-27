import React, {FC} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';

type MyArchivePropsType = {
    isFetch: boolean;
    list?: any[];
    openModal: boolean;
    handleModalOpen: (id) => () => void;
    handleModalClose: () => void;
}

export const Archive: FC<MyArchivePropsType> = (props) => {
    const {
        list,
        isFetch,
        openModal,
        handleModalOpen,
        handleModalClose
    } = props;

    return (
        <>
            <CabinetCard
                list={list}
                isFetch={isFetch}
                handleModalOpen={handleModalOpen}
            />
            <CustomModal handleModalClose={handleModalClose} openModal={openModal}>
                Archive settings
            </CustomModal>
        </>

    );
};
