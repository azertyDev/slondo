import React, {FC, useState} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {
    CabinetMenuPropsType,
    CabinetMenuWrapper,
} from '@src/components/cabinet/CabinetMenuWrapper';
import {TabsDataType} from '@src/components/cabinet/cabinet_pages/archive/ArchiveContainer';
import {useStyles} from './useStyles';


export const TabsContent: FC<CabinetMenuPropsType & { tabsData: TabsDataType[] }> = ({tabsData, headerTitle, title}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={headerTitle} title={title}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    className={classes.cabinetTabs}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#AD66D5',
                        },
                    }}
                >
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                {`${tabsData[0].title} (${tabsData[0].count})`}
                            </Typography>
                        }
                        value={0}
                    />
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                {`${tabsData[1].title} (${tabsData[1].count})`}
                            </Typography>
                        }
                        value={1}
                    />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                    {tabsData[0].component}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {tabsData[1].component}
                </CustomTabPanel>
            </CabinetMenuWrapper>
        </div>
    );
};
