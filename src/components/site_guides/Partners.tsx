import {FC} from 'react';
import {Box, Button, Container, Grid, Paper, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';
import {PhoneIcon} from '@src/components/elements/icons';

export const Partners: FC<WithT> = (props) => {
    const {t} = props;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='lg' style={{paddingTop: isXsDown ? 10 : 50}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper
                            elevation={isXsDown ? 0 : 1}
                            className='partner'
                        >
                            <img src="/img/yandex_1.png" alt="" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='info'>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant='h3' className='fw600 title' color='textPrimary'>
                                        {t('help:yandex.title')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display='flex' className='tariff-info' flexWrap='wrap'>
                                        <Box padding='15px 45px'>
                                            <Typography
                                                variant='h4'
                                                className='tariff'
                                                color='textPrimary'
                                                gutterBottom
                                            >
                                                {t('help:yandex.sale.title')}
                                            </Typography>
                                            <Typography variant='h3' className='tariff' color='textPrimary'>
                                                {t('help:yandex.sale.desc.percent')}&nbsp;
                                                <span>
                                                    {t('help:yandex.sale.desc.name')}
                                                </span>
                                            </Typography>
                                        </Box>
                                        <Box
                                            display='flex'
                                            pl='22px'
                                            pr='22px'
                                            flexDirection='column'
                                            justifyContent='center'
                                        >
                                            <Typography variant='h5' color='textPrimary' gutterBottom>
                                                {t('help:yandex.tariff.name')}
                                            </Typography>
                                            <Typography variant='h4' className='fw600' color='textPrimary'>
                                                {t('help:yandex.tariff.desc')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className='contact-phone'>
                            <Typography variant='h5' className='fw600' gutterBottom>
                                {t('help:yandex.phone')}
                            </Typography>
                            <a href='tel:+998951705555' className={classes.phoneWrapper}>
                                <Typography variant="h5" className='fw600' color="textPrimary">
                                    +998 (95) 170 55 55
                                </Typography>
                                <Button>
                                    <PhoneIcon />
                                </Button>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
