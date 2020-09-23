import React from "react"
import {useStyle} from './useStyle'
import {Typography} from "@material-ui/core";


export const Home = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Typography>Home page</Typography>
        </div>
    )
};