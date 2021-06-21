import {useState} from 'react';
import Link from 'next/link';
import {
    AppBar,
    Avatar,
    Container,
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {withScrollThreshold} from '@src/hocs/withScrollThreshold';
import {Logo} from '@src/components/elements/icons';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {CustomDrawer} from '@src/components/header/bottom/custom_drawer/CustomDrawer';
import {Location} from '@src/components/elements/location/Location';
import {Localization} from '@src/components/header/top/localization/Localization';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {useStyles} from './useStyles';
import {HeaderAuthMenu} from '@src/components/header/bottom/header_auth_menu/HeaderAuthMenu';

const Bottom = (props) => {
    const {isScrollBreak, handleOpenModal, isAuth, t, avatar} = props;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleDrawerShow = (value) => () => {
        setDrawerOpen(value);
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
                                    ? <Avatar alt="Remy Sharp" src={avatar} onClick={handleOpenMenu} />
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
            </Hidden>
            <Hidden lgUp>
                <div className="translate-local">
                    <Location />
                    <Localization />
                </div>
            </Hidden>
            <CustomDrawer
                position='left'
                open={drawerOpen}
                onClose={handleDrawerShow(false)}
            />
            <HeaderAuthMenu open={open} handleClose={handleCloseMenu} />
        </div>
    );
};

export default withScrollThreshold(Bottom);
