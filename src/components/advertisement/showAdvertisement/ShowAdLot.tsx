import React from 'react';
import {
    Container,
    Divider,
    Grid,
    Hidden,
    Typography,
} from '@material-ui/core';
import { BreadcrumbsComponent } from '../../elements/breadcrumbs/Breadcrumbs';
import { ButtonComponent } from '../../elements/button/Button';
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock';
import { MainLayout } from '../../MainLayout';
import { RatingComponent } from '../../elements/rating/Rating';
import { SyncSliders } from '../../elements/syncSliders/SyncSliders';
import { Link } from '../../../../i18n';
// icons
import {
    ShareIcon,
    DownArrow,
    EyeIcon,
    HeartIcon,
    ComplainIcon,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Whatsapp,
    Telegram,
    UserAvatar,
    SwapIcon,
} from '../../elements/icons';
import { DeliveryIcon } from '../../elements/icons/DeliveryIcon';
import { SafeIcon } from './../../elements/icons/SafeIcon';
import { ExchangeIcon } from '../../elements/icons/ExchangeIcon';

// styles
import { useStyles } from './useStyles';

const imgUrls = [
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
    {
        url: 'img/advertisement-image.jpg',
        alt: 'adv-image',
    },
];

export const ShowAdLot = (props) => {
    const { t } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} className={classes.breadcrumbs}>
                            <BreadcrumbsComponent />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={classes.title}
                            container
                            alignItems="center"
                            justify="space-between"
                        >
                            <Grid
                                item
                                xs={9}
                                container
                                alignItems="center"
                                justify="space-between"
                            >
                                <Typography variant="h4" color="initial">
                                    Объявление: Продаю Samsung A5 в отличном
                                    состоянии.
                                </Typography>
                                <img
                                    src={ShareIcon}
                                    alt="share-icon"
                                    className={classes.shareIcon}
                                />
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                                <Typography variant="h4" color="initial">
                                    1 350 000 Сум
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <div className="ad-slider">
                                    <SyncSliders imgs={imgUrls} />
                                    <div className={classes.favourites}>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Добавить в избранное
                                                </Typography>
                                                <img
                                                    src={HeartIcon}
                                                    alt="favourite-icon"
                                                    className={classes.icons}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <Divider />
                                <div className="description">
                                    <div className={classes.categoryTitle}>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Описание
                                        </Typography>
                                    </div>
                                    <div className={classes.adLocation}>
                                        <Link href="#">
                                            <a>
                                                <Typography variant="subtitle1">
                                                    Местоположение: г.Ташкент,
                                                    Мирзо-Улугбекский район
                                                </Typography>
                                                <img
                                                    src={DownArrow}
                                                    alt="location-down-arrow"
                                                    className={
                                                        classes.downArrow
                                                    }
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={classes.description}>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        Продаю Samsung galaxy A5 2015 года.
                                        Состояние отличное. Экран не менялся,
                                        царапин явных нет.Первые руки. Цвет
                                        черный. Возможен обмен на iphone 7 с
                                        доплатой.
                                    </Typography>
                                </div>
                                <Divider />
                                <div className="ad-parameters">
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Состояние
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Б/у
                                            </Typography>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Тип объявления
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Объявление{' '}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Категория
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Электроника-Телефоны и
                                                планшеты-Мобильные телефоны
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Параметры
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Марка
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Samsung
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Диагональ экрана
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                16.9
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.categoryTitle}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Встроенная память
                                            </Typography>
                                        </div>
                                        <div className={classes.innerRow}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                32 Гб
                                            </Typography>
                                            <Link href="#">
                                                <a
                                                    className={
                                                        classes.moreButton
                                                    }
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="initial"
                                                    >
                                                        Все параметры
                                                    </Typography>
                                                    <img
                                                        src={DownArrow}
                                                        alt="downarrow"
                                                        className={
                                                            classes.downArrow
                                                        }
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className="ad-statistic">
                                    <div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Просмотрено
                                            </Typography>
                                        </div>
                                        <div>
                                            <div>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    165
                                                </Typography>
                                            </div>
                                            <div>
                                                <img
                                                    src={EyeIcon}
                                                    alt="eye-icon"
                                                    className={classes.icons}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Опубликовано
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                в 9:12, 27 августа 2020 г.
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                В избранном
                                            </Typography>
                                        </div>
                                        <div>
                                            <div>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    5
                                                </Typography>
                                            </div>
                                            <div>
                                                <img
                                                    src={HeartIcon}
                                                    alt="heart-icon"
                                                    className={classes.icons}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Номер объявления
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                1001
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className="ad-social">
                                    <div>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                    className={
                                                        classes.complainText
                                                    }
                                                >
                                                    Пожаловаться
                                                </Typography>
                                                <img
                                                    src={ComplainIcon}
                                                    alt="comlain-icon"
                                                    className={classes.icons}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={classes.adShare}>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Поделиться
                                        </Typography>
                                        <Link href="#">
                                            <a>
                                                <img src={Facebook} />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={Instagram} />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={Youtube} />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={Twitter} />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={Whatsapp} />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={Telegram} />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.contactButton}
                                >
                                    <ButtonComponent>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Показать номер
                                        </Typography>
                                    </ButtonComponent>
                                </Grid>

                                <Grid item xs={12}>
                                    <ButtonComponent>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Написать продавцу
                                        </Typography>
                                    </ButtonComponent>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    container
                                    className={classes.userInfo}
                                >
                                    <Grid item xs={3}>
                                        <img
                                            src={UserAvatar}
                                            className={classes.userAvatarIcon}
                                        />
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Grid item xs={12}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                <span
                                                    className={classes.userName}
                                                >
                                                    Алимов Р.
                                                </span>{' '}
                                                (5 объявлений)
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                                className={classes.lastEntrance}
                                            >
                                                На Slondo с 31 августа 2020 г.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} container>
                                            <RatingComponent />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    container
                                    justify="center"
                                    className={classes.subscribe}
                                >
                                    <Typography variant="h1" color="initial">
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Подписаться на продавца
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    container
                                    spacing={1}
                                    className={classes.infoBlock}
                                >
                                    <Grid item xs={12} container>
                                        <Grid
                                            item
                                            xs={2}
                                            container
                                            justify="center"
                                        >
                                            <div className="delivery-icon">
                                                <DeliveryIcon />
                                            </div>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Есть доставка
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} container>
                                        <Grid
                                            item
                                            xs={2}
                                            container
                                            justify="center"
                                        >
                                            <div className="safe-icon">
                                                <SafeIcon />
                                            </div>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Безопасный торг
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} container>
                                        <Grid
                                            item
                                            xs={2}
                                            container
                                            justify="center"
                                        >
                                            <div className="exchange-icon">
                                                <ExchangeIcon />
                                            </div>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Возможен обмен
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Hidden smDown>
                                    <Grid
                                        item
                                        md={12}
                                        className={classes.adBanner}
                                    >
                                        <div className="right-banner" />
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            direction="row"
                            justify="center"
                        >
                            <AdsAndLotsBlock
                                title="Похожие объявления"
                                xs={6}
                                sm={4}
                                md={3}
                                lg={2}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </MainLayout>
        </div>
    );
};
