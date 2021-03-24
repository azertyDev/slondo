import React, {FC, useState} from 'react';
import {Hidden, NativeSelect, Typography} from '@material-ui/core';
import {FilterIcon, Search_icon} from '@src/components/elements/icons';
import {ButtonComponent} from '../button/Button';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';


export const SearchForm: FC = () => {
    const {t} = useTranslation(['header']);

    const [postType, setPostType] = useState(1);

    const handleSelect = ({target}) => {
        setPostType(target.value)
    };

    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Search_icon/>
            <input
                type="text"
                className="search-input"
                placeholder={t('searchText')}
            />
            <NativeSelect
                value={postType}
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
                <FilterIcon/>
            </Hidden>
        </form>
    )
};
