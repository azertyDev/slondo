import {FC, useEffect, useState} from 'react';
import {CardDataType} from '@root/interfaces/CardData';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useBetsData} from '@src/hooks/useBetsData';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useModal} from '@src/hooks/useModal';
import {unstable_batchedUpdates} from 'react-dom';
import {DetailedPostModal} from "@src/components/cabinet/components/detailed_post_modal/DetailedPostModal";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {RatingModal} from "@src/components/elements/rating_modal/RatingModal";
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {OffersModal} from "@src/components/cabinet/components/offers_modal/OffersModal";
import {useTranslation} from "next-i18next";

enum ActionStatuses {
    'refusal_win',
    'finish_auction',
    'reject_offer',
    'accept_offer'
}

type DetailedPostViewPropsType = {
    post: CardDataType,
    open: boolean,
    handleRefresh: () => void,
    onClose: () => void,
    handleDeactivate?: () => Promise<void>,
    handleNotificationsOpen: (post: CardDataType) => () => void
}
export const DetailedPostContainerModal: FC<DetailedPostViewPropsType> = (props) => {
    const {
        open,
        onClose,
        post,
        handleRefresh,
        handleNotificationsOpen
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');
    const userInfo = useSelector((store: RootState) => store.user.info);

    const {
        author,
        status,
        auction
    } = post;

    const auctionId = auction?.id;
    const offer = auction?.offer;
    const offerUser = offer?.user;
    const winner = auction?.winner;
    const isUserWinner = winner?.id === userInfo.id;
    const isUserCreator = author?.id === userInfo.id;
    const hasOffer = offerUser && status === 'public';
    const userForRating = isUserWinner ? author : winner;


    const [isFetch, setIsFetch] = useState(false);
    const [phone, setPhone] = useState(null);
    const [actionStatus, setActionStatus] = useState<keyof typeof ActionStatuses>(null);

    const confirmTxt = (() => {
        switch (actionStatus) {
            case 'refusal_win':
                return 'refusal_win';
            case 'accept_offer':
                return 'accept_offer';
            case 'reject_offer':
                return 'reject_offer';
            case 'finish_auction':
                return 'finish_auction';
        }
    })();

    const {modalOpen: ratingOpen, handleModalOpen: handleOpenRating, handleModalClose: handleCloseRating} = useModal();
    const {modalOpen: offersOpen, handleModalClose: handleCloseOffers, handleModalOpen: handleOpenOffers} = useModal();
    const {modalOpen: settingsOpen, handleModalClose: handleCloseSettings, handleModalOpen: handleOpenSettings} = useModal();
    const {modalOpen: confirmOpen, handleModalClose: handleConfirmClose, handleModalOpen: handleConfirmOpen} = useModal();

    const {bets, betsCount, isBetsFetch, setFetchedBetsData} = useBetsData({
        page: 1,
        itemsPerPage: 2,
        auction_id: auctionId
    });

    const fetchUserPhone = async () => {
        if (!phone) {
            try {
                const userId = isUserWinner ? author.id : winner.id;
                setIsFetch(true);
                const {phone} = await userAPI.getPhoneByUserId(userId);
                unstable_batchedUpdates(() => {
                    setPhone(phone);
                    setIsFetch(false);
                });
            } catch (e) {
                unstable_batchedUpdates(() => {
                    setIsFetch(false);
                    dispatch(setErrorMsgAction(e.message));
                });
            }
        }
    };

    const handleCloseDetailModal = () => {
        unstable_batchedUpdates(() => {
            onClose();
            setPhone(null);
        });
    };

    const handleOffersOpen = () => {
        unstable_batchedUpdates(() => {
            handleOpenOffers();
            handleCloseDetailModal();
        });
    };

    const handleSettingsOpen = () => {
        unstable_batchedUpdates(() => {
            handleOpenSettings();
            handleCloseDetailModal();
        });
    };

    const handleReject = () => {
        unstable_batchedUpdates(() => {
            handleConfirmOpen();
            setActionStatus(isUserCreator ? 'reject_offer' : 'refusal_win');
        });
    };

    const handleAccept = () => {
        unstable_batchedUpdates(() => {
            handleConfirmOpen();
            if (isUserCreator) {
                if (winner) {
                    setActionStatus('finish_auction');
                } else if (hasOffer) {
                    setActionStatus('accept_offer');
                }
            }
        });
    };

    const confirmHandle = async () => {
        try {
            setIsFetch(true);
            switch (actionStatus) {
                case 'refusal_win':
                    await userAPI.rejectVictory(post.id);
                    break;
                case 'reject_offer':
                    await userAPI.acceptOffer(offer.id, false);
                    break;
                case 'accept_offer':
                    await userAPI.acceptOffer(offer.id, true);
                    break;
                case 'finish_auction':
                    await userAPI.deactivateAuction(post.id);
                    handleOpenRating();
            }
            unstable_batchedUpdates(() => {
                handleRefresh();
                handleConfirmClose();
                setIsFetch(false);
                handleCloseDetailModal();
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                handleConfirmClose();
                setIsFetch(false);
                dispatch(setErrorMsgAction(e.message));
            });
        }
    };

    useEffect(() => {
        open && !!auctionId && setFetchedBetsData();
    }, [auctionId, open]);

    return (
        <>
            <DetailedPostModal
                t={t}
                bets={bets}
                post={post}
                open={open}
                phone={phone}
                isFetch={isFetch}
                betsCount={betsCount}
                isBetsFetch={isBetsFetch}
                handleReject={handleReject}
                handleAccept={handleAccept}
                fetchUserPhone={fetchUserPhone}
                handleOffersOpen={handleOffersOpen}
                handleSettingsOpen={handleSettingsOpen}
                setFetchedBetsData={setFetchedBetsData}
                handleNotificationsOpen={handleNotificationsOpen}
                handleCloseDetailModal={handleCloseDetailModal}
            />
            <ConfirmModal
                title={t(confirmTxt)}
                open={confirmOpen}
                handleConfirm={confirmHandle}
                handleClose={handleConfirmClose}
                cancelTxt={t('common:cancel')}
                confirmTxt={t('common:perform')}
            />
            {userForRating && (
                <RatingModal
                    open={ratingOpen}
                    user={userForRating}
                    handleCloseRating={handleCloseRating}
                />
            )}
            <SettingsModal
                post={post}
                open={settingsOpen}
                handleRefresh={handleRefresh}
                onClose={handleCloseSettings}
            />
            <OffersModal
                post={post}
                open={offersOpen}
                onClose={handleCloseOffers}
                handleRefresh={handleRefresh}
            />
        </>
    );
};
