import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {BannedPosts} from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPosts';
import {FavoriteContainer} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';
import {MessagesContainer} from '@src/components/cabinet/cabinet_pages/messages/MessagesContainer';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {Ratings} from '@src/components/cabinet/cabinet_pages/rating/Ratings';
import {SafeDeal} from '@src/components/cabinet/cabinet_pages/safe_deal/SafeDeal';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {Subs} from '@src/components/cabinet/cabinet_pages/subs/Subs';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
// import {getSessionItem} from "@src/helpers";
import {useStyles} from './useStyles';

export type CommonModalType = {
    post,
    open: boolean,
    onClose: () => void,
    handleRefresh: () => void
};

const Cabinet: FC = () => {
    const {query: {page}, push} = useRouter();
    const {t} = useTranslation('cabinet');
    const title = `${t('my_cabinet')} | ${t(page)}`;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isMainPage = page === 'main';
    // const prevPath = getSessionItem('prevPath');
    // const currPath = getSessionItem('currentPath');

    const handlePrev = () => {
        push(isMainPage ? '/': '/cabinet/main');
    };

    const getPage = () => {
        switch (page) {
            case 'posts':
                return <MyPosts/>;
            case 'auctions':
                return <MyAuctions/>;
            case 'banned':
                return <BannedPosts/>;
            case 'favorite':
                return <FavoriteContainer/>;
            case 'messages':
                return <MessagesContainer/>;
            case 'notifications':
                return <Notifications/>;
            case 'purchases':
                return <MyPurchases/>;
            case 'rating':
                return <Ratings/>;
            case 'safe_deal':
                return <SafeDeal/>;
            case 'settings':
                return <Settings/>;
            case 'subs':
                return <Subs/>;
        }
    };

    const classes = useStyles();
    return (
        <MainLayout
            title={title}
            handleBack={handlePrev}
        >
            <div className={classes.root}>
                <Grid container>
                    {(isXsDown && isMainPage || !isXsDown) && (
                        <Grid item xs={12} sm={4} md={3}>
                            <CabinetSidebar/>
                        </Grid>
                    )}
                    <Grid item xs={12} sm={8} md={9} className='pl-16'>
                        <Hidden xsDown>
                            <Typography variant="h6" className="menu-title">
                                {t(page)}
                            </Typography>
                        </Hidden>
                        {getPage()}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default withAuthRedirect(Cabinet);
