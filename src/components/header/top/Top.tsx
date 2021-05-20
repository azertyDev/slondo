import React, {FC, useState} from 'react';
import Link from 'next/link';
import {WithT} from 'i18next';
import {useRouter} from 'next/router';
import {
    Grid,
    Hidden,
    Typography,
    AppBar,
    Toolbar,
    IconButton, Box, useMediaQuery, useTheme, Slide, useScrollTrigger
} from '@material-ui/core';
import {LeftDrawer} from './drawer/Drawer';
import {Localization} from './localization/Localization';
import {
    Logo,
    QuestionIcon,
    SurpriseIcon,
    SubstractIcon,
    UserAvatarIcon
} from '@src/components/elements/icons';
import {Location} from '@src/components/elements/location/Location';
import {useStyles} from './useStyles';
import {SearchForm} from '@src/components/header/bottom/search_form/SearchForm';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';



type TopHeaderPropsType = {
    isAuth: boolean,
    handleOpenModal: () => void;
} & WithT;

export const Top: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal, isAuth} = props;

    const trigger = useScrollTrigger();

    const {pathname} = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden mdDown>
                    <Grid item md={6}>
                        <Location/>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        container
                        alignItems="center"
                        justify="flex-end"
                        className='multiple-actions'
                    >
                        <Grid item md={2}>
                            <Link href="/promotions">
                                <a>
                                    <Typography variant="subtitle1">
                                        {t('actions')}
                                    </Typography>
                                    <SurpriseIcon/>
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Link href="#">
                                <a>
                                    <Typography variant="subtitle1">
                                        {t('bonus')}
                                    </Typography>
                                    <SubstractIcon/>
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Link href="/help">
                                <a className={pathname === '/help' ? 'selected' : ''}>
                                    <Typography variant="subtitle1">
                                        {t('help')}
                                    </Typography>
                                    <QuestionIcon/>
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Localization/>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            {/*    Adaptive   */}
            <Hidden lgUp>
                <Slide
                    appear={false}
                    direction="down"
                    in={!trigger}
                >
                    <AppBar position={'fixed'} color={'inherit'} elevation={0}>
                        <Toolbar>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid>
                                    <IconButton
                                        size="small"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <div className="burger-menu">
                                            <div/>
                                            <div/>
                                            <div/>
                                        </div>
                                    </IconButton>
                                </Grid>
                                <Grid className="top-header-logo">
                                    <Link href="/">
                                        <a>
                                            <Logo/>
                                        </a>
                                    </Link>
                                </Grid>
                                {isAuth
                                    ? <Link href='/cabinet/posts'>
                                        <a>
                                            <div className={classes.avatarBlock}>
                                                <IconButton onClick={handleOpenModal}>
                                                    <UserAvatarIcon/>
                                                </IconButton>
                                            </div>
                                        </a>
                                    </Link>
                                    : <CustomButton
                                        className="btn-sign-mobile"
                                        onClick={handleOpenModal}
                                    >
                                        <Typography variant="subtitle2">
                                            {t('auth_reg:signIn')}
                                        </Typography>
                                    </CustomButton>}
                            </Grid>
                        </Toolbar>
                        <Box px={isXsDown ? '12px' : '24px'}>
                            <SearchForm/>
                        </Box>
                    </AppBar>
                </Slide>

                <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Hidden>
        </div>
    );
};
