import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {LetterIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {OffersStateType} from '@root/interfaces/Cabinet';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
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
        showPhone
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <>
                {user && (
                    <div className="profile-form">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Продавец
                            </Typography>
                            <ButtonComponent>
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                >
                                    ?
                                </Typography>
                            </ButtonComponent>
                        </div>
                        <div className="profile-data">
                            <UserAvatarComponent avatar={user.avatar} />
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {user.name}
                            </Typography>
                            <Rating card />
                            {user.id}
                            <ButtonComponent className='write'>
                                <LetterIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Написать
                                </Typography>
                            </ButtonComponent>
                        </div>
                        <div>
                            <ButtonComponent className="show-phone-btn" onClick={handleShowPhone}>
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    {showPhone
                                        ? user?.phone
                                        : 'Показать номер'}
                                </Typography>
                            </ButtonComponent>
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
                {/*{data.auction.offer && (data.status !== 'expired') && (*/}
                {/*    <div className="offers-card">*/}
                {/*        <div className="extreme-rate">*/}
                {/*            <Typography variant="subtitle1" color="initial">*/}
                {/*                Предложенная цена ({data.auction.number_of_offers})*/}
                {/*            </Typography>*/}
                {/*            <ButtonComponent>*/}
                {/*                <Typography*/}
                {/*                    variant="subtitle1"*/}
                {/*                    color="initial"*/}
                {/*                >*/}
                {/*                    ?*/}
                {/*                </Typography>*/}
                {/*            </ButtonComponent>*/}
                {/*        </div>*/}
                {/*        <div className="profile-data">*/}
                {/*            <UserAvatarComponent*/}
                {/*                avatar={data.auction.offer.user.avatar && data.auction.offer.user.avatar}*/}
                {/*            />*/}
                {/*            <Typography*/}
                {/*                variant="subtitle2"*/}
                {/*                color="initial"*/}
                {/*            >*/}
                {/*                {data.auction.offer.user.name}*/}
                {/*            </Typography>*/}
                {/*            <Rating card />*/}
                {/*            <Typography variant='h6'>{data.auction.offer.price} сум</Typography>*/}
                {/*            <ButtonComponent className='accept'*/}
                {/*                             onClick={acceptOfferThePrice(data.auction.offer.id, true)}>*/}
                {/*                <DoneAllIcon />*/}
                {/*                <Typography*/}
                {/*                    variant="subtitle2"*/}
                {/*                    color="initial"*/}
                {/*                >*/}
                {/*                    Принять*/}
                {/*                </Typography>*/}
                {/*            </ButtonComponent>*/}
                {/*            <ButtonComponent className='decline'*/}
                {/*                             onClick={acceptOfferThePrice(data.auction.offer.id, false)}>*/}
                {/*                <CloseIcon />*/}
                {/*                <Typography*/}
                {/*                    variant="subtitle2"*/}
                {/*                    color="initial"*/}
                {/*                >*/}
                {/*                    Отказать*/}
                {/*                </Typography>*/}
                {/*            </ButtonComponent>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <Typography*/}
                {/*                variant='subtitle1'*/}
                {/*                onClick={fetchAllOffers(data.auction.id)}*/}
                {/*            >*/}
                {/*                Показать все предложения*/}
                {/*            </Typography>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                {/*{data.status === 'suspended' && data.auction.winner_id === id && (data.auction.is_accepted === 0) && (*/}
                {/*    <Box className='profile-form'>*/}
                {/*        <Box display='flex' className='congrat'>*/}
                {/*            <div className='cracker-icon'>*/}
                {/*                <CrackerIcon />*/}
                {/*            </div>*/}
                {/*            <Typography variant='subtitle1'>*/}
                {/*                Поздравляем! Вы победили в аукционе № {data.auction.id}*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*        <Box>*/}
                {/*            <Typography variant='subtitle1'>*/}
                {/*                Вы можете принять либо отказаться от победы в аукционе*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Box>*/}
                {/*)}*/}
            </>
        </div>
    );
};
