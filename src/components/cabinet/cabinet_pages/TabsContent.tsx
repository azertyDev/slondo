import React, {FC} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetMenuPropsType, CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {TabsDataType} from '@root/interfaces/Cabinet';

type TabsContentPropsType = {
    tabIndex: number,
    tabsData: TabsDataType,
    handleTabChange: (e, v) => void
} & CabinetMenuPropsType;

export const TabsContent: FC<TabsContentPropsType> = (props) => {
    const { tabsData, headerTitle, title, tabIndex, handleTabChange } = props;
    const { t } = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={headerTitle} title={title}>
                {
                    title === t('myPurchases')
                        ? <>
                            <Tabs
                                value={tabIndex}
                                onChange={handleTabChange}
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
                                    value={tabIndex}
                                />
                            </Tabs>
                            <CustomTabPanel value={tabIndex} index={tabIndex}>
                                <MyPurchases />
                            </CustomTabPanel>
                        </>
                        : <>
                            <Tabs
                                value={tabIndex}
                                onChange={handleTabChange}
                                variant="fullWidth"
                                className={classes.cabinetTabs}
                                indicatorColor={tabIndex === 1 ? 'primary' : 'secondary'}
                            >
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            {`${tabsData[0].title} (${tabsData[0].total})`}
                                        </Typography>
                                    }
                                    value={0}
                                    textColor='inherit'
                                />
                                <Tab
                                    label={
                                        <Typography variant="subtitle1">
                                            {`${tabsData[1].title} (${tabsData[1].total})`}
                                        </Typography>
                                    }
                                    value={1}
                                    textColor='inherit'
                                    selected={true}

                                />
                            </Tabs>
                            <CustomTabPanel value={tabIndex} index={0}>
                                {tabsData[0].component}
                            </CustomTabPanel>
                            <CustomTabPanel value={tabIndex} index={1}>
                                {tabsData[1].component}
                            </CustomTabPanel>
                        </>
                }
            </CabinetWrapper>
        </div>
    );
};
