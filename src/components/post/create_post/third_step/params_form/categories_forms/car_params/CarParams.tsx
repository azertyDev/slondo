import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {Grid, Typography} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {getErrorMsg, setRequireParamsVals} from '@src/helpers';
import {BodySelect} from '@src/components/elements/body_select/BodySelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {optionFields} from '@src/common_data/fields_keys';
import {useHandlers} from '@src/hooks/useHandlers';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {useTranslation} from "next-i18next";
import {ErrorCtx} from "@src/context";
import {useUrlParams} from "@src/hooks";
import {useStyles} from './useStyles';

type CarParamsPropsType = {
    subcategoryName: string
} & CommonParamsPropsType;

export const CarParams: FC<CarParamsPropsType> = (props) => {
    const {
        onSubmit,
        categoryName,
        subcategoryName,
        isPreview,
        filters,
        currentFormIndex,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');
    const {post_id, title, params} = useUrlParams();

    const isForeignCars = subcategoryName === 'foreign_cars';
    const isMadeInUzb = subcategoryName === 'made_uzbekistan';

    const initVals: any = {
        title: title ?? '',
        manufacturer: null,
        params: null,
        year: null,
        body: null,
        transmission: null,
        drive: null,
        engine_type: null,
        engine_capacity: '',
        mileage: '',
        broken: false
    };

    if (isMadeInUzb) initVals.position = null;

    const {setErrorMsg} = useContext(ErrorCtx);

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        setTouched,
        handleBlur
    } = formik;

    const [valuesByYear, setValuesByYear] = useState<any>({});
    const {handleNumericInput, handleCheckbox, handleOptionCheckbox} = useHandlers(values, setValues);

    const handleSelect = async (name, value) => {
        try {
            let newVals = {...values, [name]: value};

            if (isMadeInUzb) {
                if (name === 'manufacturer') {
                    newVals = {
                        ...initVals,
                        title: values.title,
                        manufacturer: value
                    };
                    setValuesByYear({});
                }

                if (name === 'model') {
                    newVals = {
                        ...initVals,
                        title: values.title,
                        manufacturer: values.manufacturer,
                        params: value
                    };
                    setValuesByYear({});
                }

                if (name === 'year') {
                    if (value) {
                        const [valsByYear] = (await userAPI.getCarDataByYear(values.model.id, value.id)).bodies;

                        newVals = {
                            ...initVals,
                            title: values.title,
                            manufacturer: values.manufacturer,
                            params: values.model,
                            year: value,
                            body: valsByYear.body
                        };

                        // Normalize positions structure
                        valsByYear.positions = valsByYear.positions.map(pos => {
                            const vals = {id: pos.id, name: pos.name};
                            Object.keys(pos).forEach(k => {
                                if (Array.isArray(pos[k]) && !!pos[k].length) {
                                    const [_, valKey] = Object.keys(pos[k][0]);
                                    const isOptionKey = optionFields.some(optKey => optKey === valKey);
                                    vals[valKey] = isOptionKey
                                        ? pos[k].map(opt => opt[valKey])
                                        : pos[k][0][valKey];
                                }
                            });
                            return vals;
                        });

                        setValuesByYear(valsByYear);
                    } else {
                        // Reset values by year
                        newVals = {
                            ...initVals,
                            title: values.title,
                            manufacturer: values.manufacturer,
                            params: values.model
                        };
                    }
                }

                if (name === 'position') {
                    const valsByPosition = {};

                    if (value) {
                        Object.keys(value).forEach(key => {
                            if (Array.isArray(value[key])) {
                                valsByPosition[key] = value[key].map(v => v.id);
                            } else if (typeof value[key] === 'object') {
                                if (key === 'engine_capacity') valsByPosition[key] = value[key].name;
                                else valsByPosition[key] = {...value[key]};
                            }
                        });

                        newVals = {
                            ...initVals,
                            ...valsByPosition,
                            title: values.title,
                            manufacturer: values.manufacturer,
                            params: values.model,
                            year: values.year,
                            body: values.body,
                            position: value,
                            mileage: values.mileage,
                            broken: values.broken
                        };
                    } else {
                        // Reset values by position
                        newVals = {
                            ...initVals,
                            title: values.title,
                            manufacturer: values.manufacturer,
                            params: values.model,
                            year: values.year,
                            body: values.body
                        };
                    }
                }
            }

            if (isForeignCars && name === 'manufacturer') newVals.model = null;

            unstable_batchedUpdates(() => {
                setValues(newVals);
                isMadeInUzb && setTouched({});
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        (post_id !== undefined && params !== undefined)
            ? setValsByUrlParams()
            : setRequireParamsVals(
            values,
            setValues,
            filters,
            subcategoryName
            );
    }, [filters]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <CustomAccordion
                    submitTxt='appearance'
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    title={t('post:parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid item xs={12} md={6}>
                        <PostTitle
                            t={t}
                            isPreview={isPreview}
                            title={values.title}
                            formik={formik}
                        />
                    </Grid>
                    <Grid item container spacing={2}>
                        {isPreview
                            ? <PreviewValues
                                values={values}
                                filters={filters}
                                transKey={t(`${categoryName}.`)}
                            />
                            : <>
                                <Grid
                                    item
                                    container
                                    sm={4}
                                    xs={12}
                                >
                                    <DropDownSelect
                                        name='manufacturer'
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                        items={filters.manufacturer}
                                        labelTxt={t(`manufacturer`)}
                                        transKey={t(`${categoryName}.`)}
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
                                        name='model'
                                        values={values}
                                        onBlur={handleBlur}
                                        labelTxt={t(`model`)}
                                        handleSelect={handleSelect}
                                        transKey={t(`${categoryName}`)}
                                        items={values.manufacturer?.models}
                                        errorMsg={getErrorMsg(errors.params, touched.params, t)}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    container
                                    sm={4}
                                    xs={12}
                                >
                                    <DropDownSelect
                                        name='year'
                                        labelTxt={t(`year`)}
                                        transKey={t(`${categoryName}.`)}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                        errorMsg={getErrorMsg(errors.year, touched.year, t)}
                                        items={isMadeInUzb ? values.model?.years : filters.years}
                                    />
                                </Grid>
                                {(!!values.year?.id || !isMadeInUzb) && (
                                    <>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                        >
                                            <BodySelect
                                                values={values}
                                                bodies={filters.body}
                                                handleSelect={handleSelect}
                                                errorMsg={getErrorMsg(errors.body, touched.body, t)}
                                            />
                                        </Grid>
                                        {isMadeInUzb && (
                                            <Grid
                                                item
                                                container
                                                sm={4}
                                                xs={12}
                                            >
                                                <DropDownSelect
                                                    name='position'
                                                    values={values}
                                                    onBlur={handleBlur}
                                                    handleSelect={handleSelect}
                                                    items={valuesByYear.positions}
                                                    transKey={t(`${categoryName}.`)}
                                                    labelTxt={t(`car.position.name`)}
                                                    errorMsg={getErrorMsg(errors.position, touched.position, t)}
                                                />
                                            </Grid>
                                        )}
                                        {(!!values.position?.id || !isMadeInUzb) && (
                                            <>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        name='transmission'
                                                        labelTxt={t(`car.transmission.name`)}
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.transmission}
                                                        handleSelect={handleSelect}
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
                                                        transKey={t(`${categoryName}.`)}
                                                        name='drive'
                                                        labelTxt={t(`car.drive.name`)}
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
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t(`car.engine_type.name`)}
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
                                                        name='engine_capacity'
                                                        labelText={t('car.engine_capacity.name')}
                                                        value={values.engine_capacity}
                                                        onChange={handleNumericInput}
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
                                                        name='mileage'
                                                        labelText='mileage'
                                                        value={values.mileage ?? ''}
                                                        onChange={handleNumericInput}
                                                        errorMsg={getErrorMsg(errors.mileage, touched.mileage, t)}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    alignItems='flex-end'
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <CheckboxSelect
                                                        name='broken'
                                                        checked={values.broken}
                                                        handleCheckbox={handleCheckbox}
                                                        labelTxt={t(`car.broken.name`)}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                >
                                                    <Typography variant='h5'>
                                                        <strong>{t('comfort_salon_title')}</strong>
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        name='climate'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.climate}
                                                        handleSelect={handleSelect}
                                                        labelTxt={t('car.climate.name')}
                                                        transKey={t(`${categoryName}.`)}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.power_steering.name')}
                                                        name='power_steering'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.power_steering}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        multiple
                                                        name='comfort'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.comfort}
                                                        handleSelect={handleSelect}
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.comfort.name')}
                                                    />
                                                </Grid>
                                                <Grid item container xs={12} spacing={1}>
                                                    <Grid
                                                        item
                                                        container
                                                        lg={6}
                                                        sm={12}
                                                    >
                                                        <Grid
                                                            item
                                                            container
                                                            sm={6}
                                                            xs={12}
                                                        >
                                                            <OptionsSelect
                                                                column
                                                                isApratment={false}
                                                                name='power_windows'
                                                                values={values}
                                                                transKey={`${categoryName}.`}
                                                                options={filters.power_windows}
                                                                handleOptionCheckbox={handleOptionCheckbox}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            container
                                                            sm={6}
                                                            xs={12}
                                                        >
                                                            <OptionsSelect
                                                                isApratment={false}
                                                                column
                                                                name='steering'
                                                                values={values}
                                                                transKey={`${categoryName}.`}
                                                                options={filters.steering}
                                                                handleOptionCheckbox={handleOptionCheckbox}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        container
                                                        lg={6}
                                                        sm={12}
                                                    >
                                                        <Grid
                                                            item
                                                            container
                                                            sm={6}
                                                            xs={12}
                                                        >
                                                            <OptionsSelect
                                                                isApratment={false}
                                                                column
                                                                name='seat_heating'
                                                                values={values}
                                                                transKey={`${categoryName}.`}
                                                                options={filters.seat_heating}
                                                                handleOptionCheckbox={handleOptionCheckbox}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            container
                                                            sm={6}
                                                            xs={12}
                                                        >
                                                            <OptionsSelect
                                                                isApratment={false}
                                                                column
                                                                name='adjustable_seats'
                                                                values={values}
                                                                transKey={`${categoryName}.`}
                                                                options={filters.adjustable_seats}
                                                                handleOptionCheckbox={handleOptionCheckbox}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.seats.name')}
                                                        name='seats'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.seats}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.upholestery.name')}
                                                        name='upholestery'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.upholestery}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        multiple
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.multimedia.name')}
                                                        name='multimedia'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.multimedia}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                >
                                                    <Typography variant='h5'>
                                                        <strong>{t('driving_assistance_safety_title')}</strong>
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        multiple
                                                        name='assistance'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.assistance}
                                                        handleSelect={handleSelect}
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.assistance.name')}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.airbags.name')}
                                                        multiple
                                                        name='airbags'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.airbags}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.safety.name')}
                                                        multiple
                                                        name='safety'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.safety}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    md={4}
                                                    sm={6}
                                                    xs={12}
                                                >
                                                    <OptionsSelect
                                                        isApratment={false}
                                                        column
                                                        name='parking'
                                                        values={values}
                                                        transKey={`${categoryName}.`}
                                                        options={filters.parking}
                                                        handleOptionCheckbox={handleOptionCheckbox}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    md={4}
                                                    sm={6}
                                                    xs={12}
                                                >
                                                    <OptionsSelect
                                                        isApratment={false}
                                                        column
                                                        name='antitheft'
                                                        values={values}
                                                        transKey={`${categoryName}.`}
                                                        options={filters.antitheft}
                                                        handleOptionCheckbox={handleOptionCheckbox}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                >
                                                    <Typography variant='h5'>
                                                        <strong>{t('visibility')}</strong>
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.headlight.name')}
                                                        name='headlight'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.headlight}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.overview.name')}
                                                        multiple
                                                        name='overview'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.overview}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    container
                                                    sm={4}
                                                    xs={12}
                                                    alignItems='flex-end'
                                                >
                                                    <DropDownSelect
                                                        transKey={t(`${categoryName}.`)}
                                                        labelTxt={t('car.other.name')}
                                                        multiple
                                                        name='other'
                                                        values={values}
                                                        onBlur={handleBlur}
                                                        items={filters.other}
                                                        handleSelect={handleSelect}
                                                    />
                                                </Grid>
                                            </>)}
                                    </>)}
                            </>}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );

    async function setValsByUrlParams() {
        const {
            manufacturer: manufacturerParam,
            model: modelParam,
            engine_capacity: engine_capacityParam,
            ...others
        } = params;

        if (Object.keys(filters).length !== 0) {
            const manufacturer = filters.manufacturer.find(m => m.id === manufacturerParam.id);
            const model = manufacturer.models.find(m => m.id === modelParam.id);
            const engine_capacity = engine_capacityParam.name;
            console.log(manufacturer);
            console.log(model);
            console.log(others);
            const [valsByYear] = (await userAPI.getCarDataByYear(model.id, others.year.id)).bodies;

            Object.keys(others).forEach(k => {
                if (filters[k] !== undefined && optionFields.some(f => f === k)) {
                    others[k] = others[k].map(v => v.id);
                }
            });

            unstable_batchedUpdates(() => {
                setValuesByYear(valsByYear);
                setValues({
                    ...others,
                    title,
                    manufacturer,
                    model,
                    engine_capacity
                });
            });
        }
    }
};