import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'next-i18next';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {UserInfo} from '@root/interfaces/Auth';
import {UserProfile} from '@src/components/user_profile/UserProfile';

export const UserProfileContainer = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');
    const {user_id} = useRouter().query;

    const initUserInfo = {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: '',
        available_start_time: '',
        available_end_time: ''
    };

    const [userInfo, setUserInfo] = useState<UserInfo>(initUserInfo);

    const fetchUserById = async () => {
        try {
            const userData = await userAPI.getUserInfoById(user_id as string);
            setUserInfo(userData);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchUserById();
    }, []);

    const title = t('myPosts');

    return (
        <div>
            <UserProfile title={title} user={userInfo} t={t}/>
        </div>
    );
};