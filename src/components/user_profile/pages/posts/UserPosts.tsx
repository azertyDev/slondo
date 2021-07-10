import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {InitialCabinetCardState} from '@root/interfaces/Cabinet';
import {CardView} from '@src/components/elements/card/CardView';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
// import {ProfileTabsContent} from '@src/components/user_profile/tabs/ProfileTabsContent';
import {CircularProgress} from '@material-ui/core';
import {ErrorCtx} from "@src/context";

export const UserPosts: FC<WithT> = ({t}) => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const {user_id} = useRouter().query;

    const initialUserPostsState: InitialCabinetCardState = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [postData, setPostData] = useState(initialUserPostsState);
    const [aucData, setAucData] = useState(initialUserPostsState);

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchUserPosts = async (post_type) => {
        try {
            const isPost = post_type === 'post';
            setIsFetch(true);
            if (isPost) {
                const {data, total} = await userAPI.getUserPosts(user_id, post_type);
                setPostData({data, total});
            } else {
                const {data, total} = await userAPI.getUserPosts(user_id, post_type);
                setAucData({data, total});
            }
            setIsFetch(false);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchUserPosts('post');
        fetchUserPosts('auc');
    }, []);

    const userPostCards = (
        isFetch
        ? <CircularProgress color="secondary"/>
        : <CardView
            data={postData.data}
            isFetch={isFetch}
            listMode={false}
        />
    );
    const userAucCards = (
        isFetch
        ? <CircularProgress color="primary"/>
        : <CardView
            data={aucData.data}
            isFetch={isFetch}
            listMode={false}
        />
    );

    // const tabsData: TabsDataType = [
    //     {
    //         id: 0,
    //         title: t('main:posts'),
    //         total: postData.myPosts.total,
    //         component: <div>post</div>
    //     },
    //     {
    //         id: 1,
    //         title: t('main:auctions'),
    //         total: aucData.myPosts.total,
    //         component: <div>auc</div>
    //     }
    // ];

    return (
        <div>Posts</div>
        // <ProfileTabsContent
        //     tabIndex={tabIndex}
        //     handleTabChange={handleTabChange}
        //     tabsData={tabsData}
        // />
    );
};