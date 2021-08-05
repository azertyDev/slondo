import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'react-i18next';

export const CreateAuction = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('auction.create_auction.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.create_auction.description.6')}
                            </Typography>
                        </li>
                    </ol>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('auction.create_auction.description.0')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};