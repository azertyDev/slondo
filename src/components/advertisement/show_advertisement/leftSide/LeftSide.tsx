import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { SyncSliders } from '@src/components/elements/sync_sliders/SyncSliders';
import { ReadMore } from '@src/components/elements/read_more/readMore';
import { LeftSideModal } from '@src/components/advertisement/show_advertisement/leftSide/left_side_modal/LeftSideModal';
// icons
import { LocationIcon } from '@src/components/elements/icons/LocationIcon';
import { WarningIcon } from '@src/components/elements/icons/WarningIcon';
import { PhoneIcon } from '@src/components/elements/icons/PhoneIcon';
import { SwapIcon } from '@src/components/elements/icons/SwapIcon';
import { SafeIcon } from '@src/components/elements/icons/SafeIcon';
import { DeliveryIcon } from '@src/components/elements/icons/DeliveryIcon';
// styles
import { useStyles } from './useStyles';


export const LeftSide = ({ data, parameters, t }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [open, setOpen] = useState(false);

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
    const formatted_date =
        date.getDate() +
        ' ' +
        months[date.getMonth()] +
        ' ' +
        date.getFullYear();

    const handleShowModal = (value) => () => {
        setOpen(value);
    };

    const excludedFields = ['id', 'uniqid', 'color_id'];

    const parameterItems = Object.keys(parameters).map((key, i) => {
        if (
            parameters[key] !== null &&
            excludedFields.every((k) => k !== key)
        ) {
            if (Array.isArray(parameters[key])) {
                const params = parameters[key].map((param) => {
                    return (
                        <li>
                            <Typography variant="subtitle1" className="value">
                                {param.name}
                            </Typography>
                        </li>
                    );
                });

                return (
                    <div className="params-list">
                        <Typography variant="subtitle1">{key}</Typography>
                        <ul>{params}</ul>
                    </div>
                );
            } else {
                return (
                    <li key={i}>
                        <Typography variant="subtitle1" className="key">
                            {t(`${key}`)}
                        </Typography>
                        <Typography variant="subtitle1" className="value">
                            {typeof parameters[key] === 'string'
                                ? parameters[key]
                                : parameters[key].name}
                        </Typography>
                    </li>
                );
            }
        }
    });

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="ad-slider">
                <SyncSliders
                    imgs={data.images}
                    variableWidth={true}
                    centerMode={false}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    handleOpenModal={handleShowModal(true)}
                />
            </div>
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
                    Пожаловаться <WarningIcon />
                </Typography>
            </div>
            <div className="ad-bonus">
                {data.delivery ? (
                    <span className="delivery">
                        <DeliveryIcon />{' '}
                        <Typography variant="subtitle1">
                            Есть доставка
                        </Typography>
                    </span>
                ) : null}
                {data.safe_deal ? (
                    <span className="safe_deal">
                        <SafeIcon />{' '}
                        <Typography variant="subtitle1">
                            Безопасная покупка
                        </Typography>
                    </span>
                ) : null}
                {data.exchange ? (
                    <span className="exchange">
                        <SwapIcon />{' '}
                        <Typography variant="subtitle1">
                            Возможен обмен
                        </Typography>
                    </span>
                ) : null}
                {data.available_start_time ? (
                    <span className="available">
                        <PhoneIcon />{' '}
                        <Typography variant="subtitle1">
                            {data.available_start_time}-
                            {data.available_end_time}
                        </Typography>
                    </span>
                ) : null}
            </div>
            <div className="ad-location">
                <Typography variant="button" noWrap>
                    Местоположение
                </Typography>
                {data.region.name || data.city.name || data.district.name ? (
                    <Typography variant="subtitle1" noWrap>
                        <LocationIcon />
                        {`${data.region.name ?? ''}`}
                        {data.city.name ? `, ${data.city.name}` : ''}
                        {data.district.name ? `, ${data.district.name}` : ''}
                    </Typography>
                ) : (
                    <Typography variant="subtitle1">Не указано</Typography>
                )}
            </div>
            <div className="ad-description">
                <div>
                    <Typography variant="button" color="initial">
                        Описание
                    </Typography>
                    <ReadMore {...data}>
                        <Typography variant="subtitle1" color="initial">
                            {data.description}
                        </Typography>
                    </ReadMore>
                </div>
            </div>
            <div className="ad-category">
                <Typography variant="button" color="initial">
                    Категория
                </Typography>
                <div>
                    <Typography variant="subtitle1" color="initial">
                        {data.parent.name} - {data.child.name} -{' '}
                        <span>
                            {parameters.type ? parameters.type.name : ''}
                        </span>
                    </Typography>
                </div>
            </div>
            <div className="started-price">
                <Typography variant="button">Стартовая цена</Typography>
                <span>
                    <Typography variant="body2">
                        {data.price} {data.currency.name}
                    </Typography>
                </span>
            </div>
            <div className="ad-parameters">
                <Typography variant="button" color="initial">
                    Параметры
                </Typography>
                <ul>{parameterItems}</ul>
            </div>
            <LeftSideModal
                imgs={data.images}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                handleShowModal={handleShowModal}
                isOpen={open}
                title={data.title}
            />
        </div>
    );
};
