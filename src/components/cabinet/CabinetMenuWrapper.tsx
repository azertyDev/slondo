import React, {FC, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from "@src/components/MainLayout";
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {useStyles} from './useStyles';
import {useRouter} from "next/router";
import Cookies from "universal-cookie";

export type CabinetMenuPropsType = {
    title: string;
    headerTitle: string;
};

export const CabinetMenuWrapper:FC<CabinetMenuPropsType> = ({children, title, headerTitle}) => {
    // const router = useRouter()
    // const pageUrl = router.route
    // const cookies = new Cookies();
    //
    //
    // // console.warn("data", router, checker)
    // useEffect(()=> {
    //     const token = cookies.get('token')
    //     const checker = typeof token === 'object' && token !== null
    //     checker ? router.push(pageUrl) : router.push('/')
    // }, [])

    const classes = useStyles()
    return (
        <MainLayout title={`Мой кабинет | ${title}`}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetSidebar/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6" className="menu-title">
                            {headerTitle}
                        </Typography>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    )
}
