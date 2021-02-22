import React, { FC, useState } from 'react'
import {
    Grid,
    Hidden,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core'
import { TopHeaderPropsType } from '@src/components/header/top/TopContainer'
import { Link } from '@root/i18n'
import { useRouter } from 'next/router'
import { Router } from '@root/i18n'
import { LeftDrawer } from './drawer/Drawer'
import { Localization } from '@src/components/elements/localization/Localization'
import {
    QuestionIcon,
    LocationIcon,
    SurpriseIcon,
    Logo,
    SubstractIcon, UserAvatarIcon,
} from '@src/components/elements/icons'
import { useStyles } from './useStyles'


export const Top: FC<TopHeaderPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { t, handleOpenModal } = props
    const { pathname } = useRouter()

    const onButtonClick = (url) => () => {
        Router.push(`/cabinet/${url}`)
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden smDown>
                    <Grid item md={6}>
                        <div className="location">
                            <LocationIcon />
                            <Typography variant="subtitle1">
                                {t('location')}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        container
                        alignItems="center"
                        justify="flex-end"
                        className='multiple-actions'
                        md={6}
                    >
                        <Grid item md={2}>
                            <Link href="/promotions">
                                <a>
                                    <Typography variant="subtitle1">
                                        {t('actions')}
                                    </Typography>
                                    <SurpriseIcon />
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Link href="#">
                                <a>
                                    <Typography variant="subtitle1">
                                        {t('bonus')}
                                    </Typography>
                                    <SubstractIcon />
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Link href="/help">
                                <a
                                    className={pathname === '/help' ? 'selected' : ''}
                                >
                                    <Typography variant="subtitle1">
                                        {t('help')}
                                    </Typography>
                                    <QuestionIcon />
                                </a>
                            </Link>
                        </Grid>
                        <Grid item md={2}>
                            <Localization />
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
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </IconButton>
                            </Grid>
                            <Grid className="top-header-logo">
                                <Link href="/">
                                    <a>
                                        <Logo />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid className={classes.avatarBlock}>
                                <IconButton onClick={handleOpenModal}>
                                    <UserAvatarIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </Hidden>
        </div>
    )
}
