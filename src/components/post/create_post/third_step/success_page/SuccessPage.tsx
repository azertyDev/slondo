import React, {FC, useEffect} from 'react';
import {Grid, Typography, Paper, Hidden} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
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
            <div className='success-title'>
                <Typography variant="h5" color="initial">
                    {t('congratulations')}
                </Typography>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <div className={classes.successInfo}>
                    <Hidden xsDown>
                        <CheckCircleOutlineIcon
                            className={classes.successIcon}
                        />
                    </Hidden>
                    <Typography color="initial">
                        Объявление отправлено на модерацию. <br/>
                        Статус объявления Вы можете отслеживать в
                        <Link href="/cabinet/posts">
                            <a> личном кабинете</a>
                        </Link>
                    </Typography>
                </div>
            </Paper>
            <div className={classes.buttonBlock}>
                <div>
                    <Link href="/create/type/select" shallow>
                        <a>
                            <CustomButton style={{color: '#fff'}}>
                                Создать еще
                            </CustomButton>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a>
                            <CustomButton style={{color: '#fff'}}>
                                На главную
                            </CustomButton>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
