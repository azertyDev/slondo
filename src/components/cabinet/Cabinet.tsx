import React, { useState } from 'react';
import { Container, Grid, Typography, Tabs, Paper } from '@material-ui/core';
import { CabinetMenu } from './cabinetMenu/CabinetMenu';
import { BreadcrumbsComponent } from '../elements/breadcrumbs/Breadcrumbs';
import { CustomTab } from '../elements/custom_tab/CustomTab';
import { CabinetTabItem } from './card/CabinetTabItem';
import { Link } from '../../../i18n';

// icons
import { FavoriteIcon } from './../elements/icons/FavoriteIcon';
import { SettingsIcon } from '../elements/icons/SettingsIcon';
import { LocationIcon } from '../elements/icons/LocationIcon';

// styles
import { useStyles } from './useStyles';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    );
};

export const Cabinet = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CabinetMenu {...props} />
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                            >
                                <CustomTab
                                    label={
                                        <Typography variant="subtitle1">
                                            Объявления (2)
                                        </Typography>
                                    }
                                    id={0}
                                />
                                <CustomTab
                                    label={
                                        <Typography variant="subtitle1">
                                            Торги (2)
                                        </Typography>
                                    }
                                    id={1}
                                />
                                <CustomTab
                                    label={
                                        <Typography variant="subtitle1">
                                            продвинутые торги
                                        </Typography>
                                    }
                                    id={2}
                                />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <CabinetTabItem/>
                            </TabPanel>
                            <TabPanel value={value} index={1}></TabPanel>
                            <TabPanel value={value} index={1}></TabPanel>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
