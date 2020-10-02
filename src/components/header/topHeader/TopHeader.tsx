import React, { useState } from 'react'
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
} from '../../elements/icons'
import { Localization } from '../../elements/localization/Localization'
import { LeftDrawer } from './drawer/Drawer'
import { useStyles } from './useStyle'

export const TopHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden smDown={true}>
                    <Grid item md={4}>
                        <div className="location">
                            <Typography variant="subtitle1">
                                Местоположение:
                            </Typography>
                            <img src={PlIcon} className="pl-icon" />
                            <Typography
                                variant="subtitle1"
                                className="select-region"
                            >
                                Выберите регион
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
                            <img src={Facebook} />
                        </a>
                        <a href="#">
                            <img src={Instagram} />
                        </a>
                        <a href="#">
                            <img src={Youtube} />
                        </a>
                        <a href="#">
                            <img src={Twitter} />
                        </a>
                        <a href="#">
                            <img src={Whatsapp} />
                        </a>
                        <a href="#">
                            <img src={Telegram} />
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
                                    <img src={HelpIcon} />
                                    <Typography variant="subtitle1">
                                        Помощь
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="multiple-content">
                                <a href="#">
                                    <img src={StoreIcon} />
                                    <Typography variant="subtitle1">
                                        Магазины
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="multiple-content">
                                <a href="#">
                                    <img src={BusinessIcon} />
                                    <Typography variant="subtitle1">
                                        Для бизнеса
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                        <Grid item>
                            <Localization />
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            {/*    Adaptive   */}
            <Hidden mdUp={true}>
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
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </IconButton>
                            </Grid>
                            <Grid className="top-header-logo">
                                <a href="#">
                                    <img src={Logo} alt="Slondo logo" />
                                </a>
                            </Grid>
                            <Grid>
                                <Localization />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </Hidden>
        </div>
    )
}
