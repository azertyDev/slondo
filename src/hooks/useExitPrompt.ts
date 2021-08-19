import {useState, useEffect} from 'react';
import {ExitPromptType} from "@src/context/ExitPrompt";

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

export const useExitPrompt = (bool): ExitPromptType => {
    const [showExitPrompt, setShowExitPrompt] = useState(bool);

    if (process.browser) {
        window.onload = function () {
            initBeforeUnLoad(showExitPrompt);
        };
    }

    useEffect(() => {
        initBeforeUnLoad(showExitPrompt);
    }, [showExitPrompt]);

    return [showExitPrompt, setShowExitPrompt];
};