import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'react-i18next';

export const SearchInService = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('search_in_service.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('search_in_service.description.0')}
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.6')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('search_in_service.description.7')}
                            </Typography>
                        </li>
                    </ol>
                </Grid>
            </Grid>
        </>
    );
};