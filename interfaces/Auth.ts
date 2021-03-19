export interface UserInfo {
    id: number,
    name: string,
    surname: string,
    phone: string,
    avatar: string | boolean,
    created_at: string
}
export interface RecoveryInputs {
    phone: string;
    password: string;
    code: string;
    password_confirmation: string;
}

export interface AuthReg {
    isFetch: boolean;
    isAuth: boolean;
    error?: unknown;
    isAuthModalOpen: boolean;
    user: UserInfo
}

export type SubscriberType = {
    id: number,
    subscriber_id: number,
    user_id: number,
    user?: UserInfo
}
