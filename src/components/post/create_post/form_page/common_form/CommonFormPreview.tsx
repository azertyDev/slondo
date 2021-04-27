import React, {FC} from "react";
import {WithT} from "i18next";
import {Help} from "@material-ui/icons";
import {Checkbox, Typography} from "@material-ui/core";
import {numberPrettier, weekDaysHelper} from "@src/helpers";
import {useStyles} from './useStyles';


type DefaultParamsPropsType = {
    values,
    isAuction: boolean,
    isAdvanceAuction: boolean,
    location,
    ownerPhone: string
} & WithT;

export const CommonFormPreview: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        values,
        isAuction,
        ownerPhone,
        isAdvanceAuction,
        location
    } = props;

    const {auction, avalTime} = values;
    const locationText = location
                         ? `${t(`locations:${location.region.name}`)}${location.city ? `, ${t(`locations:${location.city.name}`)}` : ''}${location.district ? `, ${t(`locations:${location.district.name}`)}` : ''}`
                         : '';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isAuction
             ? <div>
                 <Typography variant="subtitle1">
                     <strong>
                         {t('startPrice')}:&nbsp;
                     </strong>
                     {numberPrettier(values.price)}
                 </Typography>
                 <Typography variant="subtitle1">
                     <strong>
                         {t('auctionDuration')}:&nbsp;
                     </strong>
                     {auction.duration.hours}
                 </Typography>
                 {isAdvanceAuction && (
                     <div>
                         <Typography variant="subtitle1">
                             <strong>
                                 {t('reservePrice')}:&nbsp;
                             </strong>
                             {auction.reserve_price}
                         </Typography>
                         {auction.price_buy_now.value && (
                             <Typography variant="subtitle1">
                                 <strong>
                                     {t('buyNow')}:&nbsp;
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
                                     {t('autoRenewal')}
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
                                     {t('offerPrice')}
                                 </Typography>
                             </div>
                         )}
                     </div>
                 )}
             </div>
             : <Typography variant="subtitle1">
                 <strong>
                     {t('price')}:&nbsp;
                 </strong>
                 {numberPrettier(values.price)}&nbsp;
                 {values.currency.name}
             </Typography>}
            <div className='post-options'>
                {values.safe_deal && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('safeDeal')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.safe_deal}
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
                    </div>
                )}
                {values.delivery && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('delivery')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.delivery}
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
                    </div>
                )}
                {values.exchange && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('exchange')}:&nbsp;
                            </strong>
                        </Typography>
                        <Checkbox
                            disabled
                            color='primary'
                            checked={values.exchange}
                        />
                        <Help className="question-mark"/>
                        <Typography variant="subtitle2">
                            Примечание: Вы принимаете предложения от
                            других пользователей на обмен.
                        </Typography>
                    </div>
                )}
            </div>
            <div className='location-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('common:location')}:&nbsp;
                    </strong>
                    {locationText}
                </Typography>
            </div>
            <div className='description-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('description')}:&nbsp;
                    </strong>
                </Typography>
                <Typography>
                    {values.description}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1">
                    <strong>
                        {t('ownPhone')}:&nbsp;
                    </strong>
                    +{ownerPhone}
                </Typography>
                {values.phone && (
                    <Typography variant="subtitle1">
                        <strong>
                            {t('additionalPhone')}:&nbsp;
                        </strong>
                        {values.phone}
                    </Typography>
                )}
            </div>
            {avalTime.isActive && (
                <div>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('callTimes')}:&nbsp;
                        </strong>
                        {`${avalTime.time.start_time} - ${avalTime.time.end_time}`}&nbsp;
                        ({weekDaysHelper(avalTime.time.week_days, t)})
                    </Typography>
                </div>
            )}
        </div>
    );
};