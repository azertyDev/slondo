import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '../../SearchForm';

type SearchRegularPropsType = {
    type;
    category;
    subcategory;
    handleSelect: (n, v) => void;
} & CommonFiltersType;

export const SearchRegular: FC<SearchRegularPropsType> = props => {
    const {categoryName, handleSelect, formik, filters} = props;
    const {t} = useTranslation('filters');

    return (
        <Grid container spacing={1}>
            {getFieldsByFilters(
                {
                    t,
                    formik,
                    filters,
                    handleSelect
                },
                categoryName,
                true
            )}
        </Grid>
    );
};
