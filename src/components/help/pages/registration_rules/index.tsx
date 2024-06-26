import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'next-i18next';

export const RegistrationRules = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('how_to_register.name')}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_register.1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/registration/1.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_register.2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/registration/2.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_register.3')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/registration/3.png" alt="" className='image' />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};