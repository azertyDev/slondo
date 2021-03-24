import React, {FC} from 'react';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {FavoriteDataType} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';

type MyAuctionsPropsType = {
    isFetch: boolean,
    list: FavoriteDataType[],
    handleClose: () => void,
    openModal: boolean,
    content: string,
    setOpenModal: (boolean) => void,
    handleModalOpen: (value, id) => void,
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        isFetch,
        list,
        handleClose,
        openModal,
        content,
        setOpenModal,
        handleModalOpen
    } = props;

    return (
        <>
            <CabinetCard list={list} isFetch={isFetch} handleModalOpen={handleModalOpen} />
            <CustomModal
                handleClose={handleClose}
                openModal={openModal}
                content={content}
                setOpenModal={setOpenModal}
            />
        </>
    );
};
