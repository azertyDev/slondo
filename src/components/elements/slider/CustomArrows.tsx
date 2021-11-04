import {IconButton} from "@material-ui/core";
import {useStyles} from "./useStyles";

const CustomLeftArrow = ({onClick}) => {
    const classes = useStyles();
    return <IconButton
        className={classes.arrows}
        onClick={() => onClick()}
    />;
};

const CustomRightArrow = ({onClick}) => {
    const classes = useStyles();
    return <IconButton
        className={classes.arrows}
        onClick={() => onClick()}
    />;
};

export {
    CustomLeftArrow,
    CustomRightArrow
};