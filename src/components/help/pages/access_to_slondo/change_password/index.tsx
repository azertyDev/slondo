import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {useStyles} from '../../useStyles';

export const ChangePassword = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('access_to_slondo.change_password.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('access_to_slondo.change_password.description')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};