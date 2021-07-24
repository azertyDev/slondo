import {useState} from 'react';
import {UserInfo} from "@root/interfaces/Auth";

export const initUser: UserInfo = {
    id: null,
    name: '',
    surname: '',
    phone: '',
    avatar: null,
    created_at: '',
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    observer: {
        number_of_reviews: 0,
        number_of_purchase: 0,
        number_of_notifications: 0,
        number_of_messages: 0,
        number_of_ratings: 0
    }
};

export const useUser = () => {
    const [user, setUser] = useState(initUser);

    const clearUser = () => {
        setUser(initUser);
    };

    return {
        user,
        setUser,
        clearUser
    };
};