import React, {FC, useEffect, useState} from 'react';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {userAPI} from '@src/api/api';
import {RootState} from '@src/redux/rootReducer';
import {useTranslation} from 'next-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@root/src/components/elements/custom_pagination/CustomPagination';

export type initialStateType = {
    isFetch: boolean,
    data: {
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
    }[],
}

const NotificationsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('notifications');
    const userInfo = useSelector((store: RootState) => store.user.info);
    const initialState: initialStateType = {
        isFetch: false,
        data: []
    };

    const [notifications, setNotifications] = useState(initialState);
    const [phone, setPhone] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [message, setMessage] = useState('');
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const fetchAllNotification = async () => {
        try {
            setNotifications({...notifications, isFetch: true});
            const {data} = await userAPI.getAllNotifications();
            setNotifications({...notifications, data, isFetch: false});
            setPageCount(Math.ceil(data.length / ITEMS_PER_PAGE) || 1);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeleteNotification = (id) => async () => {
        try {
            setNotifications({...notifications, isFetch: true});
            const {message} = await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getAllNotifications();
            setNotifications({...notifications, data, isFetch: false});
            setOpenSnackbar(true);
            setMessage(message);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeleteAllNotification = async () => {
        try {
            setNotifications({...notifications, isFetch: true});
            await userAPI.deleteAllNotification(userInfo.id);
            const {data} = await userAPI.getAllNotifications();
            setNotifications({...notifications, data, isFetch: false});
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchUserPhone = (user_id) => async () => {
        try {
            const {phone} = await userAPI.getPhoneByUserId(user_id);
            setPhone(phone);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const indexOfLastPost = page * ITEMS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
    const currentPosts = notifications.data.slice(indexOfFirstPost, indexOfLastPost);

    const handlePaginationPage = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        fetchAllNotification();
    }, [page]);

    const pagination = (
        <CustomPagination
            pageCount={pageCount}
            currentPage={page}
            handlePaginationPage={handlePaginationPage}
        />
    );

    return <Notifications
        t={t}
        notifications={currentPosts}
        isFetch={notifications.isFetch}
        openModal={openModal}
        openSnackbar={openSnackbar}
        message={message}
        phone={phone}
        setOpenSnackbar={setOpenSnackbar}
        fetchUserPhone={fetchUserPhone}
        handleDeleteNotification={handleDeleteNotification}
        handleDeleteAllNotification={handleDeleteAllNotification}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        pagination={pagination}
    />;
};

export default withAuthRedirect(NotificationsContainer);
