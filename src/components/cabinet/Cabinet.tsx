import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {
    Grid,
    Hidden,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {BannedPosts} from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPosts';
import {FavoriteContainer} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {Ratings} from '@src/components/cabinet/cabinet_pages/rating/Ratings';
import {SafeDeal} from '@src/components/cabinet/cabinet_pages/safe_deal/SafeDeal';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {Subs} from '@src/components/cabinet/cabinet_pages/subs/Subs';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {ChatContainer} from '@src/components/elements/chat_component/ChatContainer';
import {CabinetSidebar} from '@src/components/cabinet/components/cabinet_sidebar/CabinetSidebar';
import {useStyles} from './useStyles';

export type CommonModalType = {
    post;
    open: boolean;
    onClose: () => void;
    handleRefresh: () => void;
};

const Cabinet: FC = () => {
    const {
        query: {page},
        push
    } = useRouter();
    
    const {t} = useTranslation('cabinet');
    const title = t(page);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isMainPage = page === 'main';

    const handlePrev = async () => {
        await push(isMainPage ? '/' : '/cabinet/main');
    };

    const getPage = () => {
        switch (page) {
            case 'posts':
                return <MyPosts />;
            case 'auctions':
                return <MyAuctions />;
            case 'banned':
                return <BannedPosts />;
            case 'favorite':
                return <FavoriteContainer />;
            case 'messages':
                return <ChatContainer />;
            case 'notifications':
                return <Notifications />;
            case 'purchases':
                return <MyPurchases />;
            case 'rating':
                return <Ratings />;
            case 'safe_deal':
                return <SafeDeal />;
            case 'settings':
                return <Settings />;
            case 'subs':
                return <Subs />;
        }
    };

    const classes = useStyles();
    return (
        <MainLayout title={title} handleBack={handlePrev}>
            <div className={classes.root}>
                <Grid container>
                    {((isXsDown && isMainPage) || !isXsDown) && (
                        <Grid item xs={12} sm={5} md={4} lg={3}>
                            <CabinetSidebar />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={7} md={8} lg={9} className="pl-16">
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
