import {createContext, Dispatch, SetStateAction} from 'react';

const initCtx: Dispatch<SetStateAction<boolean>> = (v: boolean) => {};

export const ExitPromptCtx = createContext(initCtx);