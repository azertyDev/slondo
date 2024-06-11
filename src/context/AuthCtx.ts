import {createContext, Dispatch, SetStateAction} from 'react';
import {UserInfo} from '@root/interfaces/Auth';
import {initAuth, initUser} from '@src/hooks/useAuth';

type AuthCtxType = {
    auth: {
        isAuth: boolean;
        authModalOpen: boolean;
    };
    setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
    user: UserInfo;
    addUser: (user: UserInfo) => void;
    clearUser: () => void;
};

const initCtx: AuthCtxType = {
    auth: initAuth,
    setAuthModalOpen: (open: boolean) => {},
    user: initUser,
    addUser: user => {},
    clearUser: () => {}
};

export const AuthCtx = createContext(initCtx);
