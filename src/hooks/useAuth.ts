import {useEffect, useState} from 'react';
import {cookies} from '@src/helpers';
import {unstable_batchedUpdates} from 'react-dom';
import {UserInfo} from '@root/interfaces/Auth';

export const initAuth = {
    isAuth: false,
    authModalOpen: false
};

export const initUser: UserInfo = {
    id: null,
    name: '',
    surname: '',
    phone: '',
    avatar: '',
    created_at: null,
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    rating: 0,
    observer: {
        number_of_reviews: 0,
        number_of_purchase: 0,
        number_of_notifications: 0,
        number_of_messages: 0,
        number_of_ratings: 0
    },
    balance: 0
};

export const useAuth = () => {
    const userFromCookies = cookies.get('slondo_user');
    const isAuth = !!userFromCookies;

    const [user, setUser] = useState(initUser);
    const [auth, setAuth] = useState(initAuth);

    const clearUser = () => {
        unstable_batchedUpdates(() => {
            setUser(initUser);
            setAuth({...auth, isAuth: false});
        });
    };

    const addUser = user => {
        unstable_batchedUpdates(() => {
            setUser(user);
            setAuth({...auth, isAuth: true});
        });
    };

    const setAuthModalOpen = (authModalOpen: boolean) => {
        setAuth({...auth, authModalOpen});
    };

    useEffect(() => {
        isAuth &&
            unstable_batchedUpdates(() => {
                setUser(userFromCookies);
                setAuth({...auth, isAuth: true});
            });
    }, [isAuth]);

    return {
        auth,
        user,
        setUser,
        addUser,
        clearUser,
        setAuthModalOpen
    };
};
