import React, {FC, ReactElement} from 'react';
import {useStyles} from './useStyles';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type MyPostsPropsType = {
    isFetch: boolean;
    list?: any[];
    openModal: boolean;
    handleModalOpen: (id) => () => void;
    handleModalClose: () => void;
    ModalContent: () => ReactElement;
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {
        isFetch,
        list,
        openModal,
        handleModalOpen,
        handleModalClose,
        ModalContent
    } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
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
        </div>
    );
};
