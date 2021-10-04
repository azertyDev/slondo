import {FC, useContext, useState} from 'react';
import {SingleTabs} from '@src/components/cabinet/components/tabs_content/SingleTabs';
import {InitPostsType, SingleTabType, TabsType} from '@root/interfaces/Cabinet';
import {userAPI} from '@src/api/api';
import {Box} from '@material-ui/core';
import {ErrorCtx} from '@src/context';
import {useTranslation} from 'next-i18next';
import {useModal} from '@src/hooks/useModal';
import {unstable_batchedUpdates} from "react-dom";
import {initCardData} from '@src/common_data/common';
import {CardDataType} from '@root/interfaces/CardData';
import {CabinetCardWrapper} from '@src/components/cabinet/components/cabinet_card/cabinet_card_wrapper/CabinetCardWrapper';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';

export const FavoriteContainer: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialFavoriteState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [favoritePostData, setFavoritePostData] = useState(initialFavoriteState);
    const [favoriteAucData, setFavoriteAucData] = useState(initialFavoriteState);
    const [postId, setPostId] = useState<number>(null);
    const [selectedPost, setSelectedPost] = useState<CardDataType>(initCardData);

    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleOpenModal = (id: number) => () => {
        handleModalOpen();
        setPostId(id);
    };
    const fetchFavoriteData = async (page = 1, secondTab = false) => {
        try {
            const type = secondTab ? 'auc' : 'post';
            setIsFetch(true);
            const {data, total} = await userAPI.getFavorites(type, page);

            unstable_batchedUpdates(() => {
                type === 'post'
                    ? setFavoritePostData({data, total})
                    : setFavoriteAucData({data, total});
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };
    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchFavoriteData();
            fetchFavoriteData(1, true);
        });
    };
    const handleRemoveFavorite = async () => {
        try {
            await userAPI.favoriteAds(postId);
            handleRefresh();
        } catch (e) {
            setErrorMsg(e.message);
        }
        handleModalClose();
    };
    const handleDetailedModal = (post: CardDataType) => () => {
        openDetailedModal();
        setSelectedPost(post);
    };

    const getFavoritePosts = (posts) => {
        return (
            <>
                {posts.map(data =>
                    <Box mb={3} key={data.id}>
                        <CabinetCardWrapper
                            cardData={data}
                            handleOpenModal={handleOpenModal}
                            handleDetailedOpen={handleDetailedModal(data)}
                        />
                    </Box>
                )}
            </>
        );
    };

    const tabsData: TabsType<SingleTabType> = {
        firstTab: {
            id: 0,
            title: t('posts'),
            total: favoritePostData.total,
            component: getFavoritePosts(favoritePostData.data),
            emptyPage: <EmptyPage label={t('cabinet:empty.favorite.title')}/>
        },
        secondTab: {
            id: 1,
            total: favoriteAucData.total,
            title: t('auctions'),
            component: getFavoritePosts(favoriteAucData.data),
            emptyPage: <EmptyPage label={t('cabinet:empty.favorite.title')}/>
        }
    };

    return (
        <>
            <SingleTabs
                isFetch={isFetch}
                tabsData={tabsData}
                fetchTabPosts={fetchFavoriteData}
            />
            <DetailedModal
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={handleRefresh}
            />
            <ConfirmModal
                open={modalOpen}
                handleClose={handleModalClose}
                title={t('common:perform')}
                confirmTxt={t('common:yes')}
                cancelTxt={t('common:no')}
                handleConfirm={handleRemoveFavorite}
            />
        </>
    );
};