import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'react-i18next';

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
                        {t('auction.holding.description')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};