import React, {FC} from 'react';
import {Button, Grid, Hidden, Paper, Tooltip, Typography} from '@material-ui/core';
import {
    CloseIcon,
    DeliveryIcon,
    DoubleUpIcon,
    EyeIcon,
    LetterIcon,
    LocationIcon,
    MegaphoneIcon,
    PhoneIcon,
    PromoteIcon,
    SafeIcon,
    SettingsIcon,
    SwapIcon
} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ViewPropsType} from '@src/components/elements/card/card_view/CardView';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {Rating} from '@src/components/elements/rating/Rating';
import Link from 'next/link';
import {numberPrettier} from '@src/helpers';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';

const longText = `Вы принимаете предложения от других пользователей на обмен. Вы будете выделены специальным стикером. Ознакомиться с правилами «Возможен обмен»`;

export const ListMode: FC<ViewPropsType> = ({list, handleModalOpen}) => {
    const {pathname} = useRouter();
    const {t} = useTranslation(['common']);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {list?.map((el) => {
                return (
                    <Grid container key={el.id}>
                        <Grid item xs={9} className="left-content">
                            <div className="breadcrumbs">
                                <BreadcrumbsComponent>
                                    <Link href="#">
                                        <a>Для дома и дачи</a>
                                    </Link>
                                    <Link href="#">
                                        <a>Мебель и интерьер</a>
                                    </Link>
                                    <Typography color="primary">
                                        Столовая мебель
                                    </Typography>
                                </BreadcrumbsComponent>
                                <Typography variant="subtitle1" color="initial">
                                    <span className={el.ads_type}>
                                        {t(el.ads_type)} №:
                                    </span>
                                    {el.id}
                                </Typography>
                            </div>
                            <Paper variant="outlined" elevation={2}>
                                <div className="card-data">
                                    <div className="img">
                                        <img
                                            src={el.image}
                                        />
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                            noWrap
                                            className={el.ads_type}
                                        >
                                            {t(el.ads_type)}
                                        </Typography>
                                        <span>
                                            <EyeIcon/>
                                            <Typography
                                                variant="caption"
                                                color="initial"
                                                noWrap
                                            >
                                                {el.number_of_views}
                                            </Typography>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="header">
                                            <div className="ancmnt-title">
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.title}
                                                </Typography>
                                            </div>
                                            <div className='card-btn'>
                                                {pathname?.includes('favorite') ?
                                                 <div
                                                     className='isFavorite'
                                                     onClick={() => handleModalOpen('disableFavorite', el.id)}
                                                 >
                                                     <CloseIcon/>
                                                 </div>
                                                                                :
                                                 <div
                                                     className='settings'
                                                     onClick={() => handleModalOpen('settings')}
                                                 >
                                                     <SettingsIcon/>
                                                 </div>}
                                            </div>
                                        </div>
                                        <div className="description">
                                            <span className="available">
                                                <PhoneIcon/>
                                                <Typography variant="body1">
                                                    Пн-Пт 9:00-18:00
                                                </Typography>
                                            </span>
                                            {!!el.exchange && (
                                                <Tooltip title={longText} arrow>
                                                    <span className="exchange">
                                                        <SwapIcon/>
                                                        <Typography variant="body1">
                                                            Возможен обмен
                                                        </Typography>
                                                    </span>
                                                </Tooltip>
                                            )}
                                            {!!el.delivery && (
                                                <span className="delivery">
                                                    <DeliveryIcon/>
                                                    <Typography variant="body1">
                                                        Есть доставка
                                                    </Typography>
                                                </span>
                                            )}
                                            {!!el.safe_deal && (
                                                <span className="safe_deal">
                                                    <SafeIcon/>
                                                    <Typography variant="body1">
                                                        Безопасная покупка
                                                    </Typography>
                                                </span>
                                            )}
                                        </div>
                                        <div className="location">
                                            <div>
                                                <LocationIcon/>
                                                <Typography
                                                    variant="caption"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.region?.name},{' '}
                                                    {el.city?.name},{' '}
                                                    {el.district?.name}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h5"
                                                    color="initial"
                                                >
                                                    {numberPrettier(el.price)}{' '}
                                                    {t(el.currency?.name)}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            {<div className="status-buttons">
                                {/*{el.accepted ?*/}
                                {/*    <ButtonComponent className="accepted">*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Принято*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*    :*/}
                                {/*    <ButtonComponent className="default mr10">*/}
                                {/*        <DoneAllIcon />*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Принять*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*}*/}
                                {/*{*/}
                                {/*    el.completePurchase &&*/}
                                {/*    <ButtonComponent className="default mr10"*/}
                                {/*                     onClick={() => handleModalOpen('completePurchase')}>*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            <DoneAllIcon />*/}
                                {/*            Завершить покупку*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*}*/}
                                {/*{!!el.expected && (*/}
                                {/*    <ButtonComponent className="expecting">*/}
                                {/*        <RestoreIcon />*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Ожидание*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*)}*/}
                                {/*{!!el.isModerated && (*/}
                                {/*    <ButtonComponent className="expecting">*/}
                                {/*        <RestoreIcon />*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            На модерации*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*)}*/}
                                {/*{!!el.follow && (*/}
                                {/*    <ButtonComponent className="follow">*/}
                                {/*        <NotificationIcon />*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Следить*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*)}*/}
                                {/*{el.denied ?*/}
                                {/*    <ButtonComponent className="refused">*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Отказано*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*    :*/}
                                {/*    <ButtonComponent className="default refuse" disabled>*/}
                                {/*        <CloseIcon />*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Отказать*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*}*/}
                                {/*{!!el.accepted ||*/}
                                {/*el.expected ||*/}
                                {/*(el.denied && (*/}
                                {/*    <ButtonComponent className="complete">*/}
                                {/*        <Typography variant="subtitle1">*/}
                                {/*            Завершить*/}
                                {/*        </Typography>*/}
                                {/*    </ButtonComponent>*/}
                                {/*))}*/}
                            </div>}
                        </Grid>
                        <Hidden xsUp={false}>
                            <Grid item xs={3} className="right-content">
                                {pathname === '/cabinet/posts' && (
                                    <div className="card-buttons">
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            className="promoteButton"
                                            aria-label="promoteButton"
                                            disabled={el.isModerated}
                                        >
                                            <Typography variant="subtitle1">
                                                Продвижение
                                            </Typography>
                                            <PromoteIcon/>
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            className="raiseTopButton"
                                            disabled={el.isModerated}
                                        >
                                            <Typography variant="subtitle1">
                                                Поднять в ТОП
                                            </Typography>
                                            <MegaphoneIcon/>
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            className="doubleUpButton"
                                            disabled={el.isModerated}
                                        >
                                            <Typography variant="subtitle1">
                                                Поднять в ленте
                                            </Typography>
                                            <DoubleUpIcon/>
                                        </Button>
                                    </div>
                                )}
                                {pathname === '/cabinet/auctions' ? (
                                    <div className="profile-form">
                                        <div className="extreme-rate">
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Крайняя ставка
                                            </Typography>
                                            {/* <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Продавец
                                            </Typography> */}
                                            <CustomButton>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    ?
                                                </Typography>
                                            </CustomButton>
                                        </div>
                                        <div className="profile-data">
                                            <UserAvatarComponent avatar={el.creator.avatar}/>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Имя Фамилия
                                            </Typography>
                                            <Rating card readOnly/>
                                            <CustomButton className='write'>
                                                <LetterIcon/>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Написать
                                                </Typography>
                                            </CustomButton>
                                        </div>
                                        <div>
                                            <CustomButton className="show-phone-btn">
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Показать номер
                                                </Typography>
                                            </CustomButton>
                                            {/* <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            <span>*</span> Оценка доступна в течении 90
                                            календарных дней
                                        </Typography> */}
                                        </div>
                                    </div>
                                ) : null}
                            </Grid>
                        </Hidden>
                    </Grid>
                );
            })}
        </div>
    );
};
