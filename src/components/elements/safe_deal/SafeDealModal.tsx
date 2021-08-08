import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {UserPaymentCard} from './UserPaymentCard';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {myUzCardAPI} from '@src/api/api';
import {ErrorCtx} from '@src/context';
import {PostInfo} from '@src/components/elements/safe_deal/PostInfo';
import {useUserPaymentCard} from '@src/hooks';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useTranslation} from 'react-i18next';

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

    const hasPost = !!post;
    const {t} = useTranslation('common');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const {
        userCard,
        fetchUserCard,
        isFetchUserCard,
        handleResetUserCard
    } = useUserPaymentCard();

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
                onClose();
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                onClose();
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        open && fetchUserCard();
    }, [open]);

    return (
        <ResponsiveModal
            maxWidth={isMdDown ? 'sm' : 'lg'}
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <ModalHeader title={t('safe_deal')} handleCloseDialog={onClose} />
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <UserPaymentCard
                        onClose={onClose}
                        hasPost={hasPost}
                        userCard={userCard}
                        fetchUserCard={fetchUserCard}
                        isFetchUserCard={isFetchUserCard}
                        handleResetUserCard={handleResetUserCard}
                    />
                </Grid>
                {hasPost && !isFetchUserCard && (
                    <Grid item xs={12} lg={6}>
                        <PostInfo
                            price={post.data.price}
                            author={post.data.author}
                            createP2P={createP2pHold}
                            disable={!userCard.cardId || isFetch}
                        />
                    </Grid>
                )}
            </Grid>
        </ResponsiveModal>
    );
};
