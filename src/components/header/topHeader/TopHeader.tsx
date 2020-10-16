import React, {useState} from 'react'
import {Link} from '../../../../i18n'
import {
    Grid,
    Hidden,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core'
import {
    Logo,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Whatsapp,
    Telegram,
    HelpIcon,
    StoreIcon,
    BusinessIcon,
    PlIcon,
    Avatar
} from '../../elements/icons'
import {Localization} from '../../elements/localization/Localization'
import {LeftDrawer} from './drawer/Drawer'
import {useStyles} from './useStyles'


export const TopHeader = (props) => {
    const {t, handleOpenModal} = props;
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden smDown>
                    <Grid item md={4}>
                        <div className="location">
                            <Typography variant="subtitle1">
                                {t('location')}:
                            </Typography>
                            <img src={PlIcon} className="pl-icon" alt='location'/>
                            <Typography
                                variant="subtitle1"
                                className="select-region"
                            >
                                {t('region')}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        md={4}
                        className="social-icons"
                    >
                        <a href="#">
                            <img src={Facebook} alt='facebook'/>
                        </a>
                        <a href="#">
                            <img src={Instagram} alt='instagram'/>
                        </a>
                        <a href="#">
                            <img src={Youtube} alt='youtube'/>
                        </a>
                        <a href="#">
                            <img src={Twitter} alt='twitter'/>
                        </a>
                        <a href="#">
                            <img src={Whatsapp} alt='whatsapp'/>
                        </a>
                        <a href="#">
                            <img src={Telegram} alt='telegram'/>
                        </a>
                    </Grid>
                    <Grid
                        item
                        container
                        justify="space-between"
                        alignItems="center"
                        className="multiple"
                        md={4}
                    >
                        <Grid item>
                            <div className="multiple-content">
                                <a href="#">
                                    <img src={HelpIcon} alt='help'/>
                                    <Typography variant="subtitle1">
                                        {t('help')}
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="multiple-content">
                                <a href="#">
                                    <img src={StoreIcon} alt='store'/>
                                    <Typography variant="subtitle1">
                                        {t('shops')}
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="multiple-content">
                                <a href="#">
                                    <img src={BusinessIcon} alt='business'/>
                                    <Typography variant="subtitle1">
                                        {t('forBusiness')}
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <Localization/>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            {/*    Adaptive   */}
            <Hidden mdUp>
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
                                        <img src={Logo} alt="logo"/>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid className={classes.avatarBlock}>
                                <IconButton onClick={handleOpenModal}>
                                    <img src={Avatar} alt='avatar'/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Hidden>
        </div>
    )
}
