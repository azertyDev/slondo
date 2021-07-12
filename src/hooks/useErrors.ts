import {useState} from 'react';

export const initError = {
    isError: false,
    errorMsg: ''
};

export const useError = () => {
    const [error, setError] = useState(initError);
    const resetError = () => {
        setError(initError);
    };
    const setErrorMsg = (errorMsg: string) => {
        setError({isError: true, errorMsg});
    };
    return {
        error,
        setErrorMsg,
        resetError
    };
};