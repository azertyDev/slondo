import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from 'react-i18next';

export const ParticipatingRules = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={5} padding='10px 0'>
                    <Typography variant='h6'>
                        {t('how_to_register.name')}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            {t('how_to_register.1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/participate/1-2.png" alt="" className='image' />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ParticipatingRules;