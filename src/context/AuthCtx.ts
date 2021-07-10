import {createContext} from 'react';
import {initAuth} from "@src/hooks/useAuth";

const initCtx = {
    auth: initAuth,
    setIsAuth: (isAuth: boolean) => {},
    setAuthModalOpen: (open: boolean) => {}
}

export const AuthCtx = createContext(initCtx);