import {useState} from 'react';

export const useSearch = () => {
    const [term, setTerm] = useState('');
    return {
        term,
        setTerm
    };
};