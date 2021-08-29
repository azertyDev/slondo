import {FC, useContext} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {
    Grid,
    Hidden,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
    Slide,
    useScrollTrigger,
    Container,
    Avatar
} from '@material-ui/core';
import {AuthCtx} from '@src/context';
import {cookies} from '@src/helpers';
import {Localization} from './localization/Localization';
import {Logo, QuestionIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {useTranslation} from "next-i18next";
import {useLocation} from "@src/hooks/use_location/useLocation";
import {useStyles} from './useStyles';

type TopHeaderPropsType = {
    positionStatic?: boolean,
    handleDrawerOpen: () => void,
    handlePageReload: () => void
};

export const Top: FC<TopHeaderPropsType> = (props) => {
    const {
        positionStatic,
        handleDrawerOpen,
        handlePageReload
    } = props;

    const {t} = useTranslation('header');
    const {user: {avatar}, auth, setAuthModalOpen} = useContext(AuthCtx);

    const {pathname} = useRouter();
    const trigger = useScrollTrigger({threshold: 53});
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const handleAuthModalOpen = () => {
        setAuthModalOpen(true);
    };

    const {
        locElement,
        locationModal
    } = useLocation({saveToCookies: true});

    const classes = useStyles();
    return (
        <>
            <Hidden mdDown>
                <Container maxWidth="xl" className={classes.root}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item md={6}>
                            {locElement}
                            {locationModal}
                        </Grid>
                        <Grid
                            item
                            md={6}
                            container
                            alignItems="center"
                            justifyContent="flex-end"
                            className='multiple-actions'
                        >
                            <Grid item md={2}>
                                <Link href="/help">
                                    <a className={pathname === '/help' ? 'selected' : ''}>
                                        <Typography variant="subtitle1" component='p'>
                                            {t('help')}
                                        </Typography>
                                        <QuestionIcon/>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item md={2} container justifyContent='center'>
                                <Localization/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>
            {/*    Adaptive   */}
            <Hidden lgUp>
                <div className={classes.adaptive}>
                    <Slide
                        appear={false}
                        direction="down"
                        in={positionStatic || !trigger}
                    >
                        <AppBar
                            position={positionStatic ? 'static' : 'fixed'}
                            color='inherit'
                            elevation={0}
                        >
                            <Toolbar>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid>
                                        <IconButton
                                            size="small"
                                            onClick={handleDrawerOpen}
                                        >
                                            <div className="burger-menu">
                                                <CategorySortIcon/>
                                            </div>
                                        </IconButton>
                                    </Grid>
                                    <Grid className="top-header-logo">
                                        <Link href="/">
                                            <a onClick={handlePageReload}>
                                                <Logo/>
                                            </a>
                                        </Link>
                                    </Grid>
                                    {auth.isAuth
                                        ? <Link href='/cabinet/main'>
                                            <a>
                                                <CustomButton className={classes.avatarBlock}>
                                                    <Avatar alt="Avatar" src={avatar}/>
                                                </CustomButton>
                                            </a>
                                        </Link>
                                        : <CustomButton
                                            className="btn-sign-mobile"
                                            onClick={handleAuthModalOpen}
                                        >
                                            <Typography variant="subtitle2" component='p'>
                                                {t('auth_reg:signIn')}
                                            </Typography>
                                        </CustomButton>}
                                </Grid>
                            </Toolbar>
                            <Box px={isXsDown ? '10px' : '24px'} marginBottom='10px'>
                                <HeaderSearchForm/>
                            </Box>
                        </AppBar>
                    </Slide>
                </div>
            </Hidden>
        </>
    );
};
