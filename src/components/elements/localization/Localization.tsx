import React from "react"
import {Typography} from "@material-ui/core"
import {i18n} from '../../../../i18n'
import {useStyles} from './useStyles'


export const Localization = () => {
    const setLocalAction = (lang) => () => i18n.changeLanguage(lang);

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography
                variant="subtitle1"
                className={i18n.language === 'ru' ? classes.selected : ''}
                onClick={setLocalAction('ru')}
            >
                Ру
            </Typography>
            <Typography
                variant="subtitle1"
                className={i18n.language === 'uz' ? classes.selected : ''}
                onClick={setLocalAction('uz')}
            >
                O’z
            </Typography>
        </div>
    )
};