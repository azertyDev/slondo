import {FC} from 'react';
import Link from 'next/link';
import {Box, Grid, Hidden, Typography} from '@material-ui/core';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuStruct from '@src/components/help/menu_struct';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useStyles} from './useStyles';

export const HelpPage: FC = () => {
    const {t} = useTranslation('help');
    const {push} = useRouter();

    const handleBack = async () => {
        await push('/');
    };

    const classes = useStyles();
    return (
        <MainLayout title={t('header:help')} handleBack={handleBack}>
            <Hidden xsDown>
                <Typography variant="h6" color="initial" className={classes.title}>
                    {t('header:help')}
                </Typography>
            </Hidden>
            <Grid container spacing={2}>
                <Hidden xsDown>
                    <HelpSidebar menuStruct={menuStruct} />
                </Hidden>
                <Grid container item xs={12} sm={9}>
                    <Box>
                        <Typography variant='subtitle1' gutterBottom>
                            {t('help:main.title')}
                        </Typography>
                        <Typography>
                            {t('help:main.subtitle')}&nbsp;
                            <Link href='/help/feedback'>
                                <a className={classes.link}>
                                    {t('help:feedback.name')}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </MainLayout>
    );
};
