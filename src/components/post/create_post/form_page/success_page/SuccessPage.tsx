import React, {FC, useEffect} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {useStyles} from './useStyles';


export const SuccessPage: FC = () => {
    const {t} = useTranslation(['post']);

    useEffect(() => {
        window && window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" color="initial">
                        {t('congratulations')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <div className={classes.successInfo}>
                            <CheckCircleOutlineIcon
                                className={classes.successIcon}
                            />
                            <Typography color="initial">
                                Объявление отправлено на модерацию. <br/>
                                Статус объявления Вы можете отслеживать в
                                <Link href="/cabinet/posts">
                                    <a> личном кабинете</a>
                                </Link>
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    justify="center"
                    className={classes.buttonBlock}
                >
                    <Grid item xs={6} sm={2}>
                        <Link href="/create/type">
                            <a>
                                <ButtonComponent style={{color: '#fff'}}>
                                    Создать еще
                                </ButtonComponent>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Link href="/">
                            <a>
                                <ButtonComponent style={{color: '#fff'}}>
                                    На главную
                                </ButtonComponent>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
                {/* <Grid item container xs={12} direction="row" justify="center">
                    <CardView />
                </Grid> */}
            </Grid>
        </div>
    );
};
