import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../../useStyles';
import {useTranslation} from 'react-i18next';

export const AccountsRequirements = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2}>
                    <Typography variant='h6' className='title'>
                        {t('site_rules.accounts_requirements.name')}
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <Typography variant='subtitle1' component='p' className='color-silver'>
                        {t('site_rules.accounts_requirements.description.name')}
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.1')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.2.0')}
                            </Typography>
                            <ol>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.2.1')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.2.2')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.2.3')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.2.4')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.2.5')}
                                    </Typography>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.3')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.4')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.5')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.6')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.7')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.8')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.9')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.10')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.11')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.12')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.13')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.14')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.15')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.16')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.17')}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='subtitle1' component='p' className='color-silver'>
                                {t('site_rules.accounts_requirements.description.18.0')}
                            </Typography>
                            <ol>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.1')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.2')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.3')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.4')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.5')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.6')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.7')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.8')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.9')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.10')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.11')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.12')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='subtitle1' component='p' className='color-silver'>
                                        {t('site_rules.accounts_requirements.description.18.13')}
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
