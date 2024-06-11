import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {useStyles} from '../../useStyles';

export const MaterialRequirements = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('site_rules.material_requirements.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.0')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.material_requirements.description.5')}
                            </Typography>
                        </li>
                    </ol>
                </Grid>
            </Grid>
        </>
    );
};
