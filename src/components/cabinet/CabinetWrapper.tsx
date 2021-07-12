import {FC, useContext} from 'react';
import {useTranslation} from "next-i18next";
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {CabinetSidebar} from './cabinet_sidebar/CabinetSidebar';
import {useStyles} from './useStyles';
import {UserCtx} from "@src/context/UserCtx";

export type CommonModalType = {
    post,
    open: boolean,
    onClose: () => void,
    handleRefresh: () => void
};

export type CabinetMenuPropsType = {
    title: string;
    headerTitle: string;
};

export const CabinetWrapper: FC<CabinetMenuPropsType> = ({children, title, headerTitle}) => {
    const {t} = useTranslation('cabinet');
    const {user}= useContext(UserCtx);


    const classes = useStyles();
    return (
        <MainLayout title={`${t('my_cabinet')} | ${title}`}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetSidebar user={user}/>
                    </Grid>
                    <Grid item xs={9} container direction='column'>
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
