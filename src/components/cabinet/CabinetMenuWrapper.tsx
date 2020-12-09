import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {MainLayout} from "@src/components/MainLayout";
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
// styles
import {useStyles} from './useStyles';


export const CabinetMenuWrapper = ({children, title, headerTitle, t}) => {

    const classes = useStyles()
    return (
        <MainLayout title={`Мой кабинет | ${title}`}>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <CabinetSidebar t={t}/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" className="menu-title">
                                {headerTitle}
                            </Typography>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </MainLayout>
    )
}
