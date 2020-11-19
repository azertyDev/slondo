import React, {useState} from 'react';
import {Grid, Typography, Tabs} from '@material-ui/core';
import {CustomTab} from '@src/components/elements/custom_tab/CustomTab';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetTabItem} from '@src/components/cabinet/card/CabinetTabItem';
import {Notification} from '@src/components/cabinet/notification/Notification';
import {Cabinet} from '@src/components/cabinet/Cabinet';

// styles
import {useStyles} from './useStyles';


export const MyAds = (props) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const classes = useStyles()
    return (
        <Cabinet title={props.title} t={props.t}>
            <Grid item xs={9}>
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
            </Grid>
            <CustomTabPanel value={value} index={0}>
                <CabinetTabItem/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Notification/>
                <Notification/>
                <Notification/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <CabinetTabItem/>
                <CabinetTabItem/>
                <CabinetTabItem/>
            </CustomTabPanel>
        </Cabinet>
    )
}
