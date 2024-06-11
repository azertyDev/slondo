import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'next-i18next';

export const HoldingAuction = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('auction.holding.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('auction.holding.description.0')}
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.holding.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.holding.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.holding.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('auction.holding.description.4')}
                            </Typography>
                        </li>
                    </ol>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('auction.holding.description.5')}
                    </Typography>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('auction.holding.description.6')}
                    </Typography>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('auction.holding.description.7')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};