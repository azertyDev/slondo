import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BuyAuctionComponent = (props) => {
    const router = useRouter();
    const { auction_id, ads_id } = props;
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);

    const handleOpenModal = () => () => {
        setOpenModal(true);
        console.log('asdasd');
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleSubmit = () => {
        userAPI.buyAuction(auction_id, ads_id)
            .then(result => router.push('/'));
    };
    return (
        <>
            <div className="buy-now">
                <Typography variant="subtitle1" color="initial">
                    1 420 000 000 сум
                </Typography>
                <ButtonComponent onClick={handleOpenModal()}>
                    <Typography variant="subtitle1" color="initial">
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>

            <CustomModal handleModalClose={handleCloseModal} openModal={openModal}>
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
                            onClick={() => handleSubmit()}
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