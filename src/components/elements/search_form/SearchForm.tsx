import React, {useState} from "react"
import {Hidden, MenuItem, NativeSelect, Typography} from "@material-ui/core"
import {SearchIcon, FilterIcon} from "../icons";
import {ButtonComponent} from "../button/Button"
import {useStyles} from "./useStyles"


export const SearchForm = (props) => {
    const {t} = props;

    const [adType, setAdType] = useState(1);

    const handleSelect = (e) => {
        setAdType(e.target.value);
    };

    const classes = useStyles();
    return (
        <form className={classes.root}>
            <img
                src={SearchIcon}
                className="search-icon"
                alt="search"
            />
            <input
                type="text"
                className="search-input"
                placeholder={t('searchText')}
            />
            <NativeSelect value={adType} onChange={handleSelect} className="select-type" disableUnderline>
              <MenuItem value={1}>Все объявления</MenuItem>
              <MenuItem value={2}>Объявления</MenuItem>
              <MenuItem value={3}>Аукционы</MenuItem>
            </NativeSelect>
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