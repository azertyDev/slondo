import {FC} from 'react';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {
    UserProfileWrapper,
    UserProfileWrapperPropsType
} from '@src/components/user_profile/profile_wrapper/UserProfileWrapper';
import {useStyles} from './useStyles';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';

type TabsContentPropsType = {
    tabIndex: number,
    tabsData: TabsDataType,
    handleTabChange: (e, v) => void,
} & UserProfileWrapperPropsType & WithT ;

export const ProfileTabsContent: FC<TabsContentPropsType> = (props) => {
    const {t, tabsData, headerTitle, title, tabIndex, handleTabChange, user} = props;
    const {pathname} = useRouter();

    const classes = useStyles({pathname, tabIndex});
    return (
        <div className={classes.root}>
            <UserProfileWrapper t={t} headerTitle={headerTitle} title={title} user={user}>
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
            </UserProfileWrapper>
        </div>
    );
};
