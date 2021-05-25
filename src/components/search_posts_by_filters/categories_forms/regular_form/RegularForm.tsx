import {FC, Fragment} from 'react';
import {Grid} from '@material-ui/core';
import {excludeFields, optionFields} from '@src/common_data/form_fields';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {getErrorMsg} from '@src/helpers';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {CommonFiltersType} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {useTranslation} from 'react-i18next';


export const RegularForm: FC<CommonFiltersType> = (props) => {
    const {
        formik,
        filters,
        handleSelect,
        handleOptionCheckbox
    } = props;

    const {
        values,
        errors,
        touched,
        handleBlur
    } = formik;

    const {t} = useTranslation('filters');

    return (
        <Grid container spacing={2}>
            {getRegularFields(filters)}
        </Grid>
    );

    function getRegularFields(filters) {
        return Object.keys(filters).map(key => {
            const isExcludeValue = excludeFields.some(k => k === key);
            const isNoEmptyArray = Array.isArray(filters[key]) && !!filters[key].length;
            const isOptionKey = optionFields.some(optKey => optKey === key);

            if (!isExcludeValue && isNoEmptyArray) {
                return (
                    <Fragment key={key}>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={isOptionKey ? 12 : 4}
                        >
                            {isOptionKey
                             ? <OptionsSelect
                                 t={t}
                                 name={key}
                                 values={values}
                                 options={filters[key]}
                                 handleOptionCheckbox={handleOptionCheckbox}
                             />
                             : <DropDownSelect
                                 t={t}
                                 name={key}
                                 values={values}
                                 onBlur={handleBlur}
                                 items={filters[key]}
                                 handleSelect={handleSelect}
                                 errorMsg={getErrorMsg(errors[key], touched[key], t)}
                             />}
                        </Grid>
                        {!!values[key] && !!Object.keys(values[key]).length && getRegularFields(values[key])}
                    </Fragment>
                );
            }
        });
    }
};