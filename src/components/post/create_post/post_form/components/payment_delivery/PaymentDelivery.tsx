import React, {FC} from "react";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {Help} from "@material-ui/icons";
import {useStyles} from './useStyles';


export const PaymentDelivery: FC<any> = (props) => {
    const {
        isPreview,
        handleCheckboxChange,
        defaultParams,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" color="initial">
                <strong>Оплата и доставка</strong>
            </Typography>
            <Grid
                container
                item
                xs={12}
                alignItems="center"
                justify="space-between"
            >
                <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        Безопасный торг
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        disabled={isPreview}
                        checked={defaultParams.safe_deal}
                        onChange={handleCheckboxChange('safe_deal')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: Вы подключили услугу «Безопасный
                        торг». Ваша сделка защищена. Стоимость
                        услуги составляет n%.{' '}
                        <a href="#">
                            <span className="safe-auction-rules">
                                Ознакомиться с правилами «Безопасный торг»
                            </span>
                        </a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                alignItems="center"
                justify="space-between"
            >
                <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        Есть доставка
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        disabled={isPreview}
                        checked={defaultParams.delivery}
                        onChange={handleCheckboxChange('delivery')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: Вы будете выделены специальным
                        стикером доставка. Доставка осуществляется
                        за Ваш счет. В случае невыполнения доставки,
                        Вы можете быть заблокированы.
                        <a href="#">
                                <span className="safe-auction-rules">
                                    Ознакомиться с правилами «Есть доставка»
                                </span>
                        </a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                direction="row"
                alignItems="center"
                justify="space-between"
            >
                <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        Возможен обмен
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        disabled={isPreview}
                        checked={defaultParams.exchange}
                        onChange={handleCheckboxChange('exchange')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: Вы принимаете предложения от
                        других пользователей на обмен. Вы будете
                        выделены специальным <br/>
                        стикером «Возможен обмен»
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};