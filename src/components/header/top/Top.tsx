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
    IconButton
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


type TopHeaderPropsType = {
    handleOpenModal: () => void;
} & WithT;

export const Top: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal} = props;

    const {pathname} = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden mdDown>
                    <Grid item md={6}>
                        <Location t={t}/>
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
                            <Grid className={classes.avatarBlock}>
                                <IconButton onClick={handleOpenModal}>
                                    <UserAvatarIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <div className="search-adaptive-input">
                        <SearchForm/>
                    </div>
                </AppBar>
                <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Hidden>
        </div>
    );
};
