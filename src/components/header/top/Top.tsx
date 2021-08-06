import {FC, useContext, useState} from 'react';
import Link from 'next/link';
import {WithT} from 'i18next';
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
import {LeftDrawer} from './drawer/Drawer';
import {Localization} from './localization/Localization';
import {
    Logo,
    QuestionIcon,
    SurpriseIcon
} from '@src/components/elements/icons';
import {Location} from '@src/components/elements/location/Location';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {HeaderSearchForm} from '@src/components/header/bottom/header_search_form/HeaderSearchForm';
import {cookieOpts, cookies} from '@src/helpers';
import {useStyles} from './useStyles';
import {CategorySortIcon} from '@src/components/elements/icons/CategorySortIcon';
import {UserCtx} from '@src/context';

type TopHeaderPropsType = {
    isAuth: boolean,
    handleOpenModal: () => void;
} & WithT;

export const Top: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal, isAuth} = props;
    const {user: {avatar}} = useContext(UserCtx);

    const userLocation = cookies.get('user_location');
    const trigger = useScrollTrigger({
        threshold: 53
    });
    const {pathname} = useRouter();
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectLocation = ({region, city}) => {
        if (region) {
            const userLocation: any = {region};
            if (city) userLocation.city = city;
            cookies.set('user_location', userLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
    };

    const classes = useStyles();
    return (
        <>
            <Hidden mdDown>
                <Container maxWidth="xl" className={classes.root}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item md={6}>
                            <Location
                                userLocation={userLocation}
                                handleSelectLocation={handleSelectLocation}
                            />
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
                                <Link href="/help">
                                    <a className={pathname === '/help' ? 'selected' : ''}>
                                        <Typography variant="subtitle1">
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
                        in={!trigger}
                    >
                        <AppBar
                            position='fixed'
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
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <div className="burger-menu">
                                                <CategorySortIcon/>
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
                                        ? <CustomButton className={classes.avatarBlock}>
                                            <Avatar alt="Avatar" src={avatar}/>
                                        </CustomButton>
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
                            <Box px={isXsDown ? '16px' : '24px'} marginBottom='10px'>
                                <HeaderSearchForm/>
                            </Box>
                        </AppBar>
                    </Slide>
                    <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </Hidden>
        </>
    );
};
