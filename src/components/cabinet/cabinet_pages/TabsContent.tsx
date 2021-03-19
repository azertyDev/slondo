import React, {FC, useState} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetMenuPropsType, CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {TabsDataType} from '@src/components/cabinet/cabinet_pages/archive/ArchiveContainer';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


export const TabsContent: FC<CabinetMenuPropsType & { tabsData: TabsDataType }> = (
    { tabsData, headerTitle, title }
) => {
    const { t } = useTranslation('cabinet');
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={headerTitle} title={title}>
                {
                    title === t('myPurchases')
                        ? <>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                className={classes.cabinetTabs}
                                indicatorColor='secondary'
                            >
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            Безопасная покупка
                                        </Typography>
                                    }
                                    value={value}
                                />
                            </Tabs>
                            <CustomTabPanel value={value} index={value}>
                                <MyPurchases />
                            </CustomTabPanel>
                        </>
                        : <>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                className={classes.cabinetTabs}
                                indicatorColor={value === 1 ? 'primary' : 'secondary'}
                            >
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            {`${tabsData[0].title} (${tabsData[0].total})`}
                                        </Typography>
                                    }
                                    value={0}
                                    textColor='secondary'
                                />
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            {`${tabsData[1].title} (${tabsData[1].total})`}
                                        </Typography>
                                    }
                                    value={1}
                                    textColor='primary'
                                    selected={true}
                                />
                            </Tabs>
                            <CustomTabPanel value={value} index={0}>
                                {tabsData[0].component}
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                {tabsData[1].component}
                            </CustomTabPanel>
                        </>
                }
            </CabinetWrapper>
        </div>
    );
};
