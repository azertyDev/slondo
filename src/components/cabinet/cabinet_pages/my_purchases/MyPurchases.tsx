import {FC, Fragment, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useTranslation} from 'react-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {myUzCardAPI, userCabinetAPI} from '@src/api/api';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {ErrorCtx} from "@src/context";

const MyPurchases: FC = () => {
    const {t} = useTranslation('cabinet');
    const title = t('myPurchases');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [tabIndex, setTabIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const [modalTitle, setModalTitle] = useState('');
    const [isFetch, setIsFetch] = useState(false);
    const [purchases, setPurchases] = useState([]);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [purchase, setPurchase] = useState({id: null, perform: false});

    const handleTabChange = (_, newValue) => {
        setTabIndex(newValue);
    };

    const confirmModalOpen = (purchase: { id: number, perform: boolean }) => () => {
        unstable_batchedUpdates(() => {
            setPurchase(purchase);
            setConfirmOpen(true);
            setModalTitle(purchase.perform ? 'perform_purchase' : 'dismiss_purchase');
        });
    };

    const confirmModalClose = () => {
        setConfirmOpen(false);
    };

    const setFetchedPurchases = async (page) => {
        try {
            const params = {
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };
            setIsFetch(true);

            const {data, total} = await userCabinetAPI.getMyPurchases(params);

            setTotal(total);
            setPurchases(data);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
        }
    };

    const handlePerformDismiss = async () => {
        try {
            setIsFetch(true);
            const post_id = JSON.stringify({post_id: purchase.id});
            await myUzCardAPI.performDismiss(post_id, purchase.perform);
            await setFetchedPurchases(1);
            confirmModalClose();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const purchasesList = (
        <div>
            {purchases.map(post => (
                <Fragment key={post.id}>
                    <CabinetCard cardData={post}/>
                    <div>
                        <CustomButton
                            disabled={isFetch}
                            onClick={confirmModalOpen({id: post.id, perform: false})}
                        >
                            {t('common:cancel')}
                        </CustomButton>
                        <CustomButton
                            disabled={isFetch}
                            onClick={confirmModalOpen({id: post.id, perform: true})}
                        >
                            {t('common:perform')}
                        </CustomButton>
                    </div>
                </Fragment>
            ))}
            <ConfirmModal
                open={confirmOpen}
                title={t(modalTitle)}
                cancelTxt={t('common:no')}
                confirmTxt={t('common:yes')}
                handleClose={confirmModalClose}
                handleConfirm={handlePerformDismiss}
            />
        </div>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('purchases'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: setFetchedPurchases,
            component: isFetch ? <CustomCircularProgress/> : purchasesList
        }
    ];

    return (
        <TabsContent
            title={title}
            headerTitle={title}
            tabIndex={tabIndex}
            tabsData={tabsData}
            handleTabChange={handleTabChange}
        />
    );
};

export default withAuthRedirect(MyPurchases);