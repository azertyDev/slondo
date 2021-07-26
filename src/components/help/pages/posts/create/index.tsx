import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {useStyles} from '../../useStyles';

export const Create = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('posts.create.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('posts.create.description.name')}
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.0')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('posts.create.description.6')}
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('posts.create.description.7')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};