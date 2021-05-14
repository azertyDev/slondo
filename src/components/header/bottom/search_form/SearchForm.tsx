import {FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {FilterIcon, Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';


export const SearchForm: FC = () => {
    const {t} = useTranslation('common');

    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Search_icon/>
            <input
                type="text"
                className="search-input"
                placeholder={t('searchText')}
            />
            <Hidden smDown>
                <CustomButton className="search-button">
                    <Typography variant="subtitle2">
                        {t('searchBtn')}
                    </Typography>
                </CustomButton>
            </Hidden>
            <Hidden mdUp>
                <FilterIcon/>
            </Hidden>
        </form>
    );
};
