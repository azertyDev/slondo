import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {TabsDataType} from '@root/interfaces/CabinetTabs';
import {UserInfo} from '@root/interfaces/Auth';


export type ArchivePostData = {
    id: number;
    title: string;
    safe_deal: number;
    price: string;
    number_of_views?: number;
    region: {
        id: number;
        name: string;
    };
    city: {
        id: number;
        name: string;
    };
    district?: {
        id: number;
        name: string;
    };
    currency: {
        id: number;
        name: string;
    };
    image: string;
    category?: {
        id: number;
        name: string;
        mark: string;
    };
    sub_category_id?: number;
    ads_type: string;
    created_at: string;
    delivery: number;
    exchange: number;
    accepted?: boolean;
    expected?: boolean;
    denied?: boolean;
    promote?: boolean;
    raise?: boolean;
    raiseInRape?: boolean;
    isModerated?: boolean;
    follow?: boolean;
    favorite?: boolean;
    completePurchase?: boolean;
    creator: UserInfo
};

const ArchiveContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const [tabIndex, setTabIndex] = useState(0);
    const initialState = {
        isFetch: false,
        posts: {
            total: 0,
            data: []
        },
        auctions: {
            total: 0,
            data: []
        }
    };

    const [archiveData, setArchiveData] = useState(initialState);
    const [openModal, setOpenModal] = useState(false);
    const [postId, setPostId] = useState(null);

    console.log(archiveData);

    const handleOpenModal = (postId) => () => {
        setOpenModal(true);
        postId && setPostId(postId);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchArchivePosts = async () => {
        try {
            const { posts, auctions } = archiveData;

            archiveData.isFetch = true;
            setArchiveData({ ...archiveData });

            if (tabIndex === 0) {
                const postData = await userAPI.getUserArchivePosts('post', locale);
                posts.data = postData.data;
                posts.total = postData.total;
                archiveData.isFetch = false;
            } else {
                const auctionData = await userAPI.getUserArchivePosts('auc', locale);
                auctions.data = auctionData.data;
                auctions.total = auctionData.total;
                archiveData.isFetch = false;
            }

            setArchiveData({ ...archiveData });

        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Объявления',
            total: archiveData.posts.total,
            component:
                <Archive
                    list={archiveData.posts.data}
                    isFetch={archiveData.isFetch}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        },
        {
            id: 1,
            title: 'Аукционы',
            total: archiveData.auctions.total,
            component:
                <Archive
                    list={archiveData.auctions.data}
                    isFetch={archiveData.isFetch}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        }
    ];

    useEffect(() => {
        fetchArchivePosts();
    }, []);

    const title = 'Архив';

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(ArchiveContainer);