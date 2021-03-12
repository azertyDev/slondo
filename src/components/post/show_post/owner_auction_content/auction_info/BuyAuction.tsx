import React, {useState} from 'react'
import {Typography} from '@material-ui/core'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal'
import {userAPI} from '@src/api/api'
import {useRouter} from 'next/router'

const BuyAuctionComponent = (props) => {
    const router = useRouter()
    const [modalState, setModalState] = useState('')

    console.warn('router', router)
    const {auction_id, ads_id} = props
    const [openModal, setOpenModal] = React.useState(false)
    console.warn("id", auction_id, ads_id)
    const handleModalOpen = (value) => {
        setOpenModal(true)
        setModalState(value)
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
                <ButtonComponent onClick={() => handleModalOpen('buyNow')}>
                    <Typography variant="subtitle1" color="initial">
                        Купить сейчас
                    </Typography>
                </ButtonComponent>
            </div>
            <CustomModal
                handleClose={handleModalClose}
                open={openModal}
                content={modalState}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default BuyAuctionComponent