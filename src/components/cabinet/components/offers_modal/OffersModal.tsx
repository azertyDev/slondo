import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {Box, Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {CloseIcon, DoneAllIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {CommonModalType} from '@src/components/cabinet/Cabinet';
import {ErrorCtx} from '@src/context';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';
import {OfferCard} from '@src/components/cabinet/components/offers_modal/OfferCard';

export const OffersModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const isPublic = post.status === 'public';
    const auctionId = post.auction.id;

    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        try {
            setIsFetch(true);
            const offers = (await userAPI.getAllOffersById(auctionId)).data;
            setOffers(offers);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handleOffer = (offerId, accept: boolean) => async () => {
        try {
            setIsFetch(true);
            await userAPI.acceptOffer(offerId, accept);
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
        onClose();
    };

    useEffect(() => {
        isPublic && fetchOffers();
    }, []);

    const classes = useStyles();
    return (
        <CabinetModal
            title={t('all_offers')}
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <Box className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle2' align='center'>
                            {`Аукцион №: ${post.id}`}
                        </Typography>
                    </Grid>
                    {offers.map(offer => {
                            return (
                                <Grid item xs={12} key={offer.id}>
                                    <OfferCard
                                        offer={offer}
                                        isFetch={isFetch}
                                        handleOffer={handleOffer}
                                    />
                                </Grid>
                            );
                        }
                    )}
                </Grid>
            </Box>
        </CabinetModal>
    );
};