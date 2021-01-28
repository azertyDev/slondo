import React from 'react';
import {Typography, TextField} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {LockIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import { pricePrettier } from '@root/src/helpers';
import {useStyles} from './useStyles';


export const AuctionInfo = (props) => {
    const {adData} = props;
    const {data} = adData;

    const date = new Date(data.expiration_at).getTime();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction && (
                    <div className="reserve-price">
                        <LockIcon/>
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                Резервная цена:
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {pricePrettier(data.auction.reserve_price)}{' '}
                                {data.currency.name}
                            </Typography>
                        </div>
                    </div>
                )}
                {data.ads_type.mark !== 'regular' ? (
                    <div className="lot-timer">
                        {date !== 0 && <AuctionTimer date={date}/>}
                    </div>
                ) : null}
                {/* ----------------------- Убрать кнопку когда аукцион закрыт ----------------------- */}
                {data.ads_type.id === 3 && (
                    <div className="buy-now">
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Купить сейчас
                            </Typography>
                        </ButtonComponent>
                    </div>
                )}
                <div className="lot-participants-block">
                    <Typography variant="subtitle1" color="initial">
                        Текущие ставки
                    </Typography>
                    <div className="participants">
                        <ul>
                            <li>
                                <div>
                                    <div className='participant-name'>
                                        <Typography variant="subtitle1" noWrap>
                                            Playe***112 (<span>1</span>)
                                        </Typography>
                                    </div>
                                    <div className='dateAndTime'>
                                        <Typography variant="subtitle1" noWrap className='bet-time'>
                                            14:32
                                        </Typography>
                                        <Typography variant="subtitle1" noWrap className='bet-date'>
                                            04.12.20
                                        </Typography>
                                    </div>
                                </div>
                                <div className='bet'>
                                    <Typography variant="subtitle1" noWrap className='final-bet'>
                                        999 999 999
                                    </Typography>
                                    <Typography variant="subtitle1" noWrap className='per-bet'>
                                        + 200 000
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className='participant-name'>
                                        <Typography variant="subtitle1" noWrap>
                                            Sar***44 (<span>1</span>)
                                        </Typography>
                                    </div>
                                    <div className='dateAndTime'>
                                        <Typography variant="subtitle1" noWrap className='bet-time'>
                                            12:14
                                        </Typography>
                                        <Typography variant="subtitle1" noWrap className='bet-date'>
                                            04.12.20
                                        </Typography>
                                    </div>
                                </div>
                                <div className='bet'>
                                    <Typography variant="subtitle1" noWrap className='final-bet'>
                                        1 150 000
                                    </Typography>
                                    <Typography variant="subtitle1" noWrap className='per-bet'>
                                        + 120 000
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className='participant-name'>
                                        <Typography variant="subtitle1" noWrap>
                                            Grand***ve (<span>1</span>)
                                        </Typography>
                                    </div>
                                    <div className='dateAndTime'>
                                        <Typography variant="subtitle1" noWrap className='bet-time'>
                                            11:32
                                        </Typography>
                                        <Typography variant="subtitle1" noWrap className='bet-date'>
                                            04.12.20
                                        </Typography>
                                    </div>
                                </div>
                                <div className='bet'>
                                    <Typography variant="subtitle1" noWrap className='final-bet'>
                                        970 000
                                    </Typography>
                                    <Typography variant="subtitle1" noWrap className='per-bet'>
                                        + 20 000
                                    </Typography>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Typography variant="subtitle1" color="initial" className='all-bets'>
                        Все ставки
                    </Typography>
                </div>
                <div className="bet-info">
                    <div>
                        <TextField placeholder="14200000" variant="outlined"/>
                        <ButtonComponent color="secondary">
                            <Typography variant="subtitle1" color="initial">
                                Сделать ставку
                            </Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <Typography variant="subtitle2" color="initial">
                            Максимально возможная ставка
                        </Typography>
                        <Typography variant="subtitle2" color="initial">
                            2 2500 000
                        </Typography>
                    </div>
                    <div>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Предложить цену
                            </Typography>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
