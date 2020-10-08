import React from "react"
import {Hidden, Typography} from "@material-ui/core"
import {SearchIcon, FilterIcon} from "../icons";
import {ButtonComponent} from "../button/Button"
import {useStyles} from "./useStyles"


export const SearchForm = (props) => {
    const {t} = props;
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
                placeholder={t('searchText')}
            />
            <Hidden smDown>
                <ButtonComponent className="search-button">
                    <Typography variant="subtitle2">
                        {t('searchBtn')}
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