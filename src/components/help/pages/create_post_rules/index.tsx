import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {Trans, useTranslation} from 'react-i18next';
import {ReactNode} from 'react';
import Link from 'next/link';

export const CreatePostRules = () => {
    const {t} = useTranslation('help');

    const LinkText = ({href, children}: {href: string, children?: ReactNode}) => {
        return <Link href={href}>
            <a className='link'>
                {children}
            </a>
        </Link>;
    };

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('how_to_create_post.name')}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18 color-silver'>
                            <Trans
                                i18nKey="how_to_create_post.1"
                                t={t}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/post/1.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/post/2.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18'>
                            <Trans
                                i18nKey="how_to_create_post.section.1"
                                t={t}
                                components={[<span className='error-text' />]}
                            />
                        </Typography>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_create_post.section.2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/3.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} className='mb-18'>
                        <Typography variant='subtitle1' className='fs-18' gutterBottom>
                            {t('how_to_create_post.section.3')}
                        </Typography>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_create_post.section.4')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className='mb-18'>
                        <Typography variant='subtitle1' className='fs-18' gutterBottom>
                            {t('how_to_create_post.section.5')}
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.6"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />,
                                    <LinkText href='#' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/4.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.7"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/5.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.8"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/6.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.9"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/7.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.10"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/post/8.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_post.section.11"
                                t={t}
                                components={[
                                    <span className='term' />,
                                    <span className='description' />
                                ]}
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};