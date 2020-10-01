import React from "react";
import {useStyles} from './useStyles'
import {Typography} from "@material-ui/core";


export const Localization = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography
                variant="subtitle1"
                className="localization-item"
            >
                Ру
            </Typography>
            <Typography
                variant="subtitle1"
                className="localization-item"
            >
                O’z
            </Typography>
        </div>
    )
};