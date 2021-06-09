import {FC, Fragment, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {excludeFields, optionFields} from '@src/common_data/form_fields';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {getErrorMsg} from '@src/helpers';
import {CommonFiltersType} from '@src/components/search_posts/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';


export const RegularParams: FC<CommonFiltersType> = (props) => {
    const {
        onSubmit,
        filters,
        urlParams,
        handleReset
    } = props;

    const {t} = useTranslation('filters');

    const formik = useFormik({
        onSubmit,
        initialValues: {}
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const {handleSelect, setValsByParams} = useHandlers(values, setValues);

    useEffect(() => {
        setValsByParams(urlParams, filters);
    }, [filters]);

    console.log('urlParams', urlParams);
    console.log('filters', filters);
    console.log(values);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                {getRegularFields(filters)}
                <Grid item container justify='flex-end' xs={12} className='actions-btns'>
                    <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                    <CustomButton type='submit'>{t('filters:apply')}</CustomButton>
                </Grid>
            </Grid>
        </CustomFormikProvider>
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
                            <DropDownSelect
                                t={t}
                                multiple
                                disableRequire
                                name={key}
                                values={values}
                                onBlur={handleBlur}
                                items={filters[key]}
                                handleSelect={handleSelect}
                                errorMsg={getErrorMsg(errors[key], touched[key], t)}
                            />
                        </Grid>
                        {!!values[key] && !!Object.keys(values[key]).length && getRegularFields(values[key])}
                    </Fragment>
                );
            }
        });
    }
};