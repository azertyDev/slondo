import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Box, Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {BannedPosts} from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPosts';
import {FavoriteContainer} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';
import {MessagesContainer} from '@src/components/cabinet/cabinet_pages/messages/MessagesContainer';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {RatingsContainer} from '@src/components/cabinet/cabinet_pages/rating/RatingsContainer';
import {SafetyDeal} from '@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {Subs} from '@src/components/cabinet/cabinet_pages/subs/Subs';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import ErrorPage from "@root/pages/_error";
import {PrevArrowIcon} from "@src/components/elements/icons";
import {useStyles} from './useStyles';

enum Pages {
    'posts',
    'auctions',
    'banned',
    'favorite',
    'messages',
    'notifications',
    'purchases',
    'rating',
    'safe_deal',
    'settings',
    'subs'
}

export type CommonModalType = {
    post,
    open: boolean,
    onClose: () => void,
    handleRefresh: () => void
};

const Cabinet: FC = () => {
    const {t} = useTranslation('cabinet');
    const {query, push} = useRouter();
    const {page} = query;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isRootPage = page === undefined;
    const existPage = isRootPage || Pages[page as string] !== undefined;

    const title = `${t('my_cabinet')} ${page ? `| ${t(page)}` : ''}`;

    const handlePrev = () => {
        push('/cabinet', undefined, {shallow: true});
    };

    const getPage = () => {
        switch (page as keyof typeof Pages) {
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
        }
    };

    const classes = useStyles();
    return (
        existPage
            ? <MainLayout title={title}>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        {(isRootPage && isXsDown || !isXsDown) && (
                            <Grid item xs={12} sm={4} md={3}>
                                <CabinetSidebar/>
                            </Grid>
                        )}
                        {!(isRootPage && isXsDown) && (
                            <Grid item xs={12} sm={8} md={9} className='pl-16'>
                                {isRootPage
                                    ? <Typography>
                                        {t('select_page')}
                                    </Typography>
                                    : <>
                                        <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                            {isXsDown && (
                                                <PrevArrowIcon onClick={handlePrev} />
                                            )}
                                            <Typography variant="h6" className="menu-title" align='center'>
                                                {t(page)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {getPage()}
                                        </Grid>
                                    </>}
                            </Grid>
                        )}
                    </Grid>
                </div>
            </MainLayout>
            : <ErrorPage statusCode={404}/>
    );
};

export default withAuthRedirect(Cabinet);
