import React, {FC, useState} from 'react';
import {Hidden, NativeSelect, Typography} from '@material-ui/core'
import {FilterIcon} from '../../icons'
import {ButtonComponent} from '../../button/Button'
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

export const SearchForm: FC = () => {
    const {t} = useTranslation(['categories']);

    const [adType, setAdType] = useState(1);
    const handleSelect = (e) => {
        setAdType(e.target.value);
    };

    const classes = useStyles();
    return (
        <form className={classes.root}>
            <input
                type="text"
                className="search-input"
                placeholder={'Легковые автомобили'}
            />
            <NativeSelect
                value={adType}
                onChange={handleSelect}
                className="select-type"
                disableUnderline
            >
                <option value={1}>Местоположение</option>
                <option value={2}>Ташкент</option>
                <option value={3}>Самарканд</option>
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
    );
};
