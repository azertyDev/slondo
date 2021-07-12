import {createContext, Dispatch, SetStateAction} from 'react';

type SearchCtxType = {
    term: string,
    setTerm: Dispatch<SetStateAction<string>>
};

const initSearch = {
  term: '',
  setTerm: (v) => {}
};

export const SearchCtx = createContext<SearchCtxType>(initSearch);