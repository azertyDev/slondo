import React from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

export const SuggestPriceComponent = (props) => {
    const {
        openModal,
        handleOpenModal,
        handleCloseModal
    } = props;

    return (
        <>
            <div className='suggest_price'>
                <ButtonComponent onClick={handleOpenModal()}>
                    <Typography variant="subtitle1" color="initial">
                        Предложить цену
                    </Typography>
                </ButtonComponent>
            </div>
            <CustomModal handleModalClose={handleCloseModal()} openModal={openModal}>

            </CustomModal>
        </>
    )
}