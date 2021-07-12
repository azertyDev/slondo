import {useState} from 'react';

export const initAuth = {
    isAuth: false,
    authModalOpen: false
};

export const useAuth = () => {
    const [auth, setAuth] = useState(initAuth);
    const setIsAuth = (isAuth: boolean) => {
        setAuth({...auth, isAuth});
    };
    const setAuthModalOpen = (authModalOpen: boolean) => {
        setAuth({...auth, authModalOpen});
    };
    return {
        auth,
        setIsAuth,
        setAuthModalOpen
    };
};