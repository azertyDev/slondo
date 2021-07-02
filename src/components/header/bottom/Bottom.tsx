import {useState} from 'react';
import Link from 'next/link';
import {AppBar, Avatar, Container, Grid, Hidden, Popover, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {withScrollThreshold} from '@src/hocs/withScrollThreshold';
import {Logo, QuestionIcon, SubstractIcon, SurpriseIcon} from '@src/components/elements/icons';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {CustomDrawer} from '@src/components/header/bottom/custom_drawer/CustomDrawer';
import {Location} from '@src/components/elements/location/Location';
import {Localization} from '@src/components/header/top/localization/Localization';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {cookieOpts, cookies} from '@src/helpers';
import {useStyles} from './useStyles';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {useRouter} from 'next/router';


const Bottom = (props) => {
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

    const handleSelectLocation = ({region, city, district}) => {
        if (region) {
            const userLocation: any = {region};
            if (city) userLocation.city = city;
            if (district) userLocation.district = district;
            cookies.set('user_location', userLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
    };

    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <AppBar
                    color={'inherit'}
                    elevation={isScrollBreak ? 1 : 0}
                    position={isScrollBreak ? 'fixed' : 'absolute'}
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
                                            <Logo/>
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
                                        <Typography variant="subtitle2">
                                            {t('header:categories')}
                                        </Typography>
                                        <CategorySortIcon/>
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
                                    <HeaderSearchForm/>
                                </Grid>
                            </Grid>
                            <Grid item md={2}>
                                <Link href="/create/type/select">
                                    <a className='create-post-link'>
                                        <CustomButton
                                            color="primary"
                                            className="header-button"
                                        >
                                            <Typography variant="subtitle2">
                                                {t('header:createPost')}
                                            </Typography>
                                            <AddIcon/>
                                        </CustomButton>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="center"
                                alignItems="center"
                                xs={1}
                            >
                                {isAuth
                                    ? <span onClick={handleClick} className='avatar'>
                                        <Avatar alt="Avatar" src={avatar}/>
                                    </span>
                                    : <CustomButton
                                        className="bottom-sign-button header-button"
                                        onClick={handleOpenModal}
                                    >
                                        <Typography variant="subtitle2">
                                            {t('auth_reg:signIn')}
                                        </Typography>
                                        <SignIcon/>
                                    </CustomButton>}
                            </Grid>
                        </Grid>
                    </Container>
                </AppBar>
            </Hidden>
            {/* ========================== Adaptive ======================= */}
            <Hidden lgUp>
                <div className="translate-local">
                    <Location handleSelectLocation={handleSelectLocation}/>
                    <Localization/>
                </div>
                <Grid
                    item
                    container
                    alignItems="center"
                    justify="space-between"
                    className='multi-actions'
                    md={7}
                    sm={6}
                    xs={12}
                >
                    <Grid item md={2}>
                        <Link href="/promotions">
                            <a>
                                <SurpriseIcon/>
                                <Typography variant="subtitle1">
                                    {t('actions')}
                                </Typography>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={2}>
                        <Link href="#">
                            <a>
                                <SubstractIcon/>
                                <Typography variant="subtitle1">
                                    {t('bonus')}
                                </Typography>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={2}>
                        <Link href="/help">
                            <a className={pathname === '/help' ? 'selected' : ''}>
                                <QuestionIcon/>
                                <Typography variant="subtitle1">
                                    {t('help')}
                                </Typography>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
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
                <SidebarMenu/>
            </Popover>
        </div>
    );
};

export default withScrollThreshold(Bottom);
