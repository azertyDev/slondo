import {FC, useContext} from 'react';
import {useTranslation} from "next-i18next";
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {UserCtx} from "@src/context/UserCtx";
import {useRouter} from "next/router";
import {MyPosts} from "@src/components/cabinet/cabinet_pages/my_posts/MyPosts";
import {MyAuctions} from "@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions";
import {BannedPostsContainer} from "@src/components/cabinet/cabinet_pages/banned_posts/BannedPostsContainer";
import {FavoriteContainer} from "@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer";
import {MessagesContainer} from "@src/components/cabinet/cabinet_pages/messages/MessagesContainer";
import {Notifications} from "@src/components/cabinet/cabinet_pages/notifications/Notifications";
import {MyPurchases} from "@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases";
import {RatingsContainer} from "@src/components/cabinet/cabinet_pages/rating/RatingsContainer";
import {SafetyDeal} from "@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal";
import {SettingsContainer} from "@src/components/cabinet/cabinet_pages/settings/SettingsContainer";
import {Subs} from "@src/components/cabinet/cabinet_pages/subs/Subs";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
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

    const getPage = () => {
        switch (page) {
            case 'posts':
                return <MyPosts/>;
            case 'auctions':
                return <MyAuctions/>;
            case 'banned':
                return <BannedPostsContainer/>;
            case 'favorite':
                return <FavoriteContainer/>;
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
                return <SettingsContainer/>;
            case 'subscribe':
                return <Subs/>;
        }
    };

    const classes = useStyles();
    return (
        <MainLayout title={`${t('my_cabinet')} | ${t(page)}`}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetSidebar/>
                    </Grid>
                    <Grid item xs={9} container direction='column'>
                        <Typography variant="h6" className="menu-title">
                            {t(page)}
                        </Typography>
                        {getPage()}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default withAuthRedirect(Cabinet);
