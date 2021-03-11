export interface AuthInputs {
    phone: string;
    password: string;
    code: string;
}
export interface UserInfo {
    active: number | null;
    created_at: string | null;
    email: string | null;
    email_verified_at: string | null;
    id: number | null;
    name: string | null;
    phone: string | null;
    status: string | null;
    surname: string | null;
    updated_at: string;
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
}
