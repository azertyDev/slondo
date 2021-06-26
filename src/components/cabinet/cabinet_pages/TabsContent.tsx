import {FC} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetMenuPropsType, CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

type TabsContentPropsType = {
    tabIndex: number,
    tabsData: TabsDataType,
    handleTabChange: (e, v) => void
} & CabinetMenuPropsType;

export const TabsContent: FC<TabsContentPropsType> = (props) => {
    const {tabsData, headerTitle, title, tabIndex, handleTabChange} = props;
    const {pathname} = useRouter();

    const classes = useStyles({pathname, tabIndex});
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={headerTitle} title={title}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    className={classes.cabinetTabs}
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
                    {tabsData[1] && (
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
                    )}
                </Tabs>
                <CustomTabPanel value={tabIndex} index={0}>
                    {tabsData[0].component}
                </CustomTabPanel>
                {tabsData[1] && (
                    <CustomTabPanel value={tabIndex} index={1}>
                        {tabsData[1].component}
                    </CustomTabPanel>
                )}
            </CabinetWrapper>
        </div>
    );
};
