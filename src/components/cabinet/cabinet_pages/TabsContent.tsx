import React, {FC, useState} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetMenuPropsType, CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {TabsDataType} from '@src/components/cabinet/cabinet_pages/archive/ArchiveContainer';
import {useStyles} from './useStyles';


export const TabsContent: FC<CabinetMenuPropsType & { tabsData: TabsDataType[] }> = (
    {tabsData, headerTitle, title}
) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={headerTitle} title={title}>
                {
                    tabsData.map(tab => {
                        return <React.Fragment key={tab.id}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                className={classes.cabinetTabs}
                                TabIndicatorProps={{ style: { backgroundColor: '#AD66D5' } }}
                            >
                                <Tab
                                    key={tab.id}
                                    label={
                                        <Typography variant="subtitle1">
                                            {`${tab.title} (${tab.count})`}
                                        </Typography>
                                    }
                                    value={tab.id}
                                />
                            </Tabs>
                            <CustomTabPanel value={value} index={tab.id}>
                                {tab.component}
                            </CustomTabPanel>
                        </React.Fragment>

                    })
                }

            </CabinetWrapper>
        </div>
    );
};
