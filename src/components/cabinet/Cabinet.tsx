import React, {useState} from 'react';
import {Container, Grid, Typography, Tabs} from '@material-ui/core';
import {CustomTab} from '../elements/custom_tab/CustomTab';
import {CabinetTabItem} from './card/CabinetTabItem';
import {Notification} from '@src/components/cabinet/notification/Notification';
import {CabinetSidebar} from '@src/components/cabinet/cabinetSidebar/CabinetSidebar';
// styles
import {useStyles} from './useStyles';


const TabPanel = (props) => {
    const {children, value, index, ...other} = props

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    )
}

export const Cabinet = ({children, title, t}) => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetSidebar t={t}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6" className="menu-title">
                            {title}
                        </Typography>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
