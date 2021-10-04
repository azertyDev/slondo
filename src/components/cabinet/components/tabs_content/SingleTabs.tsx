import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {SingleTabType, TabsType} from '@root/interfaces/Cabinet';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CustomPagination} from "@src/components/elements/custom_pagination/CustomPagination";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {ITEMS_PER_PAGE} from "@src/constants";
import {useStyles} from './useStyles';

type TabsContentPropsType = {
    isFetch: boolean,
    tabsData: TabsType<SingleTabType>,
    fetchTabPosts: (page?: number, secondSubTab?: boolean) => void,
};

type TabPages = {
    firstPage: number,
    secondPage: number
}

export const SingleTabs: FC<TabsContentPropsType> = (props) => {
    const {
        isFetch,
        tabsData,
        fetchTabPosts
    } = props;

    const initPages = {
        firstPage: 1,
        secondPage: 1
    };

    const {query: {page}} = useRouter();
    const {firstTab, secondTab} = tabsData;

    const [pages, setPages] = useState<TabPages>(initPages);
    const {
        firstPage,
        secondPage
    } = pages;

    const [tabIndex, setTabIndex] = useState(0);
    const isFirstPage = tabIndex === 0;

    const handleTab = (_, index) => {
        setTabIndex(index);
    };

    const handlePagePagination = (_, pageNum) => {
        const pageKey = isFirstPage ? 'firstPage' : 'secondPage';
        setPages({...pages, [pageKey]: pageNum});
    };

    const getCurrPage = () => {
        return isFirstPage ? firstPage : secondPage;
    };

    const getTotalItems = () => {
        return isFirstPage ? firstTab.total : secondTab.total;
    };

    const fetchByPage = async () => {
        const page = isFirstPage ? firstPage : secondPage;
        await fetchTabPosts(page, !isFirstPage);
    };

    useEffect(() => {
        fetchByPage();
    }, [firstPage, secondPage]);

    useEffect(() => {
        fetchTabPosts(1, true);
    }, []);

    const classes = useStyles({page, tabIndex});
    return (
        <>
            <Tabs
                variant="fullWidth"
                value={tabIndex}
                onChange={handleTab}
                className={classes.cabinetTabs}
            >
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {`${firstTab.title}`}
                        </Typography>
                    }
                    value={0}
                    textColor='inherit'
                />
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {`${secondTab.title}`}
                        </Typography>
                    }
                    value={1}
                    textColor='inherit'
                />
            </Tabs>
            <CustomTabPanel value={tabIndex} index={0}>
                {isFetch
                    ? <CustomCircularProgress/>
                    : firstTab.component}
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={1}>
                {isFetch
                    ? <CustomCircularProgress/>
                    : secondTab.component}
            </CustomTabPanel>
            <CustomPagination
                currentPage={getCurrPage()}
                totalItems={getTotalItems()}
                itemsPerPage={ITEMS_PER_PAGE}
                handlePagePagination={handlePagePagination}
            />
        </>
    );
};
