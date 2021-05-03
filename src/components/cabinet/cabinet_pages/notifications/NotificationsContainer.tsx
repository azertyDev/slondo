import React, {FC, useEffect, useState} from 'react';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {userAPI} from '@src/api/api';
import {RootState} from '@src/redux/rootReducer';

type initialStateType = {
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
    }[]
}

const NotificationsContainer: FC = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((store: RootState) => store.user.info);
    const initialState: initialStateType = {
        isFetch: false,
        data: []
    };

    const [notifications, setNotifications] = useState(initialState);
    const [openModal, setOpenModal] = useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [message, setMessage] = useState('');

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

    useEffect(() => {
        fetchAllNotification();
    }, []);

    return <Notifications
        notifications={notifications}
        isFetch={notifications.isFetch}
        openModal={openModal}
        openSnackbar={openSnackbar}
        message={message}
        setOpenSnackbar={setOpenSnackbar}
        handleDeleteNotification={handleDeleteNotification}
        handleDeleteAllNotification={handleDeleteAllNotification}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
    />;
};

export default withAuthRedirect(NotificationsContainer);
