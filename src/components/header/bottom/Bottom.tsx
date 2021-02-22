import React from 'react'
import { AppBar, Container, Grid, Hidden, Typography } from '@material-ui/core'
import { ButtonComponent } from '@src/components/elements/button/Button'
import { SearchForm } from '@src/components/elements/search_form/SearchForm'
import { withScrollThreshold } from '@src/components/hoc/withScrollThreshold'
import { Link } from '@root/i18n'
import { Logo } from '@src/components/elements/icons'
import { AddIcon } from '@src/components/elements/icons/AddIcon'
import { CategorySortIcon } from '@src/components/elements/icons/CategorySortIcon'
import { SignIcon } from '@src/components/elements/icons/SignIcon'
import { useStyles } from './useStyles'
import { CustomDrawer } from '@src/components/elements/drawer/Drawer'


const Bottom = (props) => {
    const { isScrollBreak, handleOpenModal, isAuth, t } = props
    const [drawerPosition, setDrawerPosition] = React.useState({
        left: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setDrawerPosition({ ...drawerPosition, [anchor]: open })
    }

    const classes = useStyles(props)
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
                                alignItems="center"
                                spacing={1}
                            >
                                <Grid
                                    container
                                    item
                                    md={6}
                                    className="bottom-logo"
                                >
                                    <Link href="/">
                                        <a>
                                            <Logo />
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
                                    <ButtonComponent
                                        color="primary"
                                        className="bottom-category-button header-button"
                                        onClick={toggleDrawer('left', true)}
                                    >
                                        <Typography variant="subtitle2">
                                            {t('header:categories')}
                                        </Typography>
                                        <CategorySortIcon />
                                    </ButtonComponent>
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
                                    <SearchForm />
                                </Grid>
                            </Grid>
                            <Grid item md={2}>
                                <Link href="/create/type">
                                    <a className='create-ancmnt-link'>
                                        <ButtonComponent
                                            color="primary"
                                            className="header-button"
                                        >
                                            <Typography variant="subtitle2">
                                                {t('header:createPost')}
                                            </Typography>
                                            <AddIcon />
                                        </ButtonComponent>
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
                                <ButtonComponent
                                    className="bottom-sign-button header-button"
                                    onClick={handleOpenModal}
                                >
                                    <Typography variant="subtitle2">
                                        {t(`auth_reg:${isAuth ? 'signOut' : 'signIn'}`)}
                                    </Typography>
                                    <SignIcon />
                                </ButtonComponent>
                            </Grid>
                        </Grid>
                    </Container>
                </AppBar>
            </Hidden>
            <Hidden lgUp>
                <div className="select-local">
                    <SearchForm />
                </div>
            </Hidden>
            <CustomDrawer toggleDrawer={toggleDrawer} position={drawerPosition} />
        </div>
    )
}

export default withScrollThreshold(Bottom)
