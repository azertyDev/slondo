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
                        <Box width={0.72} ml='60px' mt='65px'>
                            <Typography variant='h3' className='fw600' color='textPrimary'>
                                Подключение к Яндекс Go
                            </Typography>
                            <Box display='flex' mt='60px' className='tariff-info' flexWrap='wrap'>
                                <Box width={0.7} padding='15px 45px'>
                                    <Typography variant='h4' className='tariff' color='textPrimary' gutterBottom>
                                        Комиссия всего
                                    </Typography>
                                    <Typography variant='h3' className='tariff' color='textPrimary'>
                                        2%&nbsp;
                                        <span>
                                        + Бонус при подключении!
                                    </span>
                                    </Typography>
                                </Box>
                                <Box
                                    width={0.3}
                                    display='flex'
                                    paddingLeft='22px'
                                    flexDirection='column'
                                    justifyContent='center'
                                >
                                    <Typography variant='h5' color='textPrimary'>
                                        тариф
                                    </Typography>
                                    <Typography variant='h4' className='fw600' color='textPrimary'>
                                        ГРУЗОВОЙ
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box width={0.72} ml='60px' mt='65px'>
                            <Typography variant='h5' className='fw600' gutterBottom>
                                Комиссия всего
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
