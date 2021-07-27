import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'react-i18next';

export const Reject = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('posts.rejected.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('posts.rejected.description.name')}
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.rejected.description.0')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.rejected.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.rejected.description.2')}
                            </Typography>
                        </li>
                    </ol>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('posts.rejected.description.3')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};