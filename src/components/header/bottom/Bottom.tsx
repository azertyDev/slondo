import {cloneElement, useState} from 'react';
import Link from 'next/link';
import {AppBar, Avatar, Box, Container, Grid, Hidden, Popover, Typography, useScrollTrigger} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {withScrollThreshold} from '@src/hocs/withScrollThreshold';
import {Logo, QuestionIcon, SurpriseIcon} from '@src/components/elements/icons';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {CustomDrawer} from '@src/components/header/bottom/custom_drawer/CustomDrawer';
import {Location} from '@src/components/elements/location/Location';
import {Localization} from '@src/components/header/top/localization/Localization';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {cookieOpts, cookies} from '@src/helpers';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

function ElevationScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const Bottom = (props) => {
    const userLocation = cookies.get('user_location');
    const {isScrollBreak, handleOpenModal, isAuth, t, avatar} = props;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const {pathname} = useRouter();

    const handleDrawerShow = (value) => () => {
        setDrawerOpen(value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSelectLocation = ({region, city}) => {
        if (region) {
            const userLocation: any = {region};
            if (city) userLocation.city = city;
            cookies.set('user_location', userLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
    };

    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <ElevationScroll {...props}>
                    <AppBar
                        elevation={0}
                        color='inherit'
                        className={classes.root}
                        position={isScrollBreak ? 'fixed' : 'relative'}
                    >
                        <Container maxWidth="xl">
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid
                                    container
                                    item
                                    xs={3}
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Grid
                                        container
                                        item
                                        md={6}
                                        className="bottom-logo"
                                    >
                                        <Link href="/">
                                            <a>
                                                <Logo />
                                            </a>
                                        </Link>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        md={6}
                                        justify="flex-end"
                                        className="category-menu"
                                    >
                                        <CustomButton
                                            color="primary"
                                            className="bottom-category-button header-button"
                                            onClick={handleDrawerShow(true)}
                                        >
                                            <CategorySortIcon />
                                            <Typography variant="subtitle2">
                                                {t('header:categories')}
                                            </Typography>
                                        </CustomButton>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    md={6}
                                    alignItems="center"
                                    className="search-block"
                                >
                                    <Grid item xs>
                                        <HeaderSearchForm />
                                    </Grid>
                                </Grid>
                                <Grid item md={2}>
                                    <Link href="/create/type">
                                        <a className='create-post-link'>
                                            <CustomButton
                                                color="primary"
                                                className="header-button"
                                            >
                                                <Typography variant="subtitle2">
                                                    {t('header:createPost')}
                                                </Typography>
                                                <AddIcon />
                                            </CustomButton>
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid
                                    item
                                    xs={1}
                                    container
                                    justify="center"
                                    alignItems="center"
                                >
                                    {isAuth
                                        ? <span onClick={handleClick} className='avatar'>
                                        <Avatar alt="Avatar" src={avatar} />
                                    </span>
                                        : <CustomButton
                                            className="bottom-sign-button header-button"
                                            onClick={handleOpenModal}
                                        >
                                            <Typography variant="subtitle2">
                                                {t('auth_reg:signIn')}
                                            </Typography>
                                            <SignIcon />
                                        </CustomButton>}
                                </Grid>
                            </Grid>
                        </Container>
                    </AppBar>
                </ElevationScroll>
            </Hidden>
            {/* ========================== Adaptive ======================= */}
            <Hidden lgUp>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item xs={12} className="translate-local">
                            <Location
                                userLocation={userLocation}
                                handleSelectLocation={handleSelectLocation}
                            />
                            <Localization />
                        </Grid>
                        <Grid
                            item
                            container
                            alignItems="center"
                            className='multi-actions'
                            spacing={1}
                            xs={12}
                            sm={7}
                        >
                            <Grid item sm={4} md={3}>
                                <Link href="/promotions">
                                    <a>
                                        <SurpriseIcon />
                                        <Typography variant="subtitle1">
                                            {t('actions')}
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item sm={4} md={3}>
                                <Link href="/help">
                                    <a className={pathname === '/help' ? 'selected' : ''}>
                                        <QuestionIcon />
                                        <Typography variant="subtitle1">
                                            {t('help')}
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>
            <CustomDrawer
                position='left'
                open={drawerOpen}
                onClose={handleDrawerShow(false)}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                className={classes.menu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <SidebarMenu clearAnchor={handleClose} />
            </Popover>
        </div>
    );
};

export default withScrollThreshold(Bottom);
