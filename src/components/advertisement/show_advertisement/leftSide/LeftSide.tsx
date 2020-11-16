import React from 'react';
import {Typography} from '@material-ui/core';
import {Link} from '@root/i18n';
import {SyncSliders} from '@src/components/elements/sync_sliders/SyncSliders';
import {ReadMore} from "@src/components/elements/read_more/readMore";

// icons
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from "@src/components/elements/icons/WarningIcon";

// styles
import {useStyles} from './useStyles';

export const LeftSide = (props) => {
    const date = new Date(props.created_at).toLocaleDateString();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="ad-slider">
                <SyncSliders imgs={props.images}/>
            </div>
            <div className='ad-info'>
                <Typography variant='subtitle1'><span>Объявление №:</span> {props.id}</Typography>
                <Typography variant='subtitle1'>Опубликовано: {date}</Typography>
                <Typography variant='subtitle1'>Просмотров: {props.number_of_views}</Typography>
                <Typography variant='subtitle1'>Пожаловаться <WarningIcon/></Typography>
            </div>
            <div className="description">
                <div>
                    <Typography variant="subtitle1" noWrap>
                        Местоположение
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                        <LocationIcon/>
                        {
                            `${props.region ? props.region.name : ''}${props.city ? `, ${props.city.name}` : ''}${props.district ? `, ${props.district.name}` : ''}`
                        }
                    </Typography>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Описание
                        </Typography>
                    </div>
                    <ReadMore {...props}>
                        <Typography variant="subtitle1" color="initial">
                            {props.description}
                        </Typography>
                    </ReadMore>
                </div>
            </div>

            <div className="ad-category">

            </div>
            <div className="ad-parameters">
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Тип объявления
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Объявление
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Категория
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Электроника-Телефоны и планшеты-Мобильные телефоны
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Параметры
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Марка
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Samsung
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Диагональ экрана
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            16.9
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Встроенная память
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            32 Гб
                        </Typography>
                        <Link href="#">
                            <a>
                                <Typography variant="subtitle1" color="initial">
                                    Все параметры
                                </Typography>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
