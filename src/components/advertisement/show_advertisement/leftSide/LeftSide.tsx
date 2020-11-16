import React from 'react';
import {Typography} from '@material-ui/core';
import {Link} from '@root/i18n';
import {SyncSliders} from '@src/components/elements/sync_sliders/SyncSliders';
import {ReadMore} from "@src/components/elements/read_more/readMore";

// icons
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from "@src/components/elements/icons/WarningIcon";
import {PhoneIcon} from "@src/components/elements/icons/PhoneIcon";
import {SwapIcon} from "@src/components/elements/icons/SwapIcon";
import {SafeIcon} from "@src/components/elements/icons/SafeIcon";
import {DeliveryIcon} from "@src/components/elements/icons/DeliveryIcon";

// styles
import {useStyles} from './useStyles';

export const LeftSide = ({data}) => {
    const date = new Date(data.created_at);
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const formatted_date = date.getDate() + " " + months[(date.getMonth())] + " " + date.getFullYear();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="ad-slider">
                <SyncSliders imgs={data.images}/>
            </div>
            <div className='ad-info'>
                <Typography variant='subtitle1'><span>Объявление №:</span> {data.id}</Typography>
                <Typography variant='subtitle1'>Опубликовано: {formatted_date}</Typography>
                <Typography variant='subtitle1'>Просмотров: {data.number_of_views}</Typography>
                <Typography variant='subtitle1'>Пожаловаться <WarningIcon/></Typography>
            </div>
            <div className='ad-bonus'>
                <span><DeliveryIcon/> <Typography variant='subtitle1'>Есть доставка</Typography></span>
                <span><SafeIcon/> <Typography variant='subtitle1'>Безопасная покупка</Typography></span>
                <span><SwapIcon/> <Typography variant='subtitle1'>Возможен обмен</Typography></span>
                <span><PhoneIcon/> <Typography variant='subtitle1'>9:00-18:00</Typography></span>
            </div>
            <div className='ad-location'>
                <Typography variant="body1" noWrap>
                    Местоположение
                </Typography>
                {
                    data.region.name || data.city.name || data.district.name
                        ?
                        <Typography variant="subtitle1" noWrap>
                            <LocationIcon/>
                            {`${data.region.name ?? ''}`}
                            {data.city.name ? `, ${data.city.name}` : ''}
                            {data.district.name ? `, ${data.district.name}` : ''}
                        </Typography>
                        : <Typography variant='subtitle1'>Не указано</Typography>
                }
            </div>
            <div className="ad-description">
                <div>
                    <div>
                        <Typography variant="body1" color="initial">
                            Описание
                        </Typography>
                    </div>
                    <ReadMore {...data}>
                        <Typography variant="subtitle1" color="initial">
                            {data.description}
                        </Typography>
                    </ReadMore>
                </div>
            </div>
            <div className='started-price'>
                <Typography variant='body1'>Стартовая цена</Typography>
                <span>
                    <Typography variant='body2'>750 000 сум</Typography>
                </span>
            </div>
            {/*<div className="ad-category">*/}

            {/*</div>*/}
            <div className="ad-parameters">
                <Typography variant="body1" color="initial">
                    Параметры
                </Typography>
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
