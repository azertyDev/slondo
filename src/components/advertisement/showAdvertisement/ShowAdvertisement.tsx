import React from 'react'
import { Container, Grid, Hidden, Slider, Typography } from '@material-ui/core'
import { BreadcrumbsComponent } from '../../elements/breadcrumbs/Breadcrumbs'
import { ButtonComponent } from '../../elements/button/Button';
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock';
import { MainLayout } from '../../MainLayout';
import { RatingComponent } from '../../elements/rating/Rating';
import { SyncSliders } from '../../elements/syncSlider/SyncSliders';
import Link from 'next/link';
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
    BezopasniyTorgIcon1,
    DeliveryIcon,
    SwapIcon
} from "../../elements/icons";

// styles
import { useStyles } from "./useStyles";

export const ShowAdvertisement = (props) => {
    const { t } = props;
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MainLayout>
                <Container maxWidth='lg'>
                    <Grid container>
                        <Grid item xs={12} className={classes.breadcrumbs}>
                            <BreadcrumbsComponent />
                        </Grid>
                        <Grid item xs={12} className={classes.title} container alignItems="center" justify='space-between'>
                                <Grid item xs={9} container alignItems='center' justify='space-between'>
                                    <Typography variant="h4" color="initial">
                                        Объявление: Продаю Samsung A5 в отличном состоянии.
                                    </Typography>
                                    <img src={ShareIcon} alt="share-icon" className={classes.shareIcon}/>
                                </Grid>
                                
                                <Grid item xs={3} container justify='flex-end'>
                                    <Typography variant="h4" color="initial">
                                        1 350 000 Сум
                                    </Typography>
                                </Grid>
                            </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Grid item xs={12}>
                                    {/* <SyncSliders/> */}
                                </Grid>

                                <Grid item xs={12} container justify='space-between' alignItems='center' className={classes.block}>
                                    <Grid item xs={8}>
                                        <Typography variant="subtitle1" color="initial">Описание</Typography>
                                    </Grid>
                                    <Grid item xs={4} container justify='space-between' direction='row' alignItems='center'>
                                        <div className={classes.adLocation}>
                                            <Typography variant='subtitle1'>
                                                Местоположение: г.Ташкент, Мирзо-Улугбекский район
                                            </Typography>
                                        </div>
                                        <img src={DownArrow} alt="location-down-arrow" className={classes.downArrow}/>
                                    </Grid>        
                                    <Grid item xs={12} className={classes.description}>
                                        <Typography variant="subtitle1" color="initial">
                                        Продаю Samsung galaxy A5 2015 года. Состояние отличное. Экран не менялся, царапин явных нет.Первые руки. Цвет черный.
                                        Возможен обмен на iphone 7 с доплатой.
                                        </Typography>
                                    </Grid>              
                                </Grid>
                                <Grid item xs={12} className={classes.block} container>
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle2" color="initial">Состояние</Typography>
                                    </Grid>
                                    <Grid item xs={9}><Typography variant="subtitle1" color="initial">Б/у</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.block} container>
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle2" color="initial">Объявление</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography variant="subtitle1" color="initial">Категория</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" color="initial">Тип объявления</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography variant="subtitle2" color="initial">Электроника-Телефоны и планшеты-Мобильные телефоны</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" color="initial">Параметры</Typography>
                                        </Grid>
                                    </Grid>              
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1" color="initial">Марка</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="subtitle2" color="initial">Samsung</Typography>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" color="initial">Диагональ экрана</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography variant="subtitle2" color="initial">16.9</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} container className={classes.adInfoRow}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" color="initial">Встроенная память</Typography>
                                        </Grid>
                                        <Grid item xs={9} container justify='space-between'>
                                            <Typography variant="subtitle2" color="initial">32 Гб</Typography>
                                            <Link href='#'>
                                                <a className={classes.moreButton}>
                                                    <Typography variant="subtitle1" color="initial">
                                                        Все параметры
                                                    </Typography>
                                                    <img src={DownArrow} alt="downarrow" className={classes.downArrow}/>
                                                </a>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} container className={classes.block}>
                                    <Grid item xs={12} container className={classes.view}>
                                        <Grid item xs={3}>Просмотрено</Grid>
                                        <Grid item xs={3}>165 <img src={EyeIcon} alt="eye-icon" className={classes.icons}/></Grid>
                                        <Grid item xs={3}>Опубликовано</Grid>
                                        <Grid item xs={3}>в 9:12, 27 августа 2020 г.</Grid>
                                    </Grid>
                                    <Grid item xs={12} container>
                                        <Grid item xs={3}>В избранном</Grid>
                                        <Grid item xs={3}>5 <img src={HeartIcon} alt="heart-icon" className={classes.icons}/></Grid>
                                        <Grid item xs={3}>Номер объявления</Grid>
                                        <Grid item xs={3}>1001</Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} className={classes.block} container>
                                    <Grid item xs={6} container alignItems='center'>
                                        <Link href='#'>
                                            <a className={classes.complainLink}>
                                                <Typography variant="subtitle1" color="initial" className={classes.complainText}>Пожаловаться</Typography>
                                                <img src={ComplainIcon} alt="comlain-icon" className={classes.icons}/>
                                            </a>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6} container className={classes.adShare} alignItems='center'>
                                        <Typography variant="subtitle1" color="initial">Поделиться</Typography>
                                        <Link href='#'><a><img src={Facebook}/></a></Link>
                                        <Link href='#'><a><img src={Instagram}/></a></Link>
                                        <Link href='#'><a><img src={Youtube}/></a></Link>
                                        <Link href='#'><a><img src={Twitter}/></a></Link>
                                        <Link href='#'><a><img src={Whatsapp}/></a></Link>
                                        <Link href='#'><a><img src={Telegram}/></a></Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid item xs={12} className={classes.contactButton}>
                                    <ButtonComponent>
                                        <Typography variant="subtitle1" color="initial">
                                            Показать номер
                                        </Typography>
                                    </ButtonComponent>
                                </Grid>

                                <Grid item xs={12}>
                                    <ButtonComponent>
                                        <Typography variant="subtitle1" color="initial">
                                            Написать продавцу
                                        </Typography>
                                    </ButtonComponent>
                                </Grid>
                                
                                <Grid item xs={12} container className={classes.userInfo}>
                                    <Grid item xs={3}>
                                        <img src={UserAvatar} className={classes.userAvatarIcon}/>
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" color="initial">
                                            <span className={classes.userName}>Алимов Р.</span> (5 объявлений)
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2" color="initial" className={classes.lastEntrance}>
                                                На Slondo с 31 августа 2020 г.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} container>
                                            <RatingComponent />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} container justify='center' className={classes.subscribe}>
                                    <Typography variant="h1" color="initial">
                                        <Link href="#">
                                            <a>
                                                <Typography variant="subtitle1" color="initial">
                                                    Подписаться на продавца
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} container spacing={1} className={classes.infoBlock}>
                                    <Grid item xs={12} container>
                                        <Grid item xs={2} container justify='center'><img src={DeliveryIcon}/></Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle1" color="initial">
                                                Есть доставка
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} container>
                                        <Grid item xs={2} container justify='center'><img src={BezopasniyTorgIcon1}/></Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle1" color="initial">
                                                Безопасный торг
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} container>
                                        <Grid item xs={2} container justify='center'><img src={SwapIcon}/></Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle1" color="initial">
                                                Возможен обмен
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Hidden smDown>
                                    <Grid item md={12} className={classes.adBanner}>
                                        <div className="right-banner" />
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>

                        <Grid item container xs={12} direction="row" justify="center">
                            <AdsAndLotsBlock title='Похожие объявления' xs={6} sm={4} md={3} lg={2}/>
                        </Grid>
                    </Grid>
                </Container>
            </MainLayout>
        </div>
    )
}
