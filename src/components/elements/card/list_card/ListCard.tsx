import {FC} from 'react';
import {EyeIcon} from '@src/components/elements/icons';
import Link from 'next/link';
import {formatNumber, numberPrettier, transformCyrillic} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import Countdown from 'react-countdown';
import {Box, Paper, Typography} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';

type ListCardPropsType = {
    cardData: CardDataType
}

export const ListCard: FC<ListCardPropsType> = ({cardData}) => {
    const {t} = useTranslation('common');

    const isAuction = cardData.ads_type === 'auc' || cardData.ads_type === 'exauc';
    const hasBet = !!cardData.auction?.number_of_bets;

    const timer = ({days, hours, minutes, seconds, completed}) => (
        <Box display="flex" alignItems='center'>
            <Typography variant="caption" color="initial" className="timer-title">
                {completed ? 'Торги окончены' : 'Окончание торгов через - '}&nbsp;
            </Typography>
            {!completed && (
                <Box display="flex">
                    <Typography variant="subtitle1" className="timer" color='primary'>
                        {formatNumber(days)}д
                        : {formatNumber(hours)}ч
                        : {formatNumber(minutes)}м
                        : {formatNumber(seconds)}с
                    </Typography>
                </Box>
            )}
        </Box>
    );

    const translatedTitle = transformCyrillic(cardData.title);

    const url = `/obyavlenie/${translatedTitle}-${cardData.id}`;

    const classes = useStyles();
    return (
        <Paper variant="outlined" elevation={2} className={classes.root}>
            <Box className="card-data">
                <div className="img">
                    <img src={cardData.image ?? '/img/Vector.png'} alt={cardData.title}/>
                    <Typography
                        noWrap
                        color="initial"
                        variant="caption"
                        className={cardData.ads_type}
                    >
                        {t(`common:${cardData.ads_type}`)}
                    </Typography>
                    <span>
                        <EyeIcon/>
                        <Typography
                            noWrap
                            variant="caption"
                            color="initial"
                        >
                            {cardData.observer?.number_of_views}
                        </Typography>
                    </span>
                </div>
                <div className="content">
                    <div className="post-title">
                        <Link href={url}>
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
                    <div className="description">
                        {cardData.description && (
                            <Typography noWrap variant='subtitle2'>
                                {cardData.description}
                            </Typography>
                        )}
                    </div>
                    {cardData.ads_type !== 'post' && (
                        <Box display='flex' justifyContent='space-between'>
                            <Countdown
                                date={new Date(cardData.expiration_at).getTime()}
                                renderer={timer}
                            />
                            <div>
                                <Typography variant='subtitle1'>
                                    Ставки: {cardData.auction?.number_of_bets}
                                </Typography>
                            </div>
                        </Box>
                    )}
                    <div className='priceAndBet'>
                        {isAuction
                         ? hasBet && <>
                            <Typography variant='subtitle1'>
                                Текущая ставка
                            </Typography>
                            <Typography
                                variant="h6"
                                color="initial"
                            >
                                {numberPrettier(cardData.auction?.bet?.bet)}&nbsp;
                                <span>{t(`common:${cardData.currency.name}`)}</span>
                            </Typography>
                        </>
                         : <Typography
                             variant="h6"
                             color="initial"
                         >
                             {numberPrettier(cardData.price)}&nbsp;
                             <span>{t(`common:${cardData.currency.name}`)}</span>
                         </Typography>}
                    </div>
                </div>
            </Box>
        </Paper>
    );
};