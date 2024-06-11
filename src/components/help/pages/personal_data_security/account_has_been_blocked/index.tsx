import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {useStyles} from '../../useStyles';

export const AccountHasBeenBlocked = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('personal_data_security.account_has_been_blocked.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('personal_data_security.account_has_been_blocked.description.name')}
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('personal_data_security.account_has_been_blocked.description.0')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('personal_data_security.account_has_been_blocked.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('personal_data_security.account_has_been_blocked.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('personal_data_security.account_has_been_blocked.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('personal_data_security.account_has_been_blocked.description.4')}
                            </Typography>
                        </li>
                    </ol>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('personal_data_security.account_has_been_blocked.description.5')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};