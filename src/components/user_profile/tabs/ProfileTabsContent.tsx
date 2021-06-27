import {FC, useEffect, useState} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {useStyles} from './useStyles';

type TabsContentPropsType = {
    tabIndex: number,
    tabsData: TabsDataType,
    handleTabChange: (e, v) => void,
};

export const ProfileTabsContent: FC<TabsContentPropsType> = (props) => {
    const {tabsData, tabIndex, handleTabChange} = props;
    const [firstTabData, secondTabData] = tabsData;

    const [firstTabPage, setFirstTabPage] = useState(1);
    const [secondTabPage, setSecondTabPage] = useState(1);

    const handlePagePagination = (setPage) => (_, pageNum) => {
        setPage(pageNum);
    };

    useEffect(() => {
        firstTabPage
        ? firstTabData.handleFetchByTab(firstTabPage)
        : secondTabData.handleFetchByTab(secondTabPage);
    }, [firstTabPage, secondTabPage]);

    const classes = useStyles({tabIndex});
    return (
        <div className={classes.root}>
            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                variant="fullWidth"
                className={classes.cabinetTabs}
            >
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {`${firstTabData.title} (${firstTabData.total})`}
                        </Typography>
                    }
                    value={0}
                    textColor='inherit'
                />
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {`${secondTabData.title} (${secondTabData.total})`}
                        </Typography>
                    }
                    value={1}
                    textColor='inherit'
                    selected={true}
                />
            </Tabs>
            <CustomTabPanel value={tabIndex} index={0}>
                {firstTabData.component}
                <CustomPagination
                    currentPage={firstTabPage}
                    totalItems={firstTabData.total}
                    itemsPerPage={firstTabData.itemsPerPage}
                    handlePagePagination={handlePagePagination(setFirstTabPage)}
                />
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={1}>
                {secondTabData.component}
                <CustomPagination
                    currentPage={secondTabPage}
                    totalItems={secondTabData.total}
                    itemsPerPage={secondTabData.itemsPerPage}
                    handlePagePagination={handlePagePagination(setSecondTabPage)}
                />
            </CustomTabPanel>
        </div>
    );
};
