import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';

type SearchRegularPropsType = {
    type,
    category,
    subcategory,
    handleSelect: (n, v) => void
} & CommonFiltersType;

export const SearchRegular: FC<SearchRegularPropsType> = (props) => {
    const {
        categoryName,
        handleSelect,
        formik,
        filters
    } = props;

    const {t} = useTranslation('filters');

    return (
        <CustomFormikProvider formik={formik}>
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
        </CustomFormikProvider>
    );
};