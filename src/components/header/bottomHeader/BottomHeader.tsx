import React from "react";
import {AppBar, Container, Grid, Hidden, Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {SearchForm} from "@src/components/elements/search_form/SearchForm";
import {withScrollThreshold} from "@src/components/hoc/withScrollThreshold";
import {Link} from '@root/i18n';
import {Logo} from '@src/components/elements/icons';
import {AddIcon} from "@src/components/elements/icons/AddIcon";
import {CategorySortIcon} from "@src/components/elements/icons/CategorySortIcon";
import {SignIcon} from "@src/components/elements/icons/SignIcon";
import {useStyles} from "./useStyles";


const BottomHeader = (props) => {
    const {isScrollBreak, handleOpenModal, isAuth, t} = props;

    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <AppBar
                    color={"inherit"}
                    elevation={isScrollBreak ? 1 : 0}
                    position={isScrollBreak ? "fixed" : "absolute"}
                >
                    <Container maxWidth='lg'>
                        <Grid container justify="space-between" alignItems="center" spacing={1}>
                            <Grid container item xs={3} alignItems="center">
                                <Grid container item md={7} lg={6} className="bottom-logo">
                                    <Link href="/">
                                        <a>
                                            <Logo/>
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid item container md={5} lg={6} justify="center" className="category-menu">
                                    <ButtonComponent color="primary" className="bottom-category-button header-button">
                                        <Typography variant="subtitle2">{t('categories')}</Typography>
                                        <CategorySortIcon/>
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
                                    <SearchForm t={t}/>
                                </Grid>
                            </Grid>
                            <Grid item md={2}>
                                <Link href="/announcement/create">
                                    <a className='create-ancmnt-link'>
                                        <ButtonComponent
                                            color='primary'
                                            className='header-button'
                                        >
                                            <Typography variant="subtitle2">
                                                {t('common:createAd')}
                                            </Typography>
                                            <AddIcon/>
                                        </ButtonComponent>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item container justify="center" alignItems="center" xs={1}>
                                <ButtonComponent className="bottom-sign-button header-button" onClick={handleOpenModal}>
                                    <Typography
                                        variant="subtitle2"
                                    >{t(`common:${isAuth ? 'signOut' : 'signIn'}`)}</Typography>
                                    <SignIcon/>
                                </ButtonComponent>
                            </Grid>
                        </Grid>
                    </Container>
                </AppBar>
            </Hidden>
            <Hidden mdUp>
                <div className="select-local">
                    <SearchForm t={t}/>
                </div>
            </Hidden>
        </div>
    )
};

export default withScrollThreshold(BottomHeader);