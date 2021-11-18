import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {excludeCtgrsForYear} from '@src/components/post/create_post/third_step/third_form/categories_forms/transport_params/TransportParams';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';

type SearchRegularPropsType = {
    type;
    subcategory;
} & CommonFiltersType;

export const SearchTransport: FC<SearchRegularPropsType> = props => {
    const {type, handleSelect, categoryName, subcategory, formik, filters} =
        props;

    const {t} = useTranslation('filters');
    const isYearExclude = excludeCtgrsForYear.some(k => k === type?.name);
    const hasEngineCapacity =
        type?.name === 'motorcycles' || type?.name === 'mopedsAndScooters';
    const hasMileage =
        subcategory?.name === 'motorcyclesAndMotorTech' ||
        subcategory?.name === 'busesAndTrucks';

    const {values, setValues} = formik;

    const {handleFracInput, handleNumericInput} = useHandlers(
        values,
        setValues
    );

    return (
        <Grid container spacing={1}>
            {getFieldsByFilters(
                {
                    t,
                    filters,
                    formik,
                    handleSelect
                },
                categoryName,
                true
            )}
            {hasEngineCapacity && (
                <Grid item container xs={12} sm={4}>
                    <FromToInputs
                        handleInput={handleFracInput}
                        labelTxt={t('engine_capacity')}
                        firstInputProps={{
                            value: values.engine_capacity_from,
                            name: 'engine_capacity_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.engine_capacity_to,
                            name: 'engine_capacity_to',
                            placeholder: t(`filters:to`)
                        }}
                    />
                </Grid>
            )}
            {!isYearExclude && (
                <Grid item container xs={12} sm={4}>
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('year')}
                        firstInputProps={{
                            value: values.year_from,
                            name: 'year_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.year_to,
                            name: 'year_to',
                            placeholder: t(`filters:to`)
                        }}
                    />
                </Grid>
            )}
            {hasMileage && (
                <Grid item container xs={12} sm={4}>
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('mileage')}
                        firstInputProps={{
                            value: values.mileage_from,
                            name: 'mileage_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.mileage_to,
                            name: 'mileage_to',
                            placeholder: t(`filters:to`)
                        }}
                    />
                </Grid>
            )}
        </Grid>
    );
};
