import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {CardDataType} from '@root/interfaces/CardData';
import {useBetsData} from '@src/hooks/useBetsData';
import {useModal} from '@src/hooks/useModal';
import {DetailedPost} from "@src/components/cabinet/components/detailed_post_modal/modals/DetailedPost";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {RatingModal} from "@src/components/elements/rating_modal/RatingModal";
import {OffersModal} from "@src/components/cabinet/components/offers_modal/OffersModal";
import {useTranslation} from "next-i18next";
import {AuthCtx, ErrorCtx} from "@src/context";
import {userAPI} from '@src/api/api';
import {DetailedAuctions} from "@src/components/cabinet/components/detailed_post_modal/modals/DetailedAuctions";
import {CabinetModal} from "@src/components/cabinet/components/cabinet_modal/CabinetModal";

enum ActionStatuses {
    'refusal_win',
    'finish_deal',
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
export const DetailedModal: FC<DetailedPostViewPropsType> = (props) => {
    const {
        open,
        onClose,
        post,
        handleRefresh
    } = props;

    const {t} = useTranslation('cabinet');
    const {user} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const {
        ads_type,
        buyer,
        author,
        status,
        auction
    } = post;

    const isAuction = ads_type === 'auc' || ads_type === 'exauc';

    const auctionId = auction?.id;
    const offer = auction?.offer;
    const offerUser = offer?.user;
    const winner = auction?.winner;

    const isUserWinner = winner?.id === user.id;
    const isUserCreator = author?.id === user.id;
    const isUserBuyer = buyer?.id === user.id;

    const hasOffer = offerUser && status === 'public';
    const userForRating = (isUserWinner || isUserBuyer) ? author : winner ?? buyer ?? null;

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
            case 'finish_deal':
                return 'finish_deal';
        }
    })();

    const {
        modalOpen: ratingOpen,
        handleModalOpen: handleOpenRating,
        handleModalClose: handleCloseRating
    } = useModal();
    const {
        modalOpen: offersOpen,
        handleModalClose: handleCloseOffers,
        handleModalOpen: handleOpenOffers
    } = useModal();
    const {
        modalOpen: confirmOpen,
        handleModalClose: handleConfirmClose,
        handleModalOpen: handleConfirmOpen
    } = useModal();

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
                    setActionStatus('finish_deal');
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
                case 'finish_deal':
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

    return (
        <>
            <CabinetModal
                maxWidth='lg'
                openDialog={open}
                title={`${t(`common:${ads_type}`)} №: ${post.id}`}
                handleCloseDialog={handleCloseDetailModal}
            >
                {isAuction
                    ? <DetailedAuctions
                        bets={bets}
                        post={post}
                        isFetch={isFetch}
                        betsCount={betsCount}
                        isBetsFetch={isBetsFetch}
                        handleReject={handleReject}
                        handleAccept={handleAccept}
                        handleOpenRating={handleOpenRating}
                        handleOffersOpen={handleOffersOpen}
                        setFetchedBetsData={setFetchedBetsData}
                    />
                    : <DetailedPost
                        post={post}
                        handleOpenRating={handleOpenRating}
                    />}
            </CabinetModal>
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
                    postId={post.id}
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
