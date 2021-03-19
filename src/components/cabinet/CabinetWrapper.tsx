import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {useStyles} from './useStyles';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';

export type CabinetMenuPropsType = {
    title: string;
    headerTitle: string;
};

export const CabinetWrapper: FC<CabinetMenuPropsType> = ({ children, title, headerTitle }) => {
    const { user } = useSelector((store: RootState) => store.auth);
    const classes = useStyles();
    return (
        <MainLayout title={`Мой кабинет | ${title}`}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetSidebar user={user} />
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
};
