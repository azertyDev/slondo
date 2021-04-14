import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type MyArchivePropsType = {
    archiveCard: ReactNode;
    openModal: boolean;
    handleModalClose: () => void;
    ModalContent: () => ReactElement;
}

export const Archive: FC<MyArchivePropsType> = (props) => {
    const {
        archiveCard,
        openModal,
        handleModalClose,
        ModalContent
    } = props;

    return (
        <>
            {archiveCard}
            <CustomModal
                handleModalClose={handleModalClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>

    );
};
