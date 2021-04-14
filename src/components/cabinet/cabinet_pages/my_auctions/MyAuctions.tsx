import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CircularProgress} from '@material-ui/core';

type MyAuctionsPropsType = {
    isFetch: boolean
    handleClose: () => void,
    openModal: boolean,
    ModalContent: () => ReactElement,
    auctionCards: ReactNode
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        handleClose,
        openModal,
        ModalContent,
        auctionCards,
        isFetch
    } = props;

    return (
        <>
            {isFetch ? <CircularProgress color="secondary" /> : auctionCards}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>
    );
};
