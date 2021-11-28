import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {unstable_batchedUpdates} from 'react-dom';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {DoubleTabType, TabsType} from '@root/interfaces/Cabinet';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {InnerTabs} from '@src/components/cabinet/components/inner_tabs/InnerTabs';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useStyles} from './useStyles';

type TabsContentPropsType = {
    isFetch: boolean;
    tabsData: TabsType<DoubleTabType>;
    fetchFirstTabPosts: (page?: number, secondSubTab?: boolean) => void;
    fetchSecondTabPosts?: (page?: number, secondSubTab?: boolean) => void;
    handleSafeDeal?: (post, perform?: boolean) => () => void;
    handleDetailedOpen?: (v) => () => void;
    handleSettingsOpen?: (v) => () => void;
    handleNotificationsOpen?: (v) => () => void;
    handlePromoteOpen?: (post) => () => void;
};

type TabPages = {
    firstPage: number;
    secondPage: number;
    thirdPage: number;
    fourthPage: number;
};

export const DoubleTabs: FC<TabsContentPropsType> = props => {
    const {
        isFetch,
        tabsData,
        fetchFirstTabPosts,
        fetchSecondTabPosts,
        handleDetailedOpen,
        handleSettingsOpen,
        handleNotificationsOpen,
        handlePromoteOpen,
        handleSafeDeal
    } = props;

    const initPages = {
        firstPage: 1,
        secondPage: 1,
        thirdPage: 1,
        fourthPage: 1
    };

    const {
        query: {page}
    } = useRouter();
    const {firstTab, secondTab} = tabsData;

    const [pages, setPages] = useState<TabPages>(initPages);
    const {firstPage, secondPage, thirdPage, fourthPage} = pages;

    const [tabIndex, setTabIndex] = useState(0);
    const [innerTabIndex, setInnerTabIndex] = useState(0);
    const isFirstInnerTab = innerTabIndex === 0;

    const handleTab =
        (subTab = false) =>
        (_, index) => {
            subTab ? setInnerTabIndex(index) : setTabIndex(index);
        };

    const handlePagePagination = (_, pageNum) => {
        let pageKey = '';
        switch (tabIndex) {
            case 0:
                pageKey = isFirstInnerTab ? 'firstPage' : 'secondPage';
                break;
            case 1:
                pageKey = isFirstInnerTab ? 'thirdPage' : 'fourthPage';
        }
        setPages({...pages, [pageKey]: pageNum});
    };

    const getCurrPage = () => {
        switch (tabIndex) {
            case 0:
                return isFirstInnerTab ? firstPage : secondPage;
            case 1:
                return isFirstInnerTab ? thirdPage : firstPage;
        }
    };

    const getTotalItems = () => {
        switch (tabIndex) {
            case 0:
                return isFirstInnerTab
                    ? firstTab.innerTabsData.innerFirstTab.total
                    : firstTab.innerTabsData.innerSecondTab.total;
            case 1:
                return isFirstInnerTab
                    ? secondTab.innerTabsData.innerFirstTab.total
                    : secondTab.innerTabsData.innerSecondTab.total;
        }
    };

    const fetchByPage = async () => {
        switch (tabIndex) {
            case 0:
                await fetchFirstTabPosts(
                    isFirstInnerTab ? firstPage : secondPage,
                    !isFirstInnerTab
                );
                break;
            case 1:
                await fetchSecondTabPosts(
                    isFirstInnerTab ? thirdPage : fourthPage,
                    !isFirstInnerTab
                );
        }
    };

    useEffect(() => {
        fetchByPage();
    }, [firstPage, secondPage, thirdPage, fourthPage]);

    useEffect(() => {
        unstable_batchedUpdates(() => {
            fetchFirstTabPosts(1, true);
            if (fetchSecondTabPosts) {
                fetchSecondTabPosts();
                fetchSecondTabPosts(1, true);
            }
        });
    }, []);

    const classes = useStyles({page, tabIndex});
    return (
        <>
            <Tabs
                variant="fullWidth"
                value={tabIndex}
                onChange={handleTab()}
                className={classes.cabinetTabs}
            >
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {`${firstTab.title}`}
                        </Typography>
                    }
                    value={0}
                    textColor="inherit"
                />
                {secondTab && (
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                {`${secondTab.title}`}
                            </Typography>
                        }
                        value={1}
                        textColor="inherit"
                    />
                )}
            </Tabs>
            <CustomTabPanel value={tabIndex} index={0}>
                <InnerTabs
                    isFetch={isFetch}
                    handleSafeDeal={handleSafeDeal}
                    onChange={handleTab(true)}
                    fstTabData={{
                        posts: firstTab.innerTabsData.innerFirstTab.posts,
                        emptyPage:
                            firstTab.innerTabsData.innerFirstTab.emptyPage
                    }}
                    secTabData={{
                        posts: firstTab.innerTabsData.innerSecondTab.posts,
                        emptyPage:
                            firstTab.innerTabsData.innerSecondTab.emptyPage
                    }}
                    childTabValue={innerTabIndex}
                    handlePromoteOpen={handlePromoteOpen}
                    handleDetailedOpen={handleDetailedOpen}
                    handleSettingsOpen={handleSettingsOpen}
                    handleNotificationsOpen={handleNotificationsOpen}
                />
            </CustomTabPanel>
            {secondTab && (
                <CustomTabPanel value={tabIndex} index={1}>
                    <InnerTabs
                        isFetch={isFetch}
                        onChange={handleTab(true)}
                        fstTabData={{
                            posts: secondTab.innerTabsData.innerFirstTab.posts,
                            emptyPage:
                                secondTab.innerTabsData.innerFirstTab.emptyPage
                        }}
                        secTabData={{
                            posts: secondTab.innerTabsData.innerSecondTab.posts,
                            emptyPage:
                                secondTab.innerTabsData.innerSecondTab.emptyPage
                        }}
                        childTabValue={innerTabIndex}
                        handleDetailedOpen={handleDetailedOpen}
                        handleSettingsOpen={handleSettingsOpen}
                        handleNotificationsOpen={handleNotificationsOpen}
                    />
                </CustomTabPanel>
            )}
            <CustomPagination
                currentPage={getCurrPage()}
                totalItems={getTotalItems()}
                itemsPerPage={ITEMS_PER_PAGE}
                handlePagePagination={handlePagePagination}
            />
        </>
    );
};
