import {FC, useEffect, useState} from 'react';
import {userAPI} from "@src/api/api";
import {useDispatch} from "react-redux";
import {Box, Typography} from "@material-ui/core";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {CloseIcon, DoneAllIcon} from "@src/components/elements/icons";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {CabinetModal} from "@src/components/cabinet/components/cabinet_modal/CabinetModal";
import {CommonModalType} from "@src/components/cabinet/CabinetWrapper";
import {useStyles} from './useStyles';

export const OffersModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const dispatch = useDispatch();
    const [isFetch, setIsFetch] = useState(false);
    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        try {
            setIsFetch(true);
            const offers = (await userAPI.getAllOffersById(post.id)).data;
            setOffers(offers);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleOffer = (offerId, accept: boolean) => async () => {
        try {
            setIsFetch(true);
            await userAPI.acceptOfferThePrice(offerId, accept);
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        post.id && fetchOffers();
    }, [post.id]);
    console.log(offers);
    const classes = useStyles();
    return (
        <CabinetModal
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <Box className={classes.root}>
                <Box>
                    <Typography variant='h6'>Все предложения</Typography>
                    <Typography variant='subtitle2'>{`Аукцион №: ${post.id}`}</Typography>
                </Box>
                <Box width={1}>
                    {offers.map(offer => {
                        return (
                            <Box px={5} py={2} display='flex' key={offer.id}>
                                <Box>
                                    <UserInfoWithAvatar owner={offer.user} isOwner={true}/>
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2'>
                                        {offer.created_at}
                                    </Typography>
                                    <div>
                                        <Typography variant='subtitle2'>
                                            Предложенная цена
                                        </Typography>
                                        {offer.price}
                                    </div>
                                    <div>
                                        <CustomButton
                                            className='accept'
                                            disabled={isFetch}
                                            onClick={handleOffer(offer.id, true)}
                                        >
                                            <DoneAllIcon/>
                                            <Typography
                                                variant="subtitle2"
                                                color="initial"
                                            >
                                                Принять
                                            </Typography>
                                        </CustomButton>
                                        <CustomButton
                                            className='decline'
                                            disabled={isFetch}
                                            onClick={handleOffer(offer.id, false)}
                                        >
                                            <CloseIcon/>
                                            <Typography
                                                variant="subtitle2"
                                                color="initial"
                                            >
                                                Отказать
                                            </Typography>
                                        </CustomButton>
                                    </div>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </CabinetModal>
    );
};