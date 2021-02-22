export interface AuthInputs {
    phone: string;
    password: string;
    code: string;
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
