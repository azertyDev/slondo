import React, {FC} from "react";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {Help} from "@material-ui/icons";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


type PaymentDeliveryPropsType = {
    handleCheckboxChange,
    values,
} & WithT;

export const PaymentDelivery: FC<PaymentDeliveryPropsType> = (props) => {
    const {
        t,
        handleCheckboxChange,
        values,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                item
                xs={12}
                alignItems="center"
                justify="space-between"
            >
                <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        {t('safeDeal')}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        color='primary'
                        checked={values.safe_deal}
                        onChange={handleCheckboxChange('safe_deal')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: При подключении услуги «Безопасный
                        торг». Ваша сделка защищена. Стоимость
                        услуги составляет n%.&nbsp;
                        <a href="#">
                            <span className="safe-auction-rules">
                                {t('safeDealRules')}
                            </span>
                        </a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={12}
                alignItems="center"
                justify="space-between"
            >
                <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        {t('delivery')}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        color='primary'
                        checked={values.delivery}
                        onChange={handleCheckboxChange('delivery')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: Доставка осуществляется
                        за Ваш счет. В случае невыполнения доставки,
                        Вы можете быть заблокированы.&nbsp;
                        <a href="#">
                            <span className="safe-auction-rules">
                                {t('deliveryRules')}
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
                        {t('exchange')}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className='payment-delivery'
                >
                    <Checkbox
                        color='primary'
                        checked={values.exchange}
                        onChange={handleCheckboxChange('exchange')}
                    />
                    <Help className="question-mark"/>
                    <Typography variant="subtitle2">
                        Примечание: Вы принимаете предложения от
                        других пользователей на обмен.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};