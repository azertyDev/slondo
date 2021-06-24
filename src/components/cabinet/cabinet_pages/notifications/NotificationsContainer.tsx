import {FC, useEffect, useState} from 'react';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {userAPI} from '@src/api/api';
import {RootState} from '@src/redux/rootReducer';
import {useTranslation} from 'next-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@root/src/components/elements/custom_pagination/CustomPagination';
import {useModal} from '@src/hooks/useModal';

export type initialNotificationType = {
    id: number,
    ads_id: number,
    status: string,
    receiver_id: number,
    type: string,
    message: string,
    go_to: number,
    go_to_type: string,
    updated_at: string,
    created_at: string
}

const NotificationsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications', 'categories', 'common', 'locations']);
    const userInfo = useSelector((store: RootState) => store.user.info);
    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();

    const [isFetch, setIsFetch] = useState(false);
    const [notifications, setNotifications] = useState<initialNotificationType[]>([]);
    const [phone, setPhone] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const fetchAllNotification = async () => {
        try {
            setIsFetch(true);
            const {data, total} = await userAPI.getAllNotifications({page, itemsPerPage: ITEMS_PER_PAGE});
            setIsFetch(false);
            setNotifications(data);
            setItemsCount(total);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleDeleteNotification = (id) => async () => {
        try {
            setIsFetch(true);

            const {message} = await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getAllNotifications();

            setNotifications(data);
            setMessage(message);
            handleOpenSnackbar();
            setIsFetch(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleDeleteAllNotification = async () => {
        try {
            setIsFetch(true);

            await userAPI.deleteAllNotification(userInfo.id);
            const {data} = await userAPI.getAllNotifications();

            setNotifications(data);
            setIsFetch(true);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const fetchUserPhone = (user_id) => async () => {
        try {
            setIsFetch(true);
            const {phone} = await userAPI.getPhoneByUserId(user_id);
            setPhone(phone);
            setIsFetch(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    const pagination = (
        <CustomPagination
            currentPage={page}
            totalItems={itemsCount}
            itemsPerPage={ITEMS_PER_PAGE}
            handlePagePagination={handlePagePagination}
        />
    );

    useEffect(() => {
        fetchAllNotification();
    }, [page]);

    return <Notifications
        t={t}
        notifications={notifications}
        isFetch={isFetch}
        openModal={openModal}
        openSnackbar={openSnackbar}
        message={message}
        phone={phone}
        fetchUserPhone={fetchUserPhone}
        handleDeleteNotification={handleDeleteNotification}
        handleDeleteAllNotification={handleDeleteAllNotification}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleCloseSnackbar={handleCloseSnackbar}
        pagination={pagination}
    />;
};

export default withAuthRedirect(NotificationsContainer);
