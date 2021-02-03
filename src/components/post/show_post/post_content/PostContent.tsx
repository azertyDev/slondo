import React, {FC, useState} from 'react';
import {WithT} from 'i18next';
import {Typography} from '@material-ui/core';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from '@src/components/elements/icons/WarningIcon';
import {PhoneIcon} from '@src/components/elements/icons/PhoneIcon';
import {SwapIcon} from '@src/components/elements/icons/SwapIcon';
import {SafeIcon} from '@src/components/elements/icons/SafeIcon';
import {DeliveryIcon} from '@src/components/elements/icons/DeliveryIcon';
import {SyncSliders} from './sync_sliders/SyncSliders';
import {ModalSyncSliders} from './modal_sync_sliders/ModalSyncSliders';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {Link} from '@root/i18n';
import {pricePrettier} from '@root/src/helpers';
import {useStyles} from './useStyles';


export const PostContent: FC<WithT & any> = ({data, parameters, t}) => {
    const date = new Date(data.created_at);

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const excludedFields = [
        'id',
        'type',
        'sub_type',
        'uniqid',
        'color_id',
        'type_id',
    ];
    const formatted_date = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    const [open, setOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleShowModal = (value) => () => setOpen(value);

    const parameterItems = Object.keys(parameters).reduce((items, key, i) => {
        if (parameters[key] !== null && excludedFields.every((k) => k !== key)) {
            if (Array.isArray(parameters[key]) && parameters[key].length !== 0) {
                const params = (
                    <li>
                        <Typography variant="subtitle1" className="value">
                            {parameters[key]
                                .map((param) => param.name)
                                .join(', ')}
                        </Typography>
                    </li>
                );
                items.push(
                    <div key={i} className="params-list">
                        <Typography variant="subtitle1" className="key">
                            {key}
                        </Typography>
                        <ul>{params}</ul>
                    </div>,
                );
            } else if (!Array.isArray(parameters[key])) {
                items.push(
                    <li key={key}>
                        <Typography variant="subtitle1" className="key">
                            {t(`${key}`)}
                        </Typography>
                        {parameters[key].hex_color_code
                        && <span
                            style={{
                                backgroundColor: `${parameters[key].hex_color_code}`,
                                width: 32,
                                height: 32,
                                boxShadow: '-1px 0px 2px rgba(0, 0, 0, 0.15)',
                                marginRight: '20px',
                                borderRadius: '50%',
                            }}
                        />}
                        <Typography variant="subtitle1" className="value">
                            {
                                typeof parameters[key] === 'string'
                                || typeof parameters[key] === 'number'
                                    ? parameters[key]
                                    : parameters[key].name
                            }
                        </Typography>
                    </li>,
                );
            }
        }
        return items;
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="breadcrumbs">
                <BreadcrumbsComponent>
                    <Link href="#">
                        <a>
                            <Typography variant="subtitle1" noWrap>
                                {data.category.name}
                            </Typography>
                        </a>
                    </Link>
                    {data.category.sub_category.length
                    && <Link href="#">
                        <a>
                            <Typography variant="subtitle1" noWrap>
                                {data.category.sub_category[0].name}
                            </Typography>
                        </a>
                    </Link>}
                    {parameters.type
                    && <Link href="#">
                        <a>
                            <Typography variant="subtitle1" noWrap>
                                {parameters.type.name}
                            </Typography>
                        </a>
                    </Link>}
                    <Typography
                        variant="subtitle1"
                        color="primary"
                        noWrap
                        style={{width: '400px'}}
                    >
                        {data.title}
                    </Typography>
                </BreadcrumbsComponent>
            </div>
            <div className="adv-header">
                <div>
                    <Typography
                        variant="h6"
                        className={
                            data.ads_type.id === 1
                                ? 'post'
                                : data.ads_type.id === 2
                                ? 'auc'
                                : 'exauc'
                        }
                    >
                        {data.ads_type.name}
                    </Typography>
                </div>
                <div className="title">
                    <Typography variant="h2" noWrap>
                        {data.title}
                    </Typography>
                </div>
                <div className="condition">
                    <Typography variant="h6">{data.condition.name}</Typography>
                </div>
            </div>
            <SyncSliders
                imgs={data.images}
                setCurrentSlide={setCurrentSlide}
                handleOpenModal={handleShowModal(true)}
            />
            <div className="ad-info">
                <Typography variant="subtitle1">
                    <span>Объявление №:</span> {data.id}
                </Typography>
                <Typography variant="subtitle1">
                    Опубликовано: {formatted_date}
                </Typography>
                <Typography variant="subtitle1">
                    Просмотров: {data.number_of_views}
                </Typography>
                <Typography variant="subtitle1">
                    Пожаловаться <WarningIcon/>
                </Typography>
            </div>
            <div className="ad-bonus">
                {
                    !!data.delivery
                    && <span className="delivery">
                        <DeliveryIcon/>&nbsp;
                        <Typography variant="subtitle1">
                            Есть доставка
                        </Typography>
                    </span>
                }
                {
                    !!data.safe_deal
                    && <span className="safe_deal">
                        <SafeIcon/>&nbsp;
                        <Typography variant="subtitle1">
                            Безопасная покупка
                        </Typography>
                    </span>
                }
                {
                    !!data.exchange
                    && <span className="exchange">
                        <SwapIcon/>&nbsp;
                        <Typography variant="subtitle1">
                            Возможен обмен
                        </Typography>
                    </span>
                }
                {
                    !!data.available_start_time
                    && <span className="available">
                        <PhoneIcon/>
                        <Typography variant="subtitle1" color="primary">
                            {data.available_days.map((k) => t(`common:${k.name}`))}
                        </Typography>&nbsp;
                        <Typography variant="subtitle1">
                            {data.available_start_time} -{' '}{data.available_end_time}
                        </Typography>
                    </span>
                }
            </div>
            <div className="ad-location">
                <Typography variant="button" noWrap>
                    Местоположение
                </Typography>
                {data.region.name || data.city.name || data.district.name
                    ? <Typography variant="subtitle1" noWrap>
                        <LocationIcon/>
                        {`${data.region.name ?? ''}`}
                        {data.city.name ? `, ${data.city.name}` : ''}
                        {data.district.name ? `, ${data.district.name}` : ''}
                    </Typography>
                    : <Typography variant="subtitle1">Не указано</Typography>}
            </div>
            <div className="ad-category">
                <Typography variant="button" color="initial">
                    Категория
                </Typography>
                <div>
                    <Typography variant="subtitle1" color="initial">
                        {data.category.name}
                        {<>&nbsp;- {data.category.sub_category[0].name}</>}
                        {parameters.type && <>&nbsp;- <span>{parameters.type.name}</span></>}
                    </Typography>
                </div>
            </div>
            <div className="ad-description">
                <Typography variant="button" color="initial">
                    Описание
                </Typography>
                {data.description.length < 420
                    ? <Typography variant="subtitle1" color="initial">
                        {data.description}
                    </Typography>
                    : <ReadMore {...data}>
                        <Typography
                            variant="subtitle1"
                            color="initial"
                            id="description"
                        >
                            {data.description}
                        </Typography>
                    </ReadMore>}
            </div>
            {
                (data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc')
                && <div className="started-price">
                    <Typography variant="button">Стартовая цена</Typography>
                    <span>
                        <Typography variant="body2">
                            {pricePrettier(data.price)} {data.currency.name}
                        </Typography>
                    </span>
                </div>
            }
            {!!parameterItems.length
            && <div className="ad-parameters">
                <Typography variant="button" color="initial">
                    Параметры
                </Typography>
                <ul>{parameterItems}</ul>
            </div>}
            <ModalSyncSliders
                open={open}
                title={data.title}
                imgs={data.images}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                onClose={handleShowModal(false)}
            />
        </div>
    );
};
