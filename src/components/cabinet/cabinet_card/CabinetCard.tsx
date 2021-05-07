import React, {FC} from 'react';
import {Box, Paper, Tooltip, Typography} from '@material-ui/core';
import {
    CloseIcon,
    DeliveryIcon,
    EyeIcon,
    LocationIcon,
    PhoneIcon,
    SafeIcon,
    SettingsIcon,
    SwapIcon
} from '@src/components/elements/icons';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import Link from 'next/link';
import {formatNumber, transformToCyrillic, weekDaysHelper} from '@src/helpers';
import Countdown from 'react-countdown';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {CardDataType} from '@root/interfaces/Cabinet';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    cardData: CardDataType,
    handleModalOpen?: (id: number, index?: number) => () => void
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {pathname} = useRouter();
    const {t} = useTranslation(['common', 'categories']);
    const {
        cardData,
        handleModalOpen
    } = props;

    const translatedTitle = transformToCyrillic(cardData.title);

    const timer = ({days, hours, minutes, seconds, completed}) => (
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
        <Box className={classes.root}>
            <div className="breadcrumbs">
                <BreadcrumbsComponent>
                    {cardData.category && (
                        <Link href="#">
                            <a>{t(`categories:${cardData.category.name}`)}</a>
                        </Link>
                    )}
                    {cardData.adsable?.sub_category && (
                        <Link href="#">
                            <a>{t(`categories:${cardData.adsable.sub_category.name}`)}</a>
                        </Link>
                    )}
                    {cardData.adsable?.type && (
                        <Link href="#">
                            <a>{t(`categories:${cardData.adsable.type.name}`)}</a>
                        </Link>
                    )}
                </BreadcrumbsComponent>
                <Box display='flex' alignItems='center'>
                    <Typography variant="subtitle1" color="initial">
                        <span className={cardData.ads_type}>
                            {t(cardData.ads_type)} №:&nbsp;
                        </span>
                        {cardData.id}
                    </Typography>
                    <div className='status'>
                        <Typography variant='subtitle2' className='waiting'>
                            {getStatus(cardData.status, cardData.auction)}
                        </Typography>
                    </div>
                </Box>
            </div>
            <Paper variant="outlined" elevation={2}>
                <Box className="card-data">
                    <div className="img">
                        <img src={cardData.image} alt={cardData.title}/>
                        <Typography
                            noWrap
                            variant="caption"
                            color="initial"
                            className={cardData.ads_type}
                        >
                            {t(cardData.ads_type)}
                        </Typography>
                        <span>
                            <EyeIcon/>
                            <Typography
                                noWrap
                                variant="caption"
                                color="initial"
                            >
                                {cardData.number_of_views}
                            </Typography>
                        </span>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="post-title">
                                <Link href={`/obyavlenie/${translatedTitle}-${cardData.id}`}>
                                    <a target='_blank'>
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            {cardData.title}
                                        </Typography>
                                    </a>
                                </Link>
                            </div>
                            <div className='card-btn'>
                                {pathname?.includes('favorite')
                                    ?
                                    <div className='isFavorite' onClick={handleModalOpen(cardData.id)}>
                                        <CloseIcon />
                                    </div>
                                    : cardData.creator && cardData.status !== 'accepted' && (
                                    <div className='settings' onClick={handleModalOpen(cardData.id, 1)}>
                                        <SettingsIcon />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="description">
                            {!!cardData.available_days && (
                                <div className="available">
                                    <PhoneIcon />
                                    <Typography variant="body1" color="primary">
                                        {weekDaysHelper(cardData.available_days, t)}{' '}
                                        {`${cardData.available_start_time}-${cardData.available_end_time}`}
                                    </Typography>
                                </div>
                            )}
                            {!!cardData.exchange && (
                                <Tooltip title='Возможен обмен' arrow>
                                    <div className="exchange">
                                        <SwapIcon/>
                                        <Typography variant="body1">
                                            Возможен обмен
                                        </Typography>
                                    </div>
                                </Tooltip>
                            )}
                            {!!cardData.delivery && (
                                <div className="delivery">
                                    <DeliveryIcon/>
                                    <Typography variant="body1">
                                        Есть доставка
                                    </Typography>
                                </div>
                            )}
                            {!!cardData.safe_deal && (
                                <div className="safe_deal">
                                    <SafeIcon/>
                                    <Typography variant="body1">
                                        Безопасная покупка
                                    </Typography>
                                </div>
                            )}
                            {/*{!cardData.safe_deal && !cardData.delivery && !cardData.exchange && !cardData.available_days && (*/}
                            {/*    <Typography noWrap variant='subtitle1'>*/}
                            {/*        {cardData.description}*/}
                            {/*    </Typography>*/}
                            {/*)}*/}
                        </div>
                        {cardData.ads_type !== 'post' && (
                            <Box display='flex' justifyContent='space-between'>
                                <Countdown
                                    date={new Date(cardData.expiration_at).getTime()}
                                    renderer={timer}
                                />
                                <div>
                                    <Typography variant='caption'>
                                        Ставки: {cardData.auction?.number_of_bets}
                                    </Typography>
                                </div>
                            </Box>
                        )}
                        <div className="location">
                            <div>
                                <LocationIcon/>
                                <Typography
                                    variant="caption"
                                    color="initial"
                                    noWrap
                                >
                                    {cardData.region?.name},{' '}
                                    {cardData.city?.name},{' '}
                                    {cardData.district?.name}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="h5"
                                    color="initial"
                                >
                                    {cardData.price + ' ' + t(cardData.currency.name)}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Box>
            </Paper>
        </Box>
    );

    function getStatus(postStatus: string, auction): string {
        switch (postStatus) {
            case 'new':
                return 'new';
            case 'suspend':
                return 'suspend';
            case 'success':
                return 'success';
            case 'accepted':
                return 'accepted';
            case 'reject':
                return 'reject';
            case 'sold':
                return 'sold';
            default:
                return postStatus;
        }
    }
};
