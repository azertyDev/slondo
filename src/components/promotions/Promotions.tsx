import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Grid, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';
import {PromotionCard} from '@src/components/promotions/promotion_card/PromotionCard';

export const Promotions = () => {
    const {t} = useTranslation('promotions');

    const classes = useStyles();
    return (
        <MainLayout title={t('Акции')}>
            <div className={classes.root}>
                <Typography variant='h6' paragraph>
                    <b>{t('Акции')}</b>
                </Typography>
                <Grid container justify='center' spacing={4}>
                    <PromotionCard />
                    <PromotionCard />
                    <PromotionCard />
                    <PromotionCard />
                </Grid>
            </div>
        </MainLayout>
    );
};
