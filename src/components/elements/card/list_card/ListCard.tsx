import {FC} from 'react';
import {EyeIcon} from '@src/components/elements/icons';
import Link from 'next/link';
import {formatNumber, numberPrettier, transformCyrillic} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import Countdown from 'react-countdown';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';
import image from 'next/image';

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

    const classes = useStyles({cardData});
    return (
        <Paper variant="outlined" elevation={2} className={classes.root}>
            <Grid container className="card-data">
                <Grid item xs={5} sm={3} className="img">
                    <Typography
                        noWrap
                        color="initial"
                        variant="caption"
                        className={cardData.ads_type}
                    >
                        {t(`common:${cardData.ads_type}`)}
                    </Typography>
                    <Box
                        width={1}
                        bottom={0}
                        display='flex'
                        padding='5px'
                        position='absolute'
                        className='observer-block'
                        justifyContent='space-between'
                    >
                        <span>
                            <EyeIcon />
                            <Typography
                                noWrap
                                variant="caption"
                                color="initial"
                            >
                                {cardData.observer?.number_of_views}
                            </Typography>
                        </span>
                        <span>
                            <EyeIcon />
                            <Typography
                                noWrap
                                variant="caption"
                                color="initial"
                            >
                                {cardData.observer?.number_of_favorites}
                            </Typography>
                    </span>
                    </Box>
                </Grid>
                <Grid item xs={7} sm={9} container className="content">
                    <Grid xs={8} className="post-title">
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
                    </Grid>
                    <Grid item xs={8} className="description">
                        <Typography noWrap variant='subtitle2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                        {/*{cardData.description && (*/}
                        {/*    <Typography noWrap variant='subtitle2'>*/}
                        {/*        {cardData.description}*/}
                        {/*    </Typography>*/}
                        {/*)}*/}
                    </Grid>
                    {cardData.ads_type !== 'post' && (
                        <Grid item xs={8}>
                            <Countdown
                                date={new Date(cardData.expiration_at).getTime()}
                                renderer={timer}
                            />
                            <Typography variant='subtitle1'>
                                Ставки: {cardData.auction?.number_of_bets || 0}
                            </Typography>
                        </Grid>
                    )}
                    <Grid item xs={8} className='priceAndBet'>
                        {isAuction && hasBet && <>
                            <Typography variant='subtitle1'>
                                Текущая ставка
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {numberPrettier(cardData.auction?.bet?.bet)}&nbsp;
                                <span>{t(`common:${cardData.currency.name}`)}</span>
                            </Typography>
                        </>}
                        <Typography variant="h6" color="initial">
                            {numberPrettier(cardData.price)}&nbsp;
                            <span>{t(`common:${cardData.currency.name}`)}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};