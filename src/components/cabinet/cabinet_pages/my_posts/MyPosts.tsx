import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type MyPostsPropsType = {
    openModal: boolean;
    handleModalClose: () => void;
    ModalContent: () => ReactElement;
    myPostCards: ReactNode;
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {
        openModal,
        handleModalClose,
        ModalContent,
        myPostCards
    } = props;

    return (
        <>
            {myPostCards}
            <CustomModal
                handleModalClose={handleModalClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
        </>
    );
};
