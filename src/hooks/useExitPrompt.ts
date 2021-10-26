import {useState, useEffect, Dispatch, SetStateAction} from 'react';

const initBeforeUnLoad = (showExitPrompt) => {
    window.onbeforeunload = (event) => {
        if (showExitPrompt) {
            const e = event || Event;
            e.preventDefault();
            if (e) {
                e.returnValue = '';
            }
            return '';
        }
    };
};

export const useExitPrompt = (value: boolean): Dispatch<SetStateAction<boolean>> => {
    const [showExitPrompt, setShowExitPrompt] = useState(value);

    if (process.browser) {
        window.onload = function () {
            initBeforeUnLoad(showExitPrompt);
        };
    }

    useEffect(() => {
        initBeforeUnLoad(showExitPrompt);
    }, [showExitPrompt]);

    return setShowExitPrompt;
};