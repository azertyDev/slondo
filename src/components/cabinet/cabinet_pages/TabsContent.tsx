import React, {useState} from 'react';
import {Grid, Tabs, Typography, Tab} from "@material-ui/core";
import {CustomTabPanel} from "@src/components/elements/custom_tab_panel/CustomTabPanel";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";
// styles
import {useStyles} from './useStyles';

export const TabsContent = ({tabsData, headerTitle, title, t}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={headerTitle} title={title} t={t}>
                <Grid item xs={9} className={classes.cabinetTabs}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="fullWidth"
                    >
                        <Tab
                            label={
                                <Typography variant="subtitle1">
                                    {`${tabsData[0].title} (${tabsData[0].count})`}
                                </Typography>
                            }
                            id={0}
                        />
                        <Tab
                            label={
                                <Typography variant="subtitle1">
                                    {`${tabsData[1].title} (${tabsData[1].count})`}
                                </Typography>
                            }
                            id={1}
                        />
                    </Tabs>
                </Grid>
                <CustomTabPanel value={value} index={0}>
                    {tabsData[0].component}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                     {tabsData[1].component}
                </CustomTabPanel>
            </CabinetMenuWrapper>
        </div>
    )
}