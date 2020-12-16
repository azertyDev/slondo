import React, { useState } from 'react';
import { Container, Modal, Typography } from '@material-ui/core';
import { SyncSliders } from './sync_sliders/SyncSliders';
import { ReadMore } from '@src/components/elements/read_more/readMore';
import { LocationIcon } from '@src/components/elements/icons/LocationIcon';
import { WarningIcon } from '@src/components/elements/icons/WarningIcon';
import { PhoneIcon } from '@src/components/elements/icons/PhoneIcon';
import { SwapIcon } from '@src/components/elements/icons/SwapIcon';
import { SafeIcon } from '@src/components/elements/icons/SafeIcon';
import { DeliveryIcon } from '@src/components/elements/icons/DeliveryIcon';
import { useStyles } from './useStyles';
import { ModalSyncSliders } from './modal_sync_sliders/ModalSyncSliders';
import { BreadcrumbsComponent } from '@src/components/elements/breadcrumbs/Breadcrumbs';
import { Link } from '@root/i18n';

export const AncmntLotContent = ({ data, parameters, t }) => {
    const [initialSlide, setInitialSlide] = useState(0);
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

    const excludedFields = ['id', 'type', 'sub_type', 'uniqid', 'color_id'];

    const parameterItems = Object.keys(parameters).reduce((items, key, i) => {
        if (
            parameters[key] !== null &&
            excludedFields.every((k) => k !== key)
        ) {
            if (
                Array.isArray(parameters[key]) &&
                parameters[key].length !== 0
            ) {
                const params = parameters[key].map((param, i) => {
                    return (
                        <li key={i}>
                            <Typography variant="subtitle1" className="value">
                                {param.name}
                            </Typography>
                        </li>
                    );
                });

                items.push(
                    <div key={i} className="params-list">
                        <Typography variant="subtitle1">{key}</Typography>
                        <ul>{params}</ul>
                    </div>,
                );
            } else if (!Array.isArray(parameters[key])) {
                items.push(
                    <li key={key}>
                        <Typography variant="subtitle1" className="key">
                            {t(`${key}`)}
                        </Typography>
                        <Typography variant="subtitle1" className="value">
                            {typeof parameters[key] === 'string' ||
                            typeof parameters[key] === 'number'
                                ? parameters[key]
                                : parameters[key].name}
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
                                {data.parent.name}
                            </Typography>
                        </a>
                    </Link>
                    {data.child.id && (
                        <Link href="#">
                            <a>
                                <Typography variant="subtitle1" noWrap>
                                    {data.child.name}
                                </Typography>
                            </a>
                        </Link>
                    )}
                    {parameters.type && (
                        <Link href="#">
                            <a>
                                <Typography variant="subtitle1" noWrap>
                                    {parameters.type.name}
                                </Typography>
                            </a>
                        </Link>
                    )}
                    <Typography variant="subtitle1" color="primary" noWrap>
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
                                ? 'advertisement'
                                : data.ads_type.id === 2
                                ? 'lot'
                                : 'advanced-lot'
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

                {/* data.condition.id */}
                {true && (
                    <div className="condition">
                        <Typography variant="h6">
                            {/* {data.condition.name} */}
                            Б/У
                        </Typography>
                    </div>
                )}
            </div>
            <SyncSliders
                imgs={data.images}
                setInitialSlide={setInitialSlide}
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
                    Пожаловаться <WarningIcon />
                </Typography>
            </div>
            <div className="ad-bonus">
                {!!data.delivery && (
                    <span className="delivery">
                        <DeliveryIcon />
                        &nbsp;
                        <Typography variant="subtitle1">
                            Есть доставка
                        </Typography>
                    </span>
                )}
                {!!data.safe_deal && (
                    <span className="safe_deal">
                        <SafeIcon />
                        &nbsp;
                        <Typography variant="subtitle1">
                            Безопасная покупка
                        </Typography>
                    </span>
                )}
                {!!data.exchange && (
                    <span className="exchange">
                        <SwapIcon />
                        &nbsp;
                        <Typography variant="subtitle1">
                            Возможен обмен
                        </Typography>
                    </span>
                )}
                {!!data.available_start_time && (
                    <span className="available">
                        <PhoneIcon />
                        &nbsp;
                        <Typography variant="subtitle1">
                            {data.available_start_time} -{' '}
                            {data.available_end_time}
                        </Typography>
                    </span>
                )}
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
                        {data.parent.name}
                        {data.child.id && <>&nbsp;- {data.child.name}</>}
                        {parameters.type && <>&nbsp;- {parameters.type.name}</>}
                        {parameters.sub_type && (
                            <>
                                &nbsp;- <span>{parameters.sub_type.name}</span>
                            </>
                        )}
                    </Typography>
                </div>
            </div>
            {data.ads_type.name !== 'Обычный' && (
                <div className="started-price">
                    <Typography variant="button">Стартовая цена</Typography>
                    <span>
                        <Typography variant="body2">
                            {data.price} {data.currency.name}
                        </Typography>
                    </span>
                </div>
            )}
            {!!parameterItems.length && (
                <div className="ad-parameters">
                    <Typography variant="button" color="initial">
                        Параметры
                    </Typography>
                    <ul>{parameterItems}</ul>
                </div>
            )}
            <Modal
                open={open}
                onClose={handleShowModal(false)}
                className={classes.modal}
            >
                <Container className={classes.slider}>
                    <Typography variant="h6">{data.title}</Typography>
                    <ModalSyncSliders
                        imgs={data.images}
                        initialSlide={initialSlide}
                        setInitialSlide={setInitialSlide}
                    />
                </Container>
            </Modal>
        </div>
    );
};
