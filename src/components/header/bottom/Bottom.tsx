import {cloneElement, FC, useContext, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Grid,
    Popover,
    Hidden,
    Typography,
    useScrollTrigger
} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FeedbackIcon, Logo, QuestionIcon} from '@src/components/elements/icons';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {Localization} from '@src/components/header/top/localization/Localization';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {useLocation} from '@src/hooks/use_location/useLocation';
import {AuthCtx} from '@src/context';
import {INNER_URLS} from '@src/constants';
import {MainMenu} from '@src/components/header/main_menu/MainMenu';
import {useStyles} from './useStyles';

type BottomProps = {
    handleDrawerOpen: () => void;
    handlePageReload: () => void;
};

export const Bottom: FC<BottomProps> = props => {
    const {handleDrawerOpen, handlePageReload} = props;

    const {pathname, push} = useRouter();
    const {t} = useTranslation('header');
    const {
        user,
        auth: {isAuth},
        setAuthModalOpen
    } = useContext(AuthCtx);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const isScrollBreak = useScrollTrigger({
        disableHysteresis: true,
        threshold: 53
    });

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAuthModalOpen = () => {
        setAuthModalOpen(true);
    };

    const pushUrl = url => async () => {
        if (isAuth) {
            await push(url);
        } else {
            setAuthModalOpen(true);
        }
    };

    const open = Boolean(anchorEl);
    const popoverId = open ? 'simple-popover' : undefined;

    const {locElement, locationModal} = useLocation({saveToCookies: true});

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <ElevationScroll {...props}>
                    <AppBar
                        elevation={0}
                        className={classes.root}
                        position={isScrollBreak ? 'fixed' : 'relative'}
                    >
                        <Container maxWidth="xl">
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent="space-between"
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
                                            <a onClick={handlePageReload}>
                                                <Logo
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </a>
                                        </Link>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        md={6}
                                        justifyContent="flex-end"
                                        className="category-menu"
                                    >
                                        <CustomButton
                                            color="primary"
                                            onClick={handleDrawerOpen}
                                            className="bottom-category-button header-button"
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
                                    <CustomButton
                                        color="primary"
                                        className="header-button create-post-btn"
                                        onClick={pushUrl(
                                            INNER_URLS.create_post
                                        )}
                                    >
                                        <Typography variant="subtitle2">
                                            {t('header:createPost')}
                                        </Typography>
                                        <AddIcon />
                                    </CustomButton>
                                </Grid>
                                <Grid
                                    item
                                    xs={1}
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {isAuth ? (
                                        <span
                                            onClick={handleClick}
                                            className="avatar"
                                        >
                                            <Avatar
                                                alt="Avatar"
                                                src={
                                                    user?.avatar ??
                                                    '/img/avatar.svg'
                                                }
                                            />
                                        </span>
                                    ) : (
                                        <CustomButton
                                            color="silver"
                                            onClick={handleAuthModalOpen}
                                            className="bottom-sign-button header-button"
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                component="p"
                                            >
                                                {t('auth_reg:signIn')}
                                            </Typography>
                                            <SignIcon />
                                        </CustomButton>
                                    )}
                                </Grid>
                            </Grid>
                        </Container>
                    </AppBar>
                </ElevationScroll>
            </Hidden>
            {/* ========================== Adaptive ======================= */}
            <Hidden lgUp>
                <Container maxWidth="xl">
                    <Grid container spacing={1}>
                        <Grid item xs={12} className="translate-local">
                            <Box width="80%">
                                {locElement}
                                {locationModal}
                            </Box>
                            <Localization />
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={1}
                            sm={7}
                            xs={12}
                            alignItems="center"
                            className="multi-actions"
                        >
                            <Grid item sm={4} md={3}>
                                <Link href="/help">
                                    <a
                                        className={
                                            pathname === '/help'
                                                ? 'selected'
                                                : ''
                                        }
                                    >
                                        <QuestionIcon />
                                        <Typography variant="subtitle1">
                                            {t('help')}
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item sm={5} md={4}>
                                <Link href="/help/feedback">
                                    <a
                                        className={
                                            pathname === '/help'
                                                ? 'selected'
                                                : ''
                                        }
                                    >
                                        <FeedbackIcon />
                                        <Typography variant="subtitle1">
                                            {t('footer:feedback')}
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>
            <Popover
                open={open}
                id={popoverId}
                anchorEl={anchorEl}
                onClose={handleClose}
                className={classes.menu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MainMenu clearAnchor={handleClose} />
            </Popover>
        </div>
    );
};

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
