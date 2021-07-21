import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {CardDataType} from '@root/interfaces/CardData';
import {useBetsData} from '@src/hooks/useBetsData';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostModal} from "@src/components/cabinet/components/detailed_post_modal/DetailedPostModal";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {RatingModal} from "@src/components/elements/rating_modal/RatingModal";
import {OffersModal} from "@src/components/cabinet/components/offers_modal/OffersModal";
import {useTranslation} from "next-i18next";
import {UserCtx} from "@src/context/UserCtx";
import {ErrorCtx} from "@src/context";

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
}
export const DetailedPostContainerModal: FC<DetailedPostViewPropsType> = (props) => {
    const {
        open,
        onClose,
        post,
        handleRefresh
    } = props;

    const {t} = useTranslation('cabinet');
    const {user} = useContext(UserCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const {
        author,
        status,
        auction
    } = post;

    const auctionId = auction?.id;
    const offer = auction?.offer;
    const offerUser = offer?.user;
    const winner = auction?.winner;
    const isUserWinner = winner?.id === user.id;
    const isUserCreator = author?.id === user.id;
    const hasOffer = offerUser && status === 'public';
    const userForRating = isUserWinner ? author : winner;

    const [isFetch, setIsFetch] = useState(false);
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
    const {modalOpen: confirmOpen, handleModalClose: handleConfirmClose, handleModalOpen: handleConfirmOpen} = useModal();

    const {bets, betsCount, isBetsFetch, setFetchedBetsData} = useBetsData({
        page: 1,
        itemsPerPage: 2,
        auction_id: auctionId
    });

    const handleCloseDetailModal = () => {
        onClose();
    };

    const handleOffersOpen = () => {
        unstable_batchedUpdates(() => {
            handleOpenOffers();
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
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        open && !!auctionId && setFetchedBetsData();
    }, [auctionId, open]);

    // console.log(isUserWinner);
    // console.log(post);
    return (
        <>
            <DetailedPostModal
                t={t}
                bets={bets}
                post={post}
                open={open}
                isFetch={isFetch}
                betsCount={betsCount}
                isBetsFetch={isBetsFetch}
                handleReject={handleReject}
                handleAccept={handleAccept}
                handleOpenRating={handleOpenRating}
                handleOffersOpen={handleOffersOpen}
                setFetchedBetsData={setFetchedBetsData}
                handleCloseDetailModal={handleCloseDetailModal}
            />
            <ConfirmModal
                open={confirmOpen}
                title={t(confirmTxt)}
                handleConfirm={confirmHandle}
                handleClose={handleConfirmClose}
                cancelTxt={t('common:cancel')}
                confirmTxt={t('common:perform')}
            />
            {!!userForRating && (
                <RatingModal
                    title={t('rate_seller')}
                    open={ratingOpen}
                    user={userForRating}
                    handleCloseRating={handleCloseRating}
                />
            )}
            {hasOffer && (
                <OffersModal
                    post={post}
                    open={offersOpen}
                    onClose={handleCloseOffers}
                    handleRefresh={handleRefresh}
                />
            )}
        </>
    );
};
