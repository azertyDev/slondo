import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Favorite} from '@src/components/cabinet/cabinet_pages/favorite/Favorite';
import {withAuthRedirect} from '@root/src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {UserInfo} from '@root/interfaces/Auth';
import {useRouter} from 'next/router';

export type FavoriteDataType = {
    id: number,
    user_id: number,
    price: number,
    title: string,
    safe_deal: number,
    exchange: number,
    number_of_views: number,
    delivery: number,
    created_at: string,
    status: string,
    favorite: boolean,
    available_days: any,
    creator: UserInfo,
    image: string,
    subscribed: boolean,
    currency: {
        id: number,
        name: string
    },
    region: {
        id: number,
        name: string
    },
    city: {
        id: number,
        name: string
    },
    district: {
        id: number,
        name: string
    }
}

type initialFavoriteStateType = {
    isFetch: boolean,
    favoritePosts: {
        total: number,
        data: FavoriteDataType[]
    },
    favoriteAuctions: {
        total: number,
        data: FavoriteDataType[]
    }
}

const FavoriteContainer: FC = () => {
    const { locale } = useRouter();
    const dispatch = useDispatch();

    const initialFavoriteState: initialFavoriteStateType = {
        isFetch: false,
        favoritePosts: {
            total: 0,
            data: []
        },
        favoriteAuctions: {
            total: 0,
            data: []
        }
    };

    const [favoriteData, setFavoriteData] = useState(initialFavoriteState);
    const [selectedFavoriteId, setSelectedFavoriteId] = useState<number>(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalState, setModalState] = useState('');
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleModalOpen = (value: string, id?: number) => {
        setOpenModal(true);
        setModalState(value);
        setSelectedFavoriteId(id);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

    const fetchFavoriteData = async (type) => {
        try {
            const { favoritePosts, favoriteAuctions } = favoriteData;
            const isPost = type === 'post';

            favoriteData.isFetch = true;
            setFavoriteData({ ...favoriteData });

            const cabFavoriteData = await userAPI.getFavorites(locale, type);

            favoriteData.isFetch = true;

            if (isPost) {
                favoritePosts.data = cabFavoriteData.data;
                favoritePosts.total = cabFavoriteData.total;
            } else {
                favoriteAuctions.data = cabFavoriteData.data;
                favoriteAuctions.total = cabFavoriteData.total;
            }

            setFavoriteData({ ...favoriteData });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleRemoveFavorite = async () => {
        try {
            await userAPI.favoriteAds(selectedFavoriteId);
            if (tabIndex === 0) {
                await fetchFavoriteData('post');
            } else {
                await fetchFavoriteData('auc');
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
        setOpenModal(false);
    };

    const tabsData = [
        {
            id: 0,
            title: 'Объявления',
            total: favoriteData.favoritePosts.total,
            component: (
                <Favorite
                    isFetch={favoriteData.isFetch}
                    list={favoriteData.favoritePosts.data}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    handleRemoveFavorite={handleRemoveFavorite}
                    openModal={openModal}
                    content={modalState}
                />
            )
        },
        {
            id: 1,
            title: 'Аукционы',
            total: favoriteData.favoriteAuctions.total,
            component: (
                <Favorite
                    handleRemoveFavorite={handleRemoveFavorite}
                    isFetch={favoriteData.isFetch}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    content={modalState}
                    list={favoriteData.favoriteAuctions.data}
                />
            )
        }
    ];

    useEffect(() => {
        fetchFavoriteData('post');
        fetchFavoriteData('auc');
    }, []);

    const title = 'Избранное';

    return (
        <TabsContent
            title={title}
            handleTabChange={handleTabChange}
            tabIndex={tabIndex}
            tabsData={tabsData}
            headerTitle={title}
        />
    )
};

export default withAuthRedirect(FavoriteContainer);