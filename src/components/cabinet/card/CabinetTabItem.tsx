import React from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {Link} from '@root/i18n';
import {
    SettingsIcon,
    LocationIcon,
    GramophoneIcon,
    PromoteIcon,
    EyeIcon,
    DoubleUpIcon,
    FavoriteBorderIcon
} from '@src/components/elements/icons';

// styles
import {useStyles} from './useStyles';

export const CabinetTabItem = () => {
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
                        <Paper variant="outlined" elevation={2}>
                            <div className="img">
                                <Typography
                                    variant="caption"
                                    color="initial"
                                    noWrap
                                >
                                    Объявление
                                </Typography>
                                <span>
                                    <EyeIcon/>
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
                                            Мебель от производителя по супер
                                            скидке!
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
                                                <FavoriteBorderIcon/>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <SettingsIcon/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="description">
                                    <Typography
                                        variant="subtitle2"
                                        color="initial"
                                    >
                                        Не упустите шанс купить мебель от
                                        производителя по доступным ценам! Шкаф
                                        купе размер 138см ширина высота 210 см
                                        глубина 55 см. Наш фирменный магазин
                                        находится в Мирзоулугбекском районе
                                        массив Феруза. Наш фирменный магазин
                                        находится в Мирзоулугбекском районе
                                        массив Феруза
                                    </Typography>
                                </div>
                                <div className="location">
                                    <div>
                                        <Link href="#">
                                            <a>
                                                <LocationIcon/>
                                            </a>
                                        </Link>
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                        >
                                            Ташкент, Ташкентская
                                            область,Мирзо-Улугбекский район
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
                        </Paper>
                    </div>
                    <div className="card-buttons">
                        <Button endIcon={<PromoteIcon/>} color="primary" variant="contained" className='promoteButton'>
                            Продвижение
                        </Button>
                        <Button endIcon={<GramophoneIcon/>} color="primary" variant="contained" className='raiseTopButton'>
                            Поднять в ТОП
                        </Button>
                        <Button endIcon={<DoubleUpIcon/>} color="primary" variant="contained" className='doubleUpButton'>
                            Поднять в ленте
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
