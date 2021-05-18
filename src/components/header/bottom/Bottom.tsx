import React, {useState} from 'react';
import Link from 'next/link';
import {AppBar, Avatar, Container, Grid, Hidden, IconButton, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SearchForm} from '@src/components/header/bottom/search_form/SearchForm';
import {withScrollThreshold} from '@src/hoc/withScrollThreshold';
import {Logo} from '@src/components/elements/icons';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {CustomDrawer} from '@src/components/header/bottom/custom_drawer/CustomDrawer';
import {useStyles} from './useStyles';
import {Location} from '@src/components/elements/location/Location';
import {Localization} from '@src/components/header/top/localization/Localization';


const Bottom = (props) => {
    const {isScrollBreak, handleOpenModal, isAuth, t, avatar} = props;
    const [drawerPosition, setDrawerPosition] = useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerPosition({...drawerPosition, [anchor]: open});
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
                                        onClick={toggleDrawer('left', true)}
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
                                    <SearchForm/>
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
                                    ? <Link href='/cabinet/posts'>
                                        <a>
                                            <Avatar alt="Remy Sharp" src={avatar}/>
                                        </a>
                                    </Link>
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
            <Hidden lgUp>
                <div className="translate-local">
                    <Location t={t}/>
                    <Localization/>
                </div>
            </Hidden>
            <CustomDrawer
                toggleDrawer={toggleDrawer}
                position={drawerPosition}
            />
        </div>
    );
};

export default withScrollThreshold(Bottom);
