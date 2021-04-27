import React, {FC, useEffect, useState} from 'react';
import {Notifications} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {userAPI} from '@src/api/api';

export type NotificationDataType = {
    title: string,
    subTitle: string,
    ads_id: number
};


const NotificationsContainer: FC = () => {
    const dispatch = useDispatch();

    const initialState = [
        {
            id: null,
            ads_id: null,
            status: '',
            receiver_id: null,
            type: '',
            message: '',
            go_to: null,
            updated_at: '',
            created_at: ''
        }
    ];

    const [notifications, setNotifications] = useState(initialState);

    const fetchAllNotification = async () => {
        try {
            const {data} = await userAPI.getAllNotifications();
            console.log(notifications);
            setNotifications(data);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchAllNotification();
    }, []);


    return <Notifications notifications={notifications} />;
};

export default withAuthRedirect(NotificationsContainer);
