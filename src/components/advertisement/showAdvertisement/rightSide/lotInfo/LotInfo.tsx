import React from 'react';
import {Typography, TextField} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {Lock_icon} from '@src/components/elements/icons';
import {LotTimer} from "@src/components/advertisement/showAdvertisement/rightSide/lotInfo/LotTimer";

// styles
import {useStyles} from './useStyles';


export const LotInfo = (props) => {
    const {adData, t} = props;
    const {data} = adData;
    const date = new Date(data.expiration_at).getTime();


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                <div>
                    {date !== 0 && <LotTimer {...data} date={date}/>}
                </div>
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
                </div>
                <Typography variant="subtitle1" color="initial">
                    Все ставки
                </Typography>
                <div className="bet-info">
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Сделать ставку
                        </Typography>
                    </div>
                    <div>
                        <TextField placeholder="14200000" variant='outlined'/>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Применить
                            </Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <Typography variant="subtitle2" color="initial">
                            Максимально возможная ставка 2025000
                        </Typography>
                    </div>
                    <div>
                        <img src={Lock_icon} alt="lock-icon"/>
                        <Typography variant="subtitle1" color="initial">
                            Резервная цена:
                        </Typography>
                        <Typography variant="subtitle1" color="initial">
                            1 420 000 сум
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <Typography variant="subtitle1" color="initial">
                                1 420 000 сум
                            </Typography>
                        </div>
                        <div>
                            <ButtonComponent>
                                <Typography variant="subtitle1" color="initial">
                                    Купить сейчас
                                </Typography>
                            </ButtonComponent>
                        </div>
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
