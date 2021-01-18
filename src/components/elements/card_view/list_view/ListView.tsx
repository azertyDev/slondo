import React, { FC } from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import {
    SettingsIcon,
    LocationIcon,
    MegaphoneIcon,
    PromoteIcon,
    EyeIcon,
    DoubleUpIcon,
    FavoriteBorderIcon,
    RestoreIcon,
    CloseIcon,
    DoneAllIcon,
    DeliveryIcon,
    SafeIcon,
    SwapIcon,
    PhoneIcon,
    LetterIcon,
} from '@src/components/elements/icons';
import { ButtonComponent } from '@src/components/elements/button/Button';
import { BreadcrumbsComponent } from '@src/components/elements/breadcrumbs/Breadcrumbs';
import { ViewPropsTypes } from '@src/components/elements/card_view/CardView';
import { UserAvatarComponent } from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import { Rating } from '@src/components/elements/rating/Rating';
import { Link } from '@root/i18n';
import { useStyles } from './useStyles';

export const ListView: FC<ViewPropsTypes> = (props) => {
    const { isFetch, list } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {list.map((el) => {
                return (
                    <div className="ad-block" key={el.id}>
                        <div>
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
                                    {el.ads_type.mark === 'regular' ? (
                                        <span className="type-regular">
                                            Объявление №:
                                        </span>
                                    ) : (
                                        <span className="type-auction">
                                            Аукцион №:
                                        </span>
                                    )}
                                    {el.id}
                                </Typography>
                            </div>
                            <Paper variant="outlined" elevation={2}>
                                <div className='card-data'>
                                    <div className="img">
                                        {el.images.map((image) => (
                                            <img
                                                src={image.url.default}
                                                key={el.id}
                                            />
                                        ))}
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                            noWrap
                                            className={
                                                el.ads_type.mark === 'regular'
                                                    ? 'ancmnt'
                                                    : 'auction'
                                            }
                                        >
                                            {el.ads_type.name}
                                        </Typography>
                                        <span>
                                            <EyeIcon />
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
                                            <div>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.title}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    140
                                                </Typography>
                                                <Link href="#">
                                                    <a className="favorite-icon">
                                                        <FavoriteBorderIcon />
                                                    </a>
                                                </Link>
                                            </div>
                                            <Link href="#">
                                                <a className="settings-button">
                                                    <SettingsIcon />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="description">
                                            <span className="available">
                                                <PhoneIcon />
                                                <Typography variant="body1">
                                                    Пн-Пт 9:00-18:00
                                                </Typography>
                                            </span>
                                            {!!el.exchange && (
                                                <span className="exchange">
                                                    <SwapIcon />
                                                    <Typography variant="body1">
                                                        Возможен обмен
                                                    </Typography>
                                                </span>
                                            )}
                                            {!!el.delivery && (
                                                <span className="delivery">
                                                    <DeliveryIcon />
                                                    <Typography variant="body1">
                                                        Есть доставка
                                                    </Typography>
                                                </span>
                                            )}
                                            {!!el.safe_deal && (
                                                <span className="safe_deal">
                                                    <SafeIcon />
                                                    <Typography variant="body1">
                                                        Безопасная покупка
                                                    </Typography>
                                                </span>
                                            )}
                                        </div>
                                        <div className="location">
                                            <div>
                                                <Link href="#">
                                                    <a>
                                                        <LocationIcon />
                                                    </a>
                                                </Link>
                                                <Typography
                                                    variant="caption"
                                                    color="initial"
                                                    noWrap
                                                >
                                                    {el.region.name},{' '}
                                                    {el.city.name},{' '}
                                                    {el.district.name}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h5"
                                                    color="initial"
                                                >
                                                    {el.price}{' '}
                                                    {el.currency.name}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-buttons">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className="promoteButton"
                                        aria-label="promoteButton"
                                        disabled={!el.promote}
                                    >
                                        <Typography variant="subtitle1">
                                            Продвижение
                                        </Typography>
                                        <PromoteIcon />
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className="raiseTopButton"
                                        disabled={!el.raise}
                                    >
                                        <Typography variant="subtitle1">
                                            Поднять в ТОП
                                        </Typography>
                                        <MegaphoneIcon />
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className="doubleUpButton"
                                        disabled={!el.raiseInRape}
                                    >
                                        <Typography variant="subtitle1">
                                            Поднять в ленте
                                        </Typography>
                                        <DoubleUpIcon />
                                    </Button>
                                </div>
                            </Paper>
                            <div className="status-buttons">
                                {el.accepted && (
                                    <ButtonComponent className="accepted">
                                        <DoneAllIcon />
                                        <Typography variant="subtitle1">
                                            Принято
                                        </Typography>
                                    </ButtonComponent>
                                )}
                                {el.expected && (
                                    <ButtonComponent className="expecting">
                                        <RestoreIcon />
                                        <Typography variant="subtitle1">
                                            Ожидание
                                        </Typography>
                                    </ButtonComponent>
                                )}
                                {el.denied && (
                                    <Button className="denied">
                                        <CloseIcon />
                                        <Typography variant="subtitle1">
                                            Отказано
                                        </Typography>
                                    </Button>
                                )}
                                {el.accepted && el.expected && el.denied ? (
                                    <ButtonComponent className="complete">
                                        <Typography variant="subtitle1">
                                            Завершить
                                        </Typography>
                                    </ButtonComponent>
                                ) : null}
                            </div>
                        </div>
                        {/* <div className="profile-form">
                            <div>
                                <UserAvatarComponent />
                                <Typography variant="subtitle1" color="initial">
                                    <span>Имя Фамилия</span>
                                </Typography>
                                <Rating card />
                                <ButtonComponent className="show-phone-btn">
                                    <Typography
                                        variant="subtitle2"
                                        color="initial"
                                    >
                                        Показать номер
                                    </Typography>
                                </ButtonComponent>
                            </div>
                            <ButtonComponent>
                                <LetterIcon />
                                <Typography variant="subtitle1" color="initial">
                                    Написать
                                </Typography>
                            </ButtonComponent>
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
};
