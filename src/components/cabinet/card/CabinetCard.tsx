import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import { BreadcrumbsComponent } from '@src/components/elements/breadcrumbs/Breadcrumbs';
import { Link } from '@root/i18n';
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
} from '@src/components/elements/icons';

// styles
import { useStyles } from './useStyles';
import { ButtonComponent } from '@src/components/elements/button/Button';

export const CabinetCard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="ad-block">
                <div>
                    <BreadcrumbsComponent>
                        <Link href="#">
                            <a>Для дома и дачи</a>
                        </Link>
                        <Link href="#">
                            <a>Мебель и интерьер</a>
                        </Link>
                        <Typography color="primary">Столовая мебель</Typography>
                    </BreadcrumbsComponent>
                    <Typography variant="subtitle1" color="initial">
                        <span>Объявление №:</span> 10071
                    </Typography>
                </div>
                <div>
                    <div>
                        <div>
                            <Paper variant="outlined" elevation={2}>
                                <div>
                                    <div className="img">
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                            noWrap
                                        >
                                            Объявление
                                        </Typography>
                                        <span>
                                            <EyeIcon />
                                            <Typography
                                                variant="caption"
                                                color="initial"
                                                noWrap
                                            >
                                                1240
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
                                                    Мебель от производителя по
                                                    супер скидке!
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
                                                <Link href="#">
                                                    <a>
                                                        <SettingsIcon />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <span className="available">
                                                <PhoneIcon />
                                                <Typography variant="body1">
                                                    Пн-Пт 9:00-18:00
                                                </Typography>
                                            </span>
                                            <span className="exchange">
                                                <SwapIcon />
                                                <Typography variant="body1">
                                                    Возможен обмен
                                                </Typography>
                                            </span>
                                            <span className="delivery">
                                                <DeliveryIcon />
                                                <Typography variant="body1">
                                                    Есть доставка
                                                </Typography>
                                            </span>
                                            {props.safeShopping ? (
                                                <span className="safe_deal">
                                                    <SafeIcon />
                                                    <Typography variant="body1">
                                                        Безопасная покупка
                                                    </Typography>
                                                </span>
                                            ) : null}
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
                                                >
                                                    Ташкент, Ташкентская
                                                    область,Мирзо-Улугбекский
                                                    район
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h5"
                                                    color="initial"
                                                >
                                                    1 300 000 сум
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            <div className="status-buttons">
                                <ButtonComponent
                                    className="accepted"
                                    centerRipple
                                >
                                    <DoneAllIcon />
                                    <Typography variant="subtitle1">
                                        Ожидание
                                    </Typography>
                                </ButtonComponent>
                                <ButtonComponent className="complete">
                                    <Typography variant="subtitle1">
                                        Завершить
                                    </Typography>
                                </ButtonComponent>
                                {/*<ButtonComponent className='expecting'>*/}
                                {/*    <RestoreIcon/>*/}
                                {/*    <Typography variant="subtitle1">Принято</Typography>*/}
                                {/*</ButtonComponent>*/}
                                {/*<Button className='denied'>*/}
                                {/*    <CloseIcon/>*/}
                                {/*    <Typography variant="subtitle1">Отказано</Typography>*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="card-buttons">
                            <Button
                                color="primary"
                                variant="contained"
                                className="promoteButton"
                                aria-label="promoteButton"
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
                            >
                                <Typography variant="subtitle1">
                                    Поднять в ленте
                                </Typography>
                                <DoubleUpIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
