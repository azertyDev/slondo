import React, {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {userAPI} from '@src/api/api';
import {Box, CircularProgress} from '@material-ui/core';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet';
import {useTranslation} from 'next-i18next';
import {CabinetCardWrapper} from '@src/components/cabinet/components/cabinet_card_wrapper/CabinetCardWrapper';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostModalContainer} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer';
import {CardDataType} from '@root/interfaces/CardData';
import {ErrorCtx} from '@src/context';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {initCardData} from '@src/common_data/common';
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
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState<CardDataType>(initCardData);

    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleOpenModal = (id: number) => () => {
        handleModalOpen();
        setPostId(id);
    };
    const fetchFavoriteData = async (type) => {
        try {
            const isPost = type === 'post';
            setIsFetch(true);
            if (isPost) {
                setFavoritePostData(favoritePostData);
                const {data, total} = await userAPI.getFavorites({type});
                setFavoritePostData({data, total});
            } else {
                setFavoriteAucData(favoriteAucData);
                const {data, total} = await userAPI.getFavorites({type});
                setFavoriteAucData({data, total});
            }
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };
    const handleRemoveFavorite = async () => {
        try {
            await userAPI.favoriteAds(postId);
            if (tabIndex === 0) {
                await fetchFavoriteData('post');
            } else {
                await fetchFavoriteData('auc');
            }
        } catch (e) {
            setErrorMsg(e.message);
        }
        handleModalClose();
    };
    const handleDetailedModal = (post: CardDataType) => () => {
        openDetailedModal();
        setSelectedPost(post);
    };
    const handleRefresh = () => {
        fetchFavoriteData('post');
        fetchFavoriteData('auc');
    };

    useEffect(() => {
        handleRefresh();
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <>
                {isFetch ? <CircularProgress color="primary" />
                    : favoritePostData.data.length === 0
                        ? <EmptyPage
                            label={t('cabinet:empty.favorite.title')}
                        />
                        : favoritePostData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCardWrapper
                                    cardData={data}
                                    handleOpenModal={handleOpenModal}
                                    handleDetailedOpen={handleDetailedModal(data)}
                                />
                            </Box>
                        ))}
            </>
        },
        {
            id: 1,
            title: t('auctions'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <>
                {isFetch ? <CircularProgress color="primary" />
                    : favoriteAucData.data.length === 0
                        ? <EmptyPage
                            label={t('cabinet:empty.favorite.title')}
                        />
                        : favoriteAucData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCardWrapper
                                    cardData={data}
                                    handleOpenModal={handleOpenModal}
                                    handleDetailedOpen={handleDetailedModal(data)}
                                />
                            </Box>
                        ))}
            </>
        }
    ];

    return (
        <>
            <TabsContent
                tabIndex={tabIndex}
                tabsData={tabsData}
                handleTabChange={handleTabChange}
            />
            <DetailedPostModalContainer
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