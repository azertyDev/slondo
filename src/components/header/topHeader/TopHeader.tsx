import React, {FC, useState} from 'react';
import {
    Grid,
    Hidden,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import {Link} from '@root/i18n';
import {useStyles} from './useStyles';
import {LeftDrawer} from './drawer/Drawer';
import {Logo, UserAvatar} from '@src/components/elements/icons';
import {Localization} from '@src/components/elements/localization/Localization';
import {QuestionIcon, LocationIcon, BonusIcon} from "@src/components/elements/icons";
import {TopHeaderPropsType} from "@src/components/header/topHeader/TopHeaderContainer";


export const TopHeader: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal} = props;
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Hidden smDown>
                    <Grid item md={6}>
                        <div className="location">
                            <LocationIcon/>
                            <Typography variant="subtitle1">
                                {t('location')}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        container
                        alignItems="center"
                        justify='flex-end'
                        className="multiple"
                        md={6}
                    >
                        <Grid item>
                            <div className="multiple-content">
                                <Link href='#'>
                                    <a>
                                        <Typography variant="subtitle1">
                                            {t('bonus')}
                                        </Typography>
                                        <BonusIcon/>
                                    </a>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="multiple-content">
                                <Link href='#'>
                                    <a>
                                        <Typography variant="subtitle1">
                                            {t('help')}
                                        </Typography>
                                        <QuestionIcon/>
                                    </a>
                                </Link>
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
                                        <Logo/>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid className={classes.avatarBlock}>
                                <IconButton onClick={handleOpenModal}>
                                    <img src={UserAvatar} alt='avatar'/>
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
