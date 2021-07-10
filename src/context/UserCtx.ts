import {createContext, Dispatch, SetStateAction} from 'react';
import {initUser} from "@src/hooks/useUser";
import {UserInfo} from "@root/interfaces/Auth";

type UserCtxType = {
    user: UserInfo,
    setUser: Dispatch<SetStateAction<UserInfo>>,
    clearUser: () => void
};
const initUserCtx: UserCtxType = {
    user: initUser,
    setUser: (v) => {},
    clearUser: () => {}
};
export const UserCtx = createContext<UserCtxType>(initUserCtx);