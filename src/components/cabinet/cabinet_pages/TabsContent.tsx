import {FC, useEffect, useState} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetMenuPropsType, CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
// import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {useRouter} from 'next/router';
// import {ITEMS_PER_PAGE} from '@src/constants';
import {useStyles} from './useStyles';

type TabsContentPropsType = {
    tabIndex: number,
    tabsData: TabsDataType,
    handleTabChange: (e, v) => void
} & CabinetMenuPropsType;

export const TabsContent: FC<TabsContentPropsType> = (props) => {
    const {
        tabsData,
        headerTitle,
        title,
        tabIndex,
        handleTabChange
    } = props;

    const {pathname} = useRouter();
    const [firstTabData, secondTabData] = tabsData;

    const [firstTabPage, setFirstTabPage] = useState(1);
    const [secondTabPage, setSecondTabPage] = useState(1);

    // const handlePagePagination = (setPage) => (_, pageNum) => {
    //     setPage(pageNum);
    // };

    useEffect(() => {
        firstTabPage
        ? firstTabData.handleFetchByTab(firstTabPage)
        : secondTabData.handleFetchByTab(secondTabPage);
    }, [firstTabPage, secondTabPage]);

    const classes = useStyles({pathname, tabIndex});
    return (
        <div>
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
                                {`${tabsData[0].title}`}
                            </Typography>
                        }
                        value={0}
                        textColor='inherit'
                    />
                    {secondTabData && (
                        <Tab
                            label={
                                <Typography variant="subtitle1">
                                    {`${tabsData[1].title}`}
                                </Typography>
                            }
                            value={1}
                            textColor='inherit'
                            selected={true}
                        />
                    )}
                </Tabs>
                <CustomTabPanel value={tabIndex} index={0}>
                    {firstTabData.component}
                    {/*{firstTabData.total > ITEMS_PER_PAGE && (*/}
                    {/*    <CustomPagination*/}
                    {/*        currentPage={firstTabPage}*/}
                    {/*        totalItems={firstTabData.total}*/}
                    {/*        itemsPerPage={firstTabData.itemsPerPage}*/}
                    {/*        handlePagePagination={handlePagePagination(setFirstTabPage)}*/}
                    {/*    />*/}
                    {/*)}*/}
                </CustomTabPanel>
                {secondTabData && (
                    <CustomTabPanel value={tabIndex} index={1}>
                        {secondTabData.component}
                        {/*{secondTabData.total > ITEMS_PER_PAGE && (*/}
                        {/*    <CustomPagination*/}
                        {/*        currentPage={secondTabPage}*/}
                        {/*        totalItems={secondTabData.total}*/}
                        {/*        itemsPerPage={secondTabData.itemsPerPage}*/}
                        {/*        handlePagePagination={handlePagePagination(setSecondTabPage)}*/}
                        {/*    />*/}
                        {/*)}*/}
                    </CustomTabPanel>
                )}
            </CabinetWrapper>
        </div>
    );
};
