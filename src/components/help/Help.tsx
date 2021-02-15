import React from 'react';
import { Grid, Typography, Portal } from '@material-ui/core';
import { useStyles } from './useStyles';
import { Link } from '@root/i18n';

export const Help = () => {
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Заказ и предложение услуг на Slondo
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Я хочу заказать услугу
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Я хочу предложить услугу
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Доступ к Slondo
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вход по номеру телефона
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вход через социальную сеть
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Авторизация в Slondo другим способом
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <div ref={container} />
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                    className={classes.moreLink}
                                    onClick={handleClick}
                                >
                                    {show ? 'Скрыть' : 'Ещё 5 статей'}
                                </Typography>
                            </li>
                            {show ? (
                                <Portal container={container.current}>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    link
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    link
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </Portal>
                            ) : null}
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Безопасная сделка
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Безопасная сделка для покупателя
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Как не стать жертвой мошенников
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Безопасная сделка для продавца
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Что такое безопасная сделка?
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Действия со своими объявлениями
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Снятие с публикации и восстановление
                                            объявлений
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Редактирование объявлений
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Подача объявлений
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Уведомления в приложении и браузере
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Уведомления в приложении и браузере
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Сообщения в чатах
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Взаимодействие пользователей
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Чаты
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Звонки
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Как оставлять и получать оценки и
                                            отзывы
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Как пожаловаться на объявление,
                                            сообщение, пользователя
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Услуга «Продать быстрее»
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Что такое услуга "Продать быстрее"?
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по услуге "Премиум
                                            размещение"
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по услуге "Турбо продажа"
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по услуге "Поднятие в ленте"
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Услуга «Продать быстрее»
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Что такое лимиты и пакеты
                                            размещений?
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по оплате объявления или
                                            пакета
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по лимитам и подаче
                                            объявлений
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Тариф
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Вопрос по тарифу
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Что такое тариф?
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Slondo для бизнеса
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Подробнее о расширенном кабинете
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Магазины на Slondo
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block">
                        <Typography variant="h6" color="initial">
                            Нарушение интеллектуальных прав
                        </Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Нарушение интеллектуальных прав
                                            юридического лица
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Нарушение интеллектуальных прав
                                            физического лица
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
