import {FC, useContext, useState} from 'react';
import {Grid} from '@material-ui/core';
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {UserPaymentCard} from "./UserPaymentCard";
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {myUzCardAPI} from "@src/api/api";
import {useModal} from "@src/hooks";
import {ErrorCtx} from "@src/context";
import {unstable_batchedUpdates} from "react-dom";
import {useTranslation} from "next-i18next";

type UserPaymentCardModalProps = {
    post?,
    open: boolean,
    onClose: () => void,
    handleRefresh?: () => Promise<void>
}

export const SafeDealModal: FC<UserPaymentCardModalProps> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const {t} = useTranslation('post');

    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);

    const {modalOpen: safeDealOpen, handleModalOpen: handleOpenSafeDeal, handleModalClose: handleCloseSafeDeal} = useModal();

    const createP2pHold = async () => {
        try {
            const p2pData = JSON.stringify({
                amount: post.price,
                extraId: post.id
            });

            setIsFetch(true);

            await myUzCardAPI.p2pHold(p2pData);
            await handleRefresh();

            unstable_batchedUpdates(() => {
                handleCloseSafeDeal();
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                handleCloseSafeDeal();
                setErrorMsg(e.message);
            });
        }
    };

    return (
        <ResponsiveModal
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <Grid container>
                <Grid item xs={6}>
                    <UserPaymentCard/>
                </Grid>
                <Grid item xs={6}>
                    <ConfirmModal
                        open={safeDealOpen}
                        title={t('buy_safe_deal')}
                        confirmTxt={t('common:yes')}
                        cancelTxt={t('common:no')}
                        handleConfirm={createP2pHold}
                        handleClose={handleCloseSafeDeal}
                    />
                </Grid>
            </Grid>
        </ResponsiveModal>
    );
};
