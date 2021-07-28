import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {PromotionCard} from '@src/components/promotions/promotion_card/PromotionCard';
import {useStyles} from './useStyles';

export const Promotions = () => {
    const {t} = useTranslation('promotions');

    const classes = useStyles();
    return (
        <MainLayout title={t('promotions:promotions')}>
            <div className={classes.root}>
                <Typography variant='h6' paragraph>
                    <b>{t('promotions:promotions')}</b>
                </Typography>
                <Grid container justify='center' spacing={4}>
                    <PromotionCard />
                </Grid>
            </div>
        </MainLayout>
    );
};