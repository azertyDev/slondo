import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'react-i18next';

export const ForbiddenOnSlondo = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('site_rules.forbidden_on_slondo.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.2')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.6')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.7')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.8')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.9')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.forbidden_on_slondo.description.10.0')}
                            </Typography>
                            <ol>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.1')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.2')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.3')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.4')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.5')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.6')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.7')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.8')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.9')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.10')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.11')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.12')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.13')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.14')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.15')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.16')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.17')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.forbidden_on_slondo.description.10.18')}
                                    </Typography>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </Grid>
            </Grid>
        </>
    );
};

