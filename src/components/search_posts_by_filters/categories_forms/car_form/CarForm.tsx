import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {getErrorMsg} from '@src/helpers';
import {BodySelect} from '@src/components/elements/body_select/BodySelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CommonFiltersType} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';


export const CarForm: FC<CommonFiltersType> = (props) => {
    const {
        onSubmit,
        filters,
    } = props;

    const formik = useFormik<any>({
        initialValues: {},
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const {handleSelect, handleInput} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    return (
        <Grid item container spacing={2}>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    name='manufacturer'
                    values={values}
                    onBlur={handleBlur}
                    items={filters.manufacturer}
                    disableRequire
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.manufacturer, touched.manufacturer, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    name='model'
                    values={values}
                    onBlur={handleBlur}
                    items={values.manufacturer?.models}
                    disableRequire
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.model, touched.model, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    name='year'
                    disableRequire
                    values={values}
                    onBlur={handleBlur}
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.year, touched.year, t)}
                    items={filters.years}
                />
            </Grid>
            <Grid
                item
                container
                xs={12}
            >
                <BodySelect
                    t={t}
                    disableRequire
                    values={values}
                    bodies={filters.body}
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.body, touched.body, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    disableRequire
                    name='transmission'
                    values={values}
                    onBlur={handleBlur}
                    handleSelect={handleSelect}
                    items={filters.transmission}
                    errorMsg={getErrorMsg(errors.transmission, touched.transmission, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    name='drive'
                    disableRequire
                    values={values}
                    onBlur={handleBlur}
                    items={filters.drive}
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.drive, touched.drive, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <DropDownSelect
                    t={t}
                    disableRequire
                    name='engine_type'
                    values={values}
                    onBlur={handleBlur}
                    items={filters.engine_type}
                    handleSelect={handleSelect}
                    errorMsg={getErrorMsg(errors.engine_type, touched.engine_type, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <FormikField
                    t={t}
                    size='small'
                    name='engine_capacity'
                    labelText='engine_capacity'
                    disableRequire
                    onChange={handleInput}
                    value={values.engine_capacity}
                    errorMsg={getErrorMsg(errors.engine_capacity, touched.engine_capacity, t)}
                />
            </Grid>
            <Grid
                item
                container
                sm={4}
                xs={12}
            >
                <FormikField
                    t={t}
                    size='small'
                    name='mileage'
                    labelText='mileage'
                    disableRequire
                    onChange={handleInput}
                    value={values.mileage ?? ''}
                    errorMsg={getErrorMsg(errors.mileage, touched.mileage, t)}
                />
            </Grid>
        </Grid>
    );
};
