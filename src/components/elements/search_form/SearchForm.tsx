import React, {FunctionComponent} from "react"
import {Hidden, Typography} from "@material-ui/core"
import {SearchIcon, FilterIcon} from "../icons";
import {ButtonComponent} from "../button/Button"
import {useStyles} from "./useStyles"


export const SearchForm: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <img
                src={SearchIcon}
                className="search-icon"
                alt='search'
            />
            <input
                type="text"
                className="search-input"
                placeholder="Что будем искать?"
            />
            <Hidden smDown>
                <ButtonComponent className="search-button">
                    <Typography variant="subtitle2">
                        Найти
                    </Typography>
                </ButtonComponent>
            </Hidden>
            <Hidden mdUp>
                <img
                    src={FilterIcon}
                    alt="filter icon"
                    className="filter-icon"
                />
            </Hidden>
        </form>
    )
}