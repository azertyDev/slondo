import {createContext, Dispatch, SetStateAction} from 'react';
import {UserInfo} from "@root/interfaces/Auth";
import {initAuth, initUser} from "@src/hooks/useAuth";

type AuthCtxType = {
    auth: {
        isAuth: boolean,
        authModalOpen: boolean
    },
    setIsAuth: Dispatch<SetStateAction<boolean>>,
    setAuthModalOpen: Dispatch<SetStateAction<boolean>>,
    user: UserInfo,
    setUser: Dispatch<SetStateAction<UserInfo>>,
    clearUser: () => void
};

const initCtx: AuthCtxType = {
    auth: initAuth,
    setIsAuth: (isAuth: boolean) => {},
    setAuthModalOpen: (open: boolean) => {},
    user: initUser,
    setUser: (user) => {},
    clearUser: () => {}
}

export const AuthCtx = createContext(initCtx);