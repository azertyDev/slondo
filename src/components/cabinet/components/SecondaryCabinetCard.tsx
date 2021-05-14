import React, {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {CloseIcon, CrackerIcon, DoneAllIcon, LetterIcon} from '@src/components/elements/icons';
import {useTranslation} from 'react-i18next';
import {OffersStateType} from '@root/interfaces/Cabinet';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import StarIcon from '@material-ui/icons/Star';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    user?,
    offersData?: OffersStateType,
    handleOpenModal?: (id) => () => void,
    acceptOfferThePrice?: (offer_id, is_accepted) => () => void,
    fetchAllOffers?: (auction_id) => () => void,
    handleShowPhone?: () => void,
    showPhone?: boolean
}

export const SecondaryCabinetCard: FC<CabinetCardPropsType> = (props) => {
    const { info: { id } } = useSelector((store: RootState) => store.user);
    const { t } = useTranslation(['common', 'categories']);
    const {
        user,
        handleShowPhone,
        showPhone,
        acceptOfferThePrice,
        fetchAllOffers
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <>
                {/*Продавец*/}
                {user.author && user.status === 'success' && (
                    <div className="profile-form">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Продавец
                            </Typography>
                            <CustomButton>
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                >
                                    ?
                                </Typography>
                            </CustomButton>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent avatar={user.author.avatar} />
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {user.author.name}
                            </Typography>
                            <Rating card />
                            <CustomButton className='rate'>
                                <StarIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Оценить
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <Typography
                                variant="subtitle2"
                                color="initial"
                            >
                                <span>*</span> Оценка доступна в течении 90
                                календарных дней
                            </Typography>
                        </div>
                    </div>
                )}
                {/*Покупатель*/}
                {user.auction?.winner && (
                    <div className="profile-form">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Победитель
                            </Typography>
                            <CustomButton>
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                >
                                    ?
                                </Typography>
                            </CustomButton>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent avatar={user.auction.winner.avatar} />
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {user.auction.winner.name}
                            </Typography>
                            <Rating card />
                            <CustomButton className='write'>
                                <LetterIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Написать
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <CustomButton className="show-phone-btn" onClick={handleShowPhone}>
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    {showPhone
                                        ? user.auction.winner.phone
                                        : 'Показать номер'}
                                </Typography>
                            </CustomButton>
                            {/* <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    <span>*</span> Оценка доступна в течении 90
                                    календарных дней
                                </Typography> */}
                        </div>
                    </div>
                )}
                {/*Предложенная цена*/}
                {user.auction?.offer && !user.auction?.winner && (
                    <div className="offers-card">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Предложенная цена ({user.auction.number_of_offers})
                            </Typography>
                            <CustomButton>
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                >
                                    ?
                                </Typography>
                            </CustomButton>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent
                                avatar={user.auction.offer.user.avatar && user.auction.offer.user.avatar}
                            />
                            <Typography
                                variant="subtitle2"
                                color="initial"
                            >
                                {user.auction.offer.user.name}
                            </Typography>
                            <Rating card />
                            <Typography variant='h6'>{user.auction.offer.price} сум</Typography>
                            <CustomButton className='accept'
                                          onClick={acceptOfferThePrice(user.auction.offer.id, true)}>
                                <DoneAllIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Принять
                                </Typography>
                            </CustomButton>
                            <CustomButton
                                className='decline'
                                onClick={acceptOfferThePrice(user.auction.offer.id, false)}
                            >
                                <CloseIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Отказать
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <Typography
                                variant='subtitle1'
                                onClick={fetchAllOffers(user.auction.id)}
                            >
                                Показать все предложения
                            </Typography>
                        </div>
                    </div>
                )}
                {/*Поздравляем! Вы победили в аукционе*/}
                {user.status === 'suspended' && user.auction.winner_id === id && (
                    <Box className='profile-form'>
                        <Box display='flex' className='congrat'>
                            <div className='cracker-icon'>
                                <CrackerIcon />
                            </div>
                            <Typography variant='subtitle1'>
                                Поздравляем! Вы победили в аукционе № {user.auction.id}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1'>
                                Вы можете принять либо отказаться от победы в аукционе
                            </Typography>
                        </Box>
                    </Box>
                )}
            </>
        </div>
    );
};
