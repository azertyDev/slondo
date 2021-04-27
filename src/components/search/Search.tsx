import React, {FC, ReactNode} from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';


type SearchPropsType = {
    searchForm: ReactNode,
    searchResult: ReactNode
} & WithT;

export const Search: FC<SearchPropsType> = (props) => {
    const {
        t,
        searchForm,
        searchResult
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography variant='h5'>{t('common:youLookingFor')}</Typography>
                    {searchForm}
                    {searchResult}
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={3}>
                        <HomeSidebar/>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
};