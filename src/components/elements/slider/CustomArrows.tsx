import {IconButton} from "@material-ui/core";
import {useStyles} from "./useStyles";

const CustomLeftArrow = (props) => {
    const classes = useStyles();
    return <IconButton
        className={classes.arrows + ' left'}
        onClick={props.previous}
    />;
};

const CustomRightArrow = (props) => {
    const classes = useStyles();
    return <IconButton
        className={classes.arrows + ' right'}
        onClick={props.next}
    />;
};

export {
    CustomLeftArrow,
    CustomRightArrow
};