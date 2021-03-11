import React from 'react'
import {Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {CustomModal} from "@src/components/elements/custom_modal/CustomModal";
import {userAPI} from "@src/api/api";
import {useRouter} from "next/router";

const BuyAuctionComponent = (props) => {
    const router = useRouter()

    const {auction_id, ads_id} = props
    const [openModal, setOpenModal] = React.useState(false)
    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () => {
        setOpenModal(false)
    }
    const handleSubmit = () => {
        userAPI.buyAuction(auction_id, ads_id)
            .then(result => router.push('/'))
    }
    return (
        <>
            <div className="buy-now">
                <Typography variant="subtitle1" color="initial">
                    1 420 000 000 сум
                </Typography>
                <ButtonComponent onClick={handleModalOpen}>
                    <Typography variant="subtitle1" color="initial">
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>
            <CustomModal title='Купить сейчас' handleClose={handleModalClose} open={openModal}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography variant='subtitle1' className='subtitle' style={{width: '80%', margin: "15px auto 0 auto", textAlign: "center"}}>
                        Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму 1 400 000 сум и соглашаетесь с условиями сайта
                    </Typography>
                    <div className='form' style={{marginTop: 30}}>
                        <ButtonComponent style={{background: '#7DBCF6', padding: ' 10px 60px '}} onClick={() => handleSubmit()}>
                            <Typography variant='subtitle1' style={{color: 'white'}}>
                                Купить сейчас
                            </Typography>
                        </ButtonComponent>
                    </div>
                </div>
            </CustomModal>
        </>
    )
}

export default BuyAuctionComponent