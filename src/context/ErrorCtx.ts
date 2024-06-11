import {createContext} from 'react';
import {initError} from '@src/hooks/useErrors';

const initCtx = {
    error: initError,
    resetError: () => {},
    setErrorMsg: (error: string) => {}
};

export const ErrorCtx = createContext(initCtx);
