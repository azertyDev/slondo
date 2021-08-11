import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
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
import ErrorPage from '@root/pages/_error';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {getSessionItem} from "@src/helpers";
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

const Cabinet: FC<{ referrer: string }> = ({referrer}) => {
    const {t} = useTranslation('cabinet');
    const {query, push, back} = useRouter();
    const {page} = query;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isRootPage = page === undefined;
    const existPage = isRootPage || Pages[page as string] !== undefined;

    const title = `${t('my_cabinet')} ${page ? `| ${t(page)}` : ''}`;

    const prevPath = getSessionItem('prevPath');
    const currPath = getSessionItem('currentPath');

    const backURL = prevPath !== currPath ? prevPath : '/';

    const handlePrev = () => {
        isRootPage
            ? push('/')
            : back();
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

    const desktop = (
        <MainLayout title={title}>
            <div className={classes.root}>
                <Grid container>
                    <Grid item sm={4} md={3}>
                        <CabinetSidebar/>
                    </Grid>
                    <Grid item sm={8} md={9} className='pl-16'>
                        {isRootPage
                            ? <Typography>
                                {t('select_page')}
                            </Typography>
                            : <>
                                <Typography variant="h6" className="menu-title">
                                    {t(page)}
                                </Typography>
                                {getPage()}
                            </>}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );

    const mobile = (
        <>
            <ModalHeader
                hasPrevBtn={true}
                handlePrevMenu={handlePrev}
                title={t(isRootPage ? 'myCabinet' : page)}
            />
            <Box p='15px 10px'>
                {isRootPage
                    ? <CabinetSidebar/>
                    : getPage()
                }
            </Box>
        </>
    );

    return (
        existPage
            ? isXsDown ? mobile : desktop
            : <ErrorPage statusCode={404}/>
    );
};

export default withAuthRedirect(Cabinet);
