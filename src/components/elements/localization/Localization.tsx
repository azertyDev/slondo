import React from "react"
import {useDispatch} from 'react-redux'
import {setLocal} from "../../../redux/actions/localizationActions"
import {Typography} from "@material-ui/core"
import {useStyles} from './useStyles'


export const Localization = () => {
    const dispatch = useDispatch();

    const setLocalAction = (lang) => () => {
        dispatch(setLocal(lang))
    };
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography
                variant="subtitle1"
                className="localization-item"
                onClick={setLocalAction('ru')}
            >
                Ру
            </Typography>
            <Typography
                variant="subtitle1"
                className="localization-item"
                onClick={setLocalAction('uz')}
            >
                O’z
            </Typography>
        </div>
    )
};