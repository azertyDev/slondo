import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type MyAuctionsPropsType = {
    handleClose: () => void,
    openModal: boolean,
    ModalContent: () => ReactElement,
    auctionCard: ReactNode
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        handleClose,
        openModal,
        ModalContent,
        auctionCard
    } = props;

    return (
        <>
            {auctionCard}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>
    );
};
