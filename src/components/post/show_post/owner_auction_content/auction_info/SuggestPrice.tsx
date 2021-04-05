import React from 'react';
import {TextField, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

export const SuggestPriceComponent = (props) => {
    const {
        openModal,
        handleOpenModal,
        handleCloseModal,
        handleSuggestPrice,
        handleTextField
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
                Предложить цену
                <Typography variant='subtitle1'>
                    Предложенная стоимость не может быть <br />
                    меньше стартовой цены или сделанной ставки
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        placeholder='Впишите сумму'
                        onChange={handleTextField}
                    />
                    <ButtonComponent onClick={handleSuggestPrice}>
                        Предложить
                    </ButtonComponent>
                </div>
            </CustomModal>
        </>
    )
}