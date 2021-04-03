import React from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BuyAuctionComponent = (props) => {
    const router = useRouter();
    const {
        data: { auction },
        handleBuyNow,
        openModal,
        handleOpenModal,
        handleCloseModal
    } = props;

    return (
        <>
            <div className="buy-now">
                <Typography variant="subtitle1" color="initial">
                    {auction.price_by_now} сум
                </Typography>
                <ButtonComponent onClick={handleOpenModal()}>
                    <Typography variant="subtitle1" color="initial">
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>

            <CustomModal handleModalClose={handleCloseModal()} openModal={openModal}>
                <>
                    <Typography className="title" variant="h6">
                        Купить сейчас
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        className='subtitle'
                    >
                        Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму&nbsp;
                        <span className='buy-now-price'>1 400 000</span> сум и соглашаетесь с&nbsp;
                        <span className='condition'>
                    <Link href="#">
                        <a>условиями</a>
                    </Link>
                </span> сайта
                    </Typography>
                    <div className='confirm'>
                        <ButtonComponent
                            className='submit'
                            onClick={handleBuyNow()}
                        >
                            <Typography variant='subtitle1'>
                                Купить сейчас
                            </Typography>
                        </ButtonComponent>
                    </div>
                </>
            </CustomModal>
        </>
    )
}

export default BuyAuctionComponent