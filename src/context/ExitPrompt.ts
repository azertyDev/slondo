import {createContext, Dispatch, SetStateAction} from 'react';

export type ExitPromptType = [
    boolean,
    Dispatch<SetStateAction<boolean>>
]

const initCtx: ExitPromptType = [
    false,
    (v: boolean) => {}
];

export const ExitPromptCtx = createContext(initCtx);