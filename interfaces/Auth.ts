export interface AuthInputs {
    phone: string;
    password: string;
}

export interface AuthReg {
    isFetch: boolean;
    isAuth: boolean;
    error?: unknown;
}