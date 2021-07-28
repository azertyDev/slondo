import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

export const PromotionCard = () => {
    const {t} = useTranslation('promotions');
    const [resize, setResize] = useState(false);

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const [descHeight, setDescHeight] = useState(0);

    useEffect(() => {
        setDescHeight(document.getElementById('content').clientHeight);
    }, []);

    const toggleSize = () => {
        setResize(!resize);
    };

    const classes = useStyles({resize});
    return (
        <Grid item xs={12} lg={9}>
            <Card elevation={0} className={classes.card}>
                <Grid container justify='center'>
                    {
                        resize
                            ? <Grid item xs={12}>
                                <CardMedia
                                    className={classes.media}
                                    image={isXsDown ? '/img/promotions/2.jpg' : '/img/promotions/1.jpg'}
                                />
                            </Grid>
                            : <Grid item xs={12} sm={5} md={4} lg={4}>
                                <CardMedia
                                    className={classes.media}
                                    image={isXsDown ? '/img/promotions/1.jpg' : '/img/promotions/2.jpg'}
                                />
                            </Grid>
                    }
                    <Grid
                        item
                        xs={12}
                        sm={resize ? 12 : 7}
                        md={resize ? 12 : 8}
                        lg={resize ? 12 : 8}
                    >
                        <CardContent id='content'>
                            <Typography gutterBottom variant="h5" component="h2" paragraph>
                                Сайт объявлений и аукционов Slondo.uz <br />
                                Акция «Продавай и выигрывай»
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                component='p'
                                className={!resize ? classes.hidden : ''}
                            >
                                Условия акции очень просты:
                                Вы регистрируетесь на сайте, создаете объявление, в котором продаете товар или
                                предлагаете услугу и автоматически становитесь участником розыгрыша ценных призов.
                                Призы 1 тура:
                                Смартфон Xiaomi Mi 10t 128 Гб
                                Наушники Apple AirPods 2
                                Смарт часы Amazfit GTS 2e
                                Каждое созданное объявление в период проведения акции равняется одному шансу на выигрыш
                                и получает собственный ID. Количество создаваемых объявлений и шансов не ограничено.
                                Одно объявление = 1 шанс. Десять объявлений = 10 шансов.
                                По завершению акции проводится розыгрыш призов с помощью онлайн сервиса райдомайзера
                                «рандом.пример», который определит победителей.
                                Сроки проведения акции: 10 августа 2021 г. – 20.08.2021 г.
                                Розыгрыш призов: 21.08.2021 в 18:00 в прямом эфире на нашей странице Instagram.
                            </Typography>
                            {descHeight >= 95 && (
                                <CustomButton
                                    disableRipple
                                    onClick={toggleSize}
                                    className='show-more-button'
                                >
                                    {resize
                                        ? <Typography variant='subtitle1'>
                                            {t('common:showMore')}
                                        </Typography>
                                        : <Typography variant='subtitle1'>
                                            {t('common:hide')}
                                        </Typography>}
                                </CustomButton>
                            )}
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};
