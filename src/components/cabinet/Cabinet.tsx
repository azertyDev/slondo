import React, { useState } from 'react';
import { Container, Grid, Typography, Tabs, Tab } from '@material-ui/core';
import { ListView } from '@src/components/elements/card_view/list_view/ListView';
import { Notification } from '@src/components/cabinet/notification/Notification';
import { CabinetSidebar } from '@src/components/cabinet/cabinet_sidebar/CabinetSidebar';
import { CustomTabPanel } from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import { useStyles } from './useStyles';

export const Cabinet = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3}>
                        <CabinetSidebar {...props} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6" className="menu-title">
                            Мои объявления
                        </Typography>
                        <Grid item xs={9}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                            >
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            Объявления (2)
                                        </Typography>
                                    }
                                    value={0}
                                />
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            Торги (2)
                                        </Typography>
                                    }
                                    value={1}
                                />
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            продвинутые торги
                                        </Typography>
                                    }
                                    value={2}
                                />
                            </Tabs>
                        </Grid>
                        <CustomTabPanel value={value} index={0}>
                            <ListView />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Notification />
                            <Notification />
                            <Notification />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <ListView />
                            <ListView />
                            <ListView />
                        </CustomTabPanel>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
