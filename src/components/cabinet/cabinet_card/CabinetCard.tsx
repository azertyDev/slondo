import React, {FC} from 'react';
import {Box, Grid, Hidden, Paper, Tooltip, Typography} from '@material-ui/core';
import {
    CloseIcon,
    DeliveryIcon,
    DoneAllIcon,
    EyeIcon,
    LocationIcon,
    PhoneIcon,
    SafeIcon,
    SettingsIcon,
    SwapIcon
} from '@src/components/elements/icons';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {Rating} from '@src/components/elements/rating/Rating';
import Link from 'next/link';
import {formatNumber, weekDaysHelper} from '@src/helpers';
import Countdown from 'react-countdown';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {CardDataType, OffersStateType} from '@root/interfaces/Cabinet';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';

type CabinetCardPropsType = {
    isFetch?: boolean,
    list?: CardDataType[],
    offersData?: OffersStateType,
    handleModalOpen?: (id) => () => void,
    handleDeactivate?: (id) => () => void,
    handleAcceptVictory?: (ads_id, is_accepted) => () => void,
    acceptOfferThePrice?: (offer_id, is_accepted) => () => void,
    fetchAllOffers?: (auction_id) => () => void,
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const { info: { id } } = useSelector((store: RootState) => store.user);
    const { pathname } = useRouter();
    const { t } = useTranslation(['common', 'categories']);
    const {
        isFetch,
        list,
        offersData,
        handleModalOpen,
        handleDeactivate,
        handleAcceptVictory,
        fetchAllOffers,
        acceptOfferThePrice
    } = props;
    const [isPhoneAval, setIsPhoneAval] = React.useState(false);
    const handleShowPhone = () => {
        setIsPhoneAval(!isPhoneAval);
    };

    const timer = ({ days, hours, minutes, seconds, completed }) => (
        <Box display="flex">
            <Typography variant="caption" color="initial" className="timer-title">
                {completed ? 'Торги окончены' : 'Окончание торгов через'}&nbsp;-&nbsp;
            </Typography>
            <Box display="flex">
                <Typography variant="caption" className="timer">
                    {formatNumber(days)}д
                    : {formatNumber(hours)}ч
                    : {formatNumber(minutes)}м
                    : {formatNumber(seconds)}с
                </Typography>
            </Box>
        </Box>
    );

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {list?.map((el) => {
                return (
                    <Grid container key={el.id}>
                        <Grid item xs={9} className="left-content">
                            <div className="breadcrumbs">
                                <BreadcrumbsComponent>
                                    {el.category && (
                                        <Link href="#">
                                            <a>{t(`categories:${el.category.name}`)}</a>
                                        </Link>
                                    )}
                                    {el.adsable?.sub_category && (
                                        <Link href="#">
                                            <a>{t(`categories:${el.adsable.sub_category.name}`)}</a>
                                        </Link>
                                    )}
                                    {el.adsable?.type && (
                                        <Link href="#">
                                            <a>{t(`categories:${el.adsable.type.name}`)}</a>
                                        </Link>
                                    )}
                                </BreadcrumbsComponent>
                                <Box display='flex' alignItems='center'>
                                    <Typography variant="subtitle1" color="initial">
                                        <span className={el.ads_type}>
                                            {t(el.ads_type)} №:&nbsp;
                                        </span>
                                        {el.auction.id}
                                    </Typography>
                                    <div className='status'>
                                        <Typography variant='subtitle2' className='waiting'>
                                            {
                                                el.auction.is_accepted === null
                                                    ? 'Ожидание'
                                                    : el.auction.is_accepted
                                                    ? 'Принято'
                                                    : 'Отказано'
                                            }
                                        </Typography>
                                    </div>
                                </Box>
                            </div>
                            <Paper variant="outlined" elevation={2}>
                                <Box className="card-data">
                                    <div className="img">
                                        <img src={el.image} alt={el.title} />
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                            noWrap
                                            className={el.ads_type}
                                        >
                                            {t(el.ads_type)}
                                        </Typography>
                                        <span>
                                            <EyeIcon/>
                                            <Typography
                                                variant="caption"
                                                color="initial"
                                                noWrap
                                            >
                                                {el.number_of_views}
                                            </Typography>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="header">
                                            <div className="ancmnt-title">
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.title}
                                                </Typography>
                                            </div>
                                            <div className='card-btn'>
                                                {pathname?.includes('favorite')
                                                    ? <div className='isFavorite' onClick={handleModalOpen(el.id)}>
                                                        <CloseIcon />
                                                    </div>
                                                    : el.creator && (
                                                    <div className='settings' onClick={handleModalOpen(el.id)}>
                                                        <SettingsIcon />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="description">
                                            {!!el.available_days?.length && (
                                                <span className="available">
                                                <PhoneIcon/>
                                                    <Typography variant="body1" color="primary">
                                                        {weekDaysHelper(el.available_days, t)}
                                                    </Typography>
                                            </span>
                                            )}
                                            {!!el.exchange && (
                                                <Tooltip title='Возможен обмен' arrow>
                                                    <span className="exchange">
                                                        <SwapIcon/>
                                                        <Typography variant="body1">
                                                            Возможен обмен
                                                        </Typography>
                                                    </span>
                                                </Tooltip>
                                            )}
                                            {!!el.delivery && (
                                                <span className="delivery">
                                                    <DeliveryIcon/>
                                                    <Typography variant="body1">
                                                        Есть доставка
                                                    </Typography>
                                                </span>
                                            )}
                                            {!!el.safe_deal && (
                                                <span className="safe_deal">
                                                    <SafeIcon />
                                                    <Typography variant="body1">
                                                        Безопасная покупка
                                                    </Typography>
                                                </span>
                                            )}
                                        </div>
                                        {el.ads_type !== 'post' && (
                                            <Box display='flex' justifyContent='space-between'>
                                                <Countdown
                                                    date={new Date(el.expiration_at).getTime()}
                                                    renderer={timer}
                                                />
                                                <div>
                                                    <Typography variant='caption'>
                                                        Ставки: {el.auction?.number_of_bets}
                                                    </Typography>
                                                </div>
                                            </Box>
                                        )}
                                        <div className="location">
                                            <div>
                                                <LocationIcon />
                                                <Typography
                                                    variant="caption"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.region?.name},{' '}
                                                    {el.city?.name},{' '}
                                                    {el.district?.name}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h5"
                                                    color="initial"
                                                >
                                                    {el.price + ' ' + t(el.currency.name)}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Paper>
                            {(el.creator && el.auction.winner && (!!el.auction.is_accepted === false || !!el.auction.is_accepted === true)) && (
                                <div className="status-buttons">
                                    <ButtonComponent className='end-auction' onClick={handleDeactivate(el.id)}>
                                        <Typography variant='subtitle1'>
                                            Завершить аукцион
                                        </Typography>
                                    </ButtonComponent>
                                </div>
                            )}
                            {(el.status === 'suspend' && !el.creator && id === el.auction.winner_id && el.auction.is_accepted === null) && (
                                <div className="status-buttons">
                                    <ButtonComponent onClick={handleAcceptVictory(el.auction.id, true)}>
                                        <Typography variant='subtitle1'>Принять</Typography>
                                    </ButtonComponent>
                                    <ButtonComponent onClick={handleAcceptVictory(el.auction.id, false)}>
                                        <Typography variant='subtitle1'>Отказать</Typography>
                                    </ButtonComponent>
                                </div>
                            )}
                        </Grid>
                        <Hidden xsUp={false}>
                            <Grid item xs={3} className="right-content">
                                {/*{el.auction.winner && (*/}
                                {/*    <div className="profile-form">*/}
                                {/*        <div className="extreme-rate">*/}
                                {/*            <Typography*/}
                                {/*                variant="subtitle1"*/}
                                {/*                color="initial"*/}
                                {/*            >*/}
                                {/*                Победитель*/}
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
                                {/*            <UserAvatarComponent avatar={el.auction.winner.avatar} />*/}
                                {/*            <Typography*/}
                                {/*                variant="subtitle1"*/}
                                {/*                color="initial"*/}
                                {/*            >*/}
                                {/*                {el.auction.winner.name}*/}
                                {/*            </Typography>*/}
                                {/*            <Rating card />*/}
                                {/*            <ButtonComponent className='write'>*/}
                                {/*                <LetterIcon />*/}
                                {/*                <Typography*/}
                                {/*                    variant="subtitle2"*/}
                                {/*                    color="initial"*/}
                                {/*                >*/}
                                {/*                    Написать*/}
                                {/*                </Typography>*/}
                                {/*            </ButtonComponent>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <ButtonComponent className="show-phone-btn" onClick={handleShowPhone}>*/}
                                {/*                <Typography*/}
                                {/*                    variant="subtitle2"*/}
                                {/*                    color="initial"*/}
                                {/*                >*/}
                                {/*                    {isPhoneAval*/}
                                {/*                        ? el.auction.winner.phone*/}
                                {/*                        : 'Показать номер'*/}
                                {/*                    }*/}
                                {/*                </Typography>*/}
                                {/*            </ButtonComponent>*/}
                                {/*            /!* <Typography*/}
                                {/*            variant="subtitle2"*/}
                                {/*            color="initial"*/}
                                {/*        >*/}
                                {/*            <span>*</span> Оценка доступна в течении 90*/}
                                {/*            календарных дней*/}
                                {/*        </Typography> *!/*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                {/*{el.author && (*/}
                                {/*    <div className="profile-form">*/}
                                {/*        <div className="extreme-rate">*/}
                                {/*            <Typography variant="subtitle1" color="initial">*/}
                                {/*                Продавец*/}
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
                                {/*            <UserAvatarComponent avatar={el.author.avatar && el.author.avatar} />*/}
                                {/*            <Typography*/}
                                {/*                variant="subtitle1"*/}
                                {/*                color="initial"*/}
                                {/*            >*/}
                                {/*                {el.author.name}*/}
                                {/*            </Typography>*/}
                                {/*            <Rating card />*/}
                                {/*            {el.author.id}*/}
                                {/*            <ButtonComponent className='write'>*/}
                                {/*                <LetterIcon />*/}
                                {/*                <Typography*/}
                                {/*                    variant="subtitle2"*/}
                                {/*                    color="initial"*/}
                                {/*                >*/}
                                {/*                    Написать*/}
                                {/*                </Typography>*/}
                                {/*            </ButtonComponent>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <ButtonComponent className="show-phone-btn" onClick={handleShowPhone}>*/}
                                {/*                <Typography*/}
                                {/*                    variant="subtitle2"*/}
                                {/*                    color="initial"*/}
                                {/*                >*/}
                                {/*                    {isPhoneAval*/}
                                {/*                        ? el.author?.phone*/}
                                {/*                        : 'Показать номер'*/}
                                {/*                    }*/}
                                {/*                </Typography>*/}
                                {/*            </ButtonComponent>*/}
                                {/*            /!* <Typography*/}
                                {/*            variant="subtitle2"*/}
                                {/*            color="initial"*/}
                                {/*        >*/}
                                {/*            <span>*</span> Оценка доступна в течении 90*/}
                                {/*            календарных дней*/}
                                {/*        </Typography> *!/*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                {console.log((`${el.auction.id} ${el.status !== 'expired'}`))}
                                {pathname?.includes('auctions') && el.auction.offer && (el.status !== 'expired') && (
                                    <div className="offers-card">
                                        <div className="extreme-rate">
                                            <Typography variant="subtitle1" color="initial">
                                                Предложенная цена ({el.auction.number_of_offers})
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
                                            <UserAvatarComponent
                                                avatar={el.auction.offer.user.avatar && el.auction.offer.user.avatar}
                                            />
                                            <Typography
                                                variant="subtitle2"
                                                color="initial"
                                            >
                                                {el.auction.offer.user.name}
                                            </Typography>
                                            <Rating card />
                                            <Typography variant='h6'>{el.auction.offer.price} сум</Typography>
                                            <ButtonComponent className='accept'
                                                             onClick={acceptOfferThePrice(el.auction.offer.id, true)}>
                                                <DoneAllIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Принять
                                                </Typography>
                                            </ButtonComponent>
                                            <ButtonComponent className='decline'
                                                             onClick={acceptOfferThePrice(el.auction.offer.id, false)}>
                                                <CloseIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Отказать
                                                </Typography>
                                            </ButtonComponent>
                                        </div>
                                        <div>
                                            <Typography
                                                variant='subtitle1'
                                                onClick={fetchAllOffers(el.auction.id)}
                                            >
                                                Показать все предложения
                                            </Typography>
                                        </div>
                                    </div>
                                )}
                            </Grid>
                        </Hidden>
                    </Grid>
                );
            })}
        </div>
    );
};
