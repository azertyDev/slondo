import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Favorite} from '@src/components/cabinet/cabinet_pages/favorite/Favorite';
import {withAuthRedirect} from '@root/src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {i18n} from '@root/i18n';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {UserInfo} from '@root/interfaces/Auth';

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
    const lang = i18n.language;
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [favoritePostId, setFavoritePostId] = useState(null);
    const [modalState, setModalState] = useState('');

    const handleModalOpen = (value: string, id?: number) => {
        setOpenModal(true);
        setModalState(value);
        setFavoritePostId(id);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

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
    const fetchFavoriteData = async (type) => {
        try {
            const { favoritePosts, favoriteAuctions } = favoriteData;
            const isCreatedAuction = type === 'post';

            favoriteData.isFetch = true;
            setFavoriteData({ ...favoriteData });

            const cabFavoriteData = await userAPI.getFavorites(lang, type);

            favoriteData.isFetch = true;

            if (isCreatedAuction) {
                favoritePosts.data = cabFavoriteData.data;
                favoritePosts.total = cabFavoriteData.total;
            } else {
                favoriteAuctions.data = cabFavoriteData.data;
                favoriteAuctions.total = cabFavoriteData.total;
            }

            setFavoriteData({ ...favoriteData });
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
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
                    openModal={openModal}
                    content={modalState}
                    favoritePostId={favoritePostId}
                    setOpenModal={setOpenModal}
                />
            )
        },
        {
            id: 1,
            title: 'Аукционы',
            total: favoriteData.favoriteAuctions.total,
            component: (
                <Favorite
                    isFetch={favoriteData.isFetch}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    content={modalState}
                    favoritePostId={favoritePostId}
                    setOpenModal={setOpenModal}
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
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    )
};

export default withAuthRedirect(FavoriteContainer);