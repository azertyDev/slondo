import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import { Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {useRouter} from 'next/router';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {BannedPostsContainer} from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPostsContainer';
import {FavoriteContainer} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';
import {MessagesContainer} from '@src/components/cabinet/cabinet_pages/messages/MessagesContainer';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {RatingsContainer} from '@src/components/cabinet/cabinet_pages/rating/RatingsContainer';
import {SafetyDeal} from '@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {Subs} from '@src/components/cabinet/cabinet_pages/subs/Subs';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useStyles} from './useStyles';

export type CommonModalType = {
    post,
    open: boolean,
    onClose: () => void,
    handleRefresh: () => void
};

const Cabinet: FC = () => {
    const {t} = useTranslation('cabinet');
    const {page} = useRouter().query;
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const getPage = () => {
        switch (page) {
            case 'posts':
                return <MyPosts />;
            case 'auctions':
                return <MyAuctions />;
            case 'banned':
                return <BannedPostsContainer />;
            case 'favorite':
                return <FavoriteContainer />;
            case 'messages':
                return <MessagesContainer/>;
            case 'notifications':
                return <Notifications/>;
            case 'purchases' :
                return <MyPurchases/>;
            case 'rating' :
                return <RatingsContainer/>;
            case 'safe_deal' :
                return <SafetyDeal/>;
            case 'settings' :
                return <Settings/>;
            case 'subs':
                return <Subs/>;
            default:
                return <div>Test</div>
        }
    };

    const classes = useStyles();
    return (
        <MainLayout title={`${t('my_cabinet')} | ${t(page)}`}>
            <div className={classes.root}>
                <Grid container spacing={isSmDown ? 0 : 2}>
                    <Hidden smDown>
                        <Grid item sm={12} md={4} lg={3}>
                            <CabinetSidebar />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={12} md={8} lg={9}>
                        <Grid item xs={12}>
                            <Typography variant="h6" className="menu-title">
                                {t(page)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {getPage()}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default withAuthRedirect(Cabinet);
