import React, { FC, useState } from 'react';
import { Hidden, NativeSelect, Typography } from '@material-ui/core';
import { SearchIcon, FilterIcon } from '../icons';
import { ButtonComponent } from '../button/Button';
import { useStyles } from './useStyles';
import { useTranslation } from '@root/i18n';

export const SearchForm: FC = (props) => {
    const { t } = useTranslation(['header']);

    const [adType, setAdType] = useState(1);

    const handleSelect = (e) => {
        setAdType(e.target.value);
    };

    const classes = useStyles();
    return (
        <form className={classes.root}>
            <img src={SearchIcon} className="search-icon" alt="search" />
            <input
                type="text"
                className="search-input"
                placeholder={t('searchText')}
            />
            <NativeSelect
                value={adType}
                onChange={handleSelect}
                className="select-type"
                disableUnderline
            >
                <option value={1}>Все объявления</option>
                <option value={2}>Объявления</option>
                <option value={3}>Аукционы</option>
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
    );
};
