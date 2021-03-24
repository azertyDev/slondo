import React from "react";
import {useScrollTrigger} from "@material-ui/core";


export const withScrollThreshold = (Component) => props => {
    const isScrollBreak = useScrollTrigger({disableHysteresis: true, threshold: 53});
    return (
        <Component {...props} isScrollBreak={isScrollBreak} />
    );
};