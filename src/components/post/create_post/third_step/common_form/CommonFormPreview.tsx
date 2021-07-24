import {FC} from 'react';
import {WithT} from 'i18next';
import {Help} from '@material-ui/icons';
import {Checkbox, Hidden, Typography} from '@material-ui/core';
import {numberPrettier, weekDaysHelper} from '@src/helpers';
import {useStyles} from './useStyles';

type DefaultParamsPropsType = {
    values,
    isAuction: boolean,
    avalTimeActive: boolean,
    isAdvanceAuction: boolean,
    priceLabel: string,
    location,
    userPhone: string
} & WithT;

export const CommonFormPreview: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        values,
        location,
        isAuction,
        priceLabel,
        userPhone,
        avalTimeActive,
        isAdvanceAuction
    } = props;

    const {auction, avalTime} = values;
    const locationText = `${t(`locations:${location.region.name}.name`)}${location.city ? `, ${t(`locations:${location.region.name}.${location.city.name}`)}` : ''}`;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isAuction
                ? <div>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('filters:start_price')}:&nbsp;
                        </strong>
                        {numberPrettier(values.price)}
                    </Typography>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('filters:auction_duration')}:&nbsp;
                        </strong>
                        {auction.duration.hours}
                    </Typography>
                    {isAdvanceAuction && (
                        <div>
                            <Typography variant="subtitle1">
                                <strong>
                                    {t('filters:reserve_price')}:&nbsp;
                                </strong>
                                {auction.reserve_price}
                            </Typography>
                            {auction.price_buy_now.value && (
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('filters:buy_now')}:&nbsp;
                                    </strong>
                                    {auction.price_buy_now.value}
                                </Typography>
                            )}
                            {auction.auto_renewal && (
                                <div className='auction-params'>
                                    <Checkbox
                                        disabled
                                        color='primary'
                                        checked={auction.auto_renewal}
                                    />
                                    <Typography variant="subtitle1">
                                        {t('filters:auto_renewal')}
                                    </Typography>
                                </div>
                            )}
                            {auction.offer_the_price && (
                                <div className='auction-params'>
                                    <Checkbox
                                        disabled
                                        color='primary'
                                        checked={auction.offer_the_price}
                                    />
                                    <Typography variant="subtitle1">
                                        {t('filters:offer_price')}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                : <Typography variant="subtitle1">
                    <strong>
                        {t(`filters:${priceLabel}`)}:&nbsp;
                    </strong>
                    {numberPrettier(values.price)}&nbsp;
                    {values.currency.name}
                </Typography>}
            <div className='post-options'>
                {values.safe_deal && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('filters:safe_deal')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.safe_deal}
                        />
                        <Hidden xsDown>
                            <Help className="question-mark"/>
                            <Typography variant="subtitle2">
                                Примечание: При подключении услуги «Безопасный
                                торг». Ваша сделка защищена. Стоимость
                                услуги составляет n%.&nbsp;
                                <a href="#">
                                <span className="safe-auction-rules">
                                    {t('common:safe_deal_rules')}
                                </span>
                                </a>
                            </Typography>
                        </Hidden>
                    </div>
                )}
                {values.delivery && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('filters:delivery')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.delivery}
                        />
                        <Hidden xsDown>
                            <Help className="question-mark"/>
                            <Typography variant="subtitle2">
                                Примечание: Доставка осуществляется
                                за Ваш счет. В случае невыполнения доставки,
                                Вы можете быть заблокированы.&nbsp;
                                <a href="#">
                                <span className="safe-auction-rules">
                                    {t('common:delivery_rules')}
                                </span>
                                </a>
                            </Typography>
                        </Hidden>

                    </div>
                )}
                {values.exchange && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('filters:exchange')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.exchange}
                        />
                        <Hidden xsDown>
                            <Help className="question-mark"/>
                            <Typography variant="subtitle2">
                                Примечание: Вы принимаете предложения от
                                других пользователей на обмен.
                            </Typography>
                        </Hidden>
                    </div>
                )}
            </div>
            <div className='location-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('locations:location')}:&nbsp;
                    </strong>
                    {locationText}
                </Typography>
            </div>
            <div className='description-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('filters:description')}:&nbsp;
                    </strong>
                </Typography>
                <Typography>
                    {values.description}
                </Typography>
            </div>
            <div className='phone-num'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('filters:own_phone')}:&nbsp;
                    </strong>
                    +{userPhone}
                </Typography>
                {!!values.phone && !RegExp(/_/g).test(values.phone) && (
                    <Typography variant="subtitle1">
                        <strong>
                            {t('filters:additional_phone')}:&nbsp;
                        </strong>
                        {values.phone}
                    </Typography>
                )}
            </div>
            {avalTimeActive && (
                <div>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('common:call_times')}:&nbsp;
                        </strong>
                        {`${avalTime.available_start_time} - ${avalTime.available_end_time}`}&nbsp;
                        ({weekDaysHelper(avalTime.available_days, t)})
                    </Typography>
                </div>
            )}
        </div>
    );
};