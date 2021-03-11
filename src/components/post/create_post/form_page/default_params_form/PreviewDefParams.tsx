/* eslint-disable prefer-const */
import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Typography} from "@material-ui/core";
import {numberPrettier, weekDaysHelper} from "@src/helpers";
import {Help} from "@material-ui/icons";


type DefaultParamsPropsType = {
    values,
    isAuction,
    isAdvanceAuction,
    locationText,
} & WithT;

export const PreviewDefParams: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        values,
        isAuction,
        isAdvanceAuction,
        locationText
    } = props;

    const {auction, avalTime} = values;

    return (
        <div>
            <div className='title-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('postTitle')}:&nbsp;
                    </strong>
                    {values.title}
                </Typography>
            </div>
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
                            {
                                auction.price_by_now.value && (
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('buyNow')}:&nbsp;
                                        </strong>
                                        {auction.price_by_now.value}
                                    </Typography>
                                )
                            }
                            {
                                auction.auto_renewal && (
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
                                )
                            }
                            {
                                auction.offer_the_price && (
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
                                )
                            }
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
                {
                    values.safe_deal && (
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
                    )
                }
                {
                    values.delivery && (
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
                    )
                }
                {
                    values.exchange && (
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
                    )
                }
            </div>
            <div className='location-wrapper'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('common:location')}:&nbsp;
                    </strong>
                    {locationText}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1">
                    <strong>
                        {t('description')}:&nbsp;
                    </strong>
                    {values.description}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1">
                    <strong>
                        {t('ownPhone')}:&nbsp;
                    </strong>
                    +998(90) 9998877
                </Typography>
                {
                    values.phone && (
                        <Typography variant="subtitle1">
                            <strong>
                                {t('additionalPhone')}:&nbsp;
                            </strong>
                            {values.phone}
                        </Typography>
                    )
                }
            </div>
            {
                avalTime.isActive && (
                    <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('availableDays')}:&nbsp;
                            </strong>
                            {weekDaysHelper(avalTime.time.available_days, t)}
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('availableTime')}:&nbsp;
                            </strong>
                            {`${avalTime.time.start_time} - ${avalTime.time.end_time}`}
                        </Typography>
                    </div>
                )
            }
        </div>
    )
}