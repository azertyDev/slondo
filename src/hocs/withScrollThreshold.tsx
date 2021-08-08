import {useScrollTrigger} from "@material-ui/core";

export const withScrollThreshold = (Component) => props => {
    const threshold = 53;
    const isScrollBreak = useScrollTrigger({disableHysteresis: true, threshold});
    return (
        <Component {...props} isScrollBreak={isScrollBreak} />
    );
};