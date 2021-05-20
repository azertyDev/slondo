import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CircularProgress} from '@material-ui/core';

type MyPostsPropsType = {
    isFetch: boolean,
    openModal: boolean;
    handleModalClose: () => void;
    ModalContent: () => ReactElement;
    myPostCards: ReactNode;
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {
        isFetch,
        openModal,
        handleModalClose,
        ModalContent,
        myPostCards
    } = props;

    return (
        <>
            {isFetch ? <CircularProgress color="secondary" /> : myPostCards}
            <CustomModal
                handleModalClose={handleModalClose}
                openModal={openModal}
            >
                <ModalContent/>
            </CustomModal>
        </>
    );
};
