import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import { ButtonComponent } from '@src/components/elements/button/Button';
import { LockIcon } from '@src/components/elements/icons';
import { AuctionTimer } from './AuctionTimer';
import { useStyles } from './useStyles';

export const AuctionContent = (props) => {
    const { adData, t } = props;
    const { data } = adData;
    const date = new Date(data.expiration_at).getTime();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                <div className="price">
                    <Typography variant="h4" color="initial">
                        <span>{data.price}</span>{' '}
                        {t(`common:${data.currency.name}`)}
                    </Typography>
                </div>
                {data.auction && (
                    <div className="reserve-price">
                        <LockIcon />
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                Резервная цена:
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {data.auction.reserve_price}{' '}
                                {data.currency.name}
                            </Typography>
                        </div>
                    </div>
                )}
                {data.ads_type.mark !== 'regular' ? (
                    <div className="lot-timer">
                        {date !== 0 && <AuctionTimer date={date} />}
                    </div>
                ) : null}
                {data.auction ? (
                    <div className="buy-now">
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Купить сейчас
                            </Typography>
                        </ButtonComponent>
                    </div>
                ) : null}
                <div className="lot-participants-block">
                    <Typography variant="subtitle1" color="initial">
                        Текущие ставки
                    </Typography>
                    <div className="participants">
                        <div>
                            <Typography variant="subtitle1" noWrap>
                                Playe***112 (<span>1</span>)
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                1 350 000
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" noWrap>
                                Samv****91 (<span>3</span>)
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                1 240 000
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" noWrap>
                                Sar***44 (<span>1</span>)
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                1 150 000
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" noWrap>
                                Playe***54 (<span>2</span>)
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                970 000
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" noWrap>
                                Grand***ve (<span>4</span>)
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                950 000
                            </Typography>
                        </div>
                    </div>
                    <Typography variant="subtitle1" color="initial">
                        Все ставки
                    </Typography>
                </div>
                <div className="bet-info">
                    <div>
                        <TextField placeholder="14200000" variant="outlined" />
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