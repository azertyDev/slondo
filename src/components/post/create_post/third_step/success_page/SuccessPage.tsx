import React, {FC, useEffect} from 'react';
import {Grid, Typography, Paper, Hidden} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {useStyles} from './useStyles';
import {useRouter} from "next/router";


export const SuccessPage: FC = () => {
    const {t} = useTranslation('post');
    const {query: {post_type}, locale} = useRouter();
    const isPost = post_type === 'post';

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
                        <span>
                            {t('post_send_moderation')}
                        </span>
                        <br/>
                        {locale === 'ru'
                            ? <>
                                <span>{t('follow_post_status')}</span>&nbsp;
                                <Link href={`/cabinet/${isPost ? 'posts' : 'auctions'}`}>
                                    <a>{t('to_cabinet_posts')}</a>
                                </Link>
                            </>
                            : <>
                                <Link href={`/cabinet/${isPost ? 'posts' : 'auctions'}`}>
                                    <a>{t('to_cabinet_posts')}</a>
                                </Link>&nbsp;
                                <span>{t('follow_post_status')}</span>
                            </>}
                    </Typography>
                </div>
            </Paper>
            <div className={classes.buttonsBlock}>
                <div>
                    <Link href="/create" shallow>
                        <a>
                            <CustomButton style={{color: '#fff'}}>
                                {t('create_more')}
                            </CustomButton>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a>
                            <CustomButton style={{color: '#fff'}}>
                                {t('to_home')}
                            </CustomButton>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
