import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import { BreadcrumbsComponent } from '../../elements/breadcrumbs/Breadcrumbs';
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock';
import { MainLayout } from '../../MainLayout';
import { SyncSliders } from '../../elements/syncSlider/SyncSliders';
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
    Telegram,
} from '../../elements/icons';

// styles
import { useStyles } from './useStyles';
import { RightSide } from './rightSide/RightSide';

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
                    <div className={classes.breadcrumbs}>
                        <BreadcrumbsComponent />
                    </div>
                    <div className={classes.title}>
                        <div>
                            <Typography variant="h4" color="initial">
                                Объявление: Продаю Samsung A5 в отличном
                                состоянии.
                            </Typography>
                            <img
                                src={ShareIcon}
                                alt="share-icon"
                                className={classes.shareIcon}
                            />
                        </div>
                        <div>
                            <Typography variant="h4" color="initial">
                                1 350 000 Сум
                            </Typography>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9}>
                            <div className="ad-slider">
                                <SyncSliders imgs={imgUrls} />
                                <div>
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
                            <div className="description">
                                <div>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        Описание
                                    </Typography>
                                </div>
                                <div>
                                    <Link href="#">
                                        <a>
                                            <Typography variant="subtitle1">
                                                Местоположение: г.Ташкент,
                                                Мирзо-Улугбекский район
                                            </Typography>
                                            <img
                                                src={DownArrow}
                                                alt="location-down-arrow"
                                                className={classes.downArrow}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Typography variant="subtitle1" color="initial">
                                    Продаю Samsung galaxy A5 2015 года.
                                    Состояние отличное. Экран не менялся,
                                    царапин явных нет.Первые руки. Цвет черный.
                                    Возможен обмен на iphone 7 с доплатой.
                                </Typography>
                            </div>
                            <div className="ad-parameters">
                                <div>
                                    <div>
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
                                <div>
                                    <div>
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
                                            Объявление
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <div>
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
                                    <div>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Параметры
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <div>
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
                                    <div>
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
                                    <div>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Встроенная память
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            32 Гб
                                        </Typography>
                                        <Link href="#">
                                            <a>
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
                            <div className="ad-social">
                                <div>
                                    <Link href="#">
                                        <a>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Пожаловаться
                                            </Typography>
                                            <img
                                                src={ComplainIcon}
                                                alt="comlain-icon"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div>
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
                                            <img src={Telegram} />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={3}>
                                <RightSide />
                                <div className={classes.adBanner}>
                                    <div className="right-banner" />
                                </div>
                            </Grid>
                        </Hidden>
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
                </Container>
            </MainLayout>
        </div>
    );
};
