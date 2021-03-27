import React, {FC} from 'react';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {FavoriteDataType} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';

type MyAuctionsPropsType = {
    isFetch: boolean,
    list: FavoriteDataType[],
    handleClose: () => void,
    openModal: boolean,
    setOpenModal: (boolean) => void,
    handleModalOpen: (id?) => () => void,
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        isFetch,
        list,
        handleModalOpen,
        handleClose,
        openModal,
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
            />
        </>
    );
};
