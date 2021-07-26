import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {useStyles} from '../../useStyles';

export const Registration = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('access_to_slondo.registration.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('access_to_slondo.registration.description')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};