import React, {FC, ReactNode} from "react";
import {useStyles} from './useStyles';

type AncmntAutoFormProps = {
    form: ReactNode,
};

export const PostAutoForm: FC<AncmntAutoFormProps> = (props) => {
    const {form} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {form}
        </div>
    )
};