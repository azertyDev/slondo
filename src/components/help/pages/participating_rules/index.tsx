import {ReactNode} from 'react';
import Link from 'next/link';
import {useTranslation, Trans} from 'react-i18next';
import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';


export const ParticipatingRules = () => {
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
                <Box display='block' mb={2} padding='10px 0'>
                    <Typography variant='h6'>
                        {t('how_to_participate.name')}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18 color-silver'>
                            <Trans
                                i18nKey="how_to_participate.1"
                                t={t}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18 mb-18'>
                            {t('how_to_participate.section.name')}
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_participate.section.1"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/participate/1.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_participate.section.2"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/participate/2.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_participate.section.3"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/participate/3.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18 color-silver'>
                            <Trans
                                i18nKey="how_to_participate.2"
                                t={t}
                                components={[<LinkText href='/cabinet/auctions' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/participate/4.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/participate/5.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/participate/6.png" alt="" className='image' />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ParticipatingRules;