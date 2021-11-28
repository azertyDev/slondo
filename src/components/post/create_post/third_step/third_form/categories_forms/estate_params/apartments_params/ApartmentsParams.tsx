import {FC, useEffect} from 'react';
import {getErrorMsg} from '@src/helpers';
import {Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {ThirdFormPreview} from '../../../ThirdFormPreview';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {NumberSelect} from '@src/components/elements/number_select/NumberSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CommonParamsPropsType} from '../../../ThirdForm';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {PostTitle} from '@root/src/components/post/create_post/third_step/third_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useTranslation} from "next-i18next";
import {useUrlParams} from "@src/hooks";
import {useStyles} from './useStyles';

export const ApartmentsParams: FC<CommonParamsPropsType> = (props) => {
    const {
        type,
        filters,
        isPreview,
        onSubmit,
        handleFormOpen,
        categoryName,
        currentFormIndex
    } = props;

    const {t} = useTranslation('filters');
    const isDailyRent = type.name === 'dailyRent';
    const isRent = type.id === 2 || type.id === 3;

    const {title, params} = useUrlParams();

    const initVals: any = {
        title,
        area: null,
        room: null,
        floor: null,
        number_of_floors: null,
        estate_type: null,
        furnished: false,
        with_pledge: false,
        utilities: false
    };

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
        handleBlur
    } = formik;

    const {
        handleCheckbox,
        handleOptionCheckbox,
        handleSelect,
        handleFracInput,
        setValsByUrlParams
    } = useHandlers(values, setValues);

    const filtersLen = Object.keys(filters).length;
    const isLgUp = useMediaQuery(useTheme().breakpoints.up('lg'));
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    useEffect(() => {
        filtersLen && title && setValsByUrlParams(params, filters);
    }, [filtersLen]);

    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <CustomAccordion
                    isPreview={isPreview}
                    submitTxt='appearance'
                    icon={<ParametersIcon/>}
                    title={t('post:parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid item xs={12} sm={6}>
                        <PostTitle
                            t={t}
                            formik={formik}
                            title={values.title}
                            isPreview={isPreview}
                        />
                    </Grid>
                    {isPreview
                        ? <ThirdFormPreview
                            values={values}
                            filters={filters}
                            transKey={t(`${categoryName}.`)}
                        />
                        : <Grid item container spacing={2}>
                            <Grid container item spacing={2} xs={12}>
                                <Grid item xs={12} sm={5} md={4}>
                                    <DeployedSelect
                                        name='estate_type'
                                        values={values}
                                        categoryName={categoryName}
                                        handleSelect={handleSelect}
                                        options={filters.estate_type}
                                        errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                    />
                                </Grid>
                                {isRent && (
                                    <>
                                        {!isDailyRent && (
                                            <Grid item xs={12} sm={4}>
                                                <DropDownSelect
                                                    name='payment'
                                                    values={values}
                                                    onBlur={handleBlur}
                                                    items={filters.payment}
                                                    handleSelect={handleSelect}
                                                    transKey={`${categoryName}.`}
                                                    labelTxt={t(`${categoryName}.payment.name`)}
                                                />
                                            </Grid>
                                        )}
                                        <Grid item container xs={12} sm={5} md={5} alignItems='flex-end'>
                                            <CheckboxSelect
                                                name='utilities'
                                                checked={!!values.utilities}
                                                handleCheckbox={handleCheckbox}
                                                labelTxt={t('filters:estate.utilities.name')}
                                            />
                                        </Grid>
                                        <Grid item container xs={12} sm={3} alignItems='flex-end'>
                                            <CheckboxSelect
                                                name='with_pledge'
                                                checked={!!values.with_pledge}
                                                handleCheckbox={handleCheckbox}
                                                labelTxt={t('filters:estate.with_pledge.name')}
                                            />
                                        </Grid>
                                    </>
                                )}
                                <Grid item container xs={12} sm={4} alignItems='flex-end'>
                                    <CheckboxSelect
                                        name='furnished'
                                        checked={!!values.furnished}
                                        handleCheckbox={handleCheckbox}
                                        labelTxt={t('estate.furnished.name')}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <NumberSelect
                                    name='floor'
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    setValues={setValues}
                                    count={isLgUp ? 8 : 5}
                                    transKey={`${categoryName}.`}
                                />
                            </Grid>
                            <Grid item container xs={12} sm={6} md={4}>
                                <NumberSelect
                                    name='number_of_floors'
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    setValues={setValues}
                                    count={isLgUp ? 8 : 5}
                                    transKey={`${categoryName}.`}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <DropDownSelect
                                    name='room'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.room}
                                    handleSelect={handleSelect}
                                    labelTxt={t(`${categoryName}.room.name`)}
                                    transKey={`${categoryName}.`}
                                    errorMsg={getErrorMsg(errors.room, touched.room, t)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='area'
                                    value={values.area ?? ''}
                                    onChange={handleFracInput}
                                    labelText={t('estate.area.name')}
                                    errorMsg={getErrorMsg(errors.area, touched.area, t)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='living_area'
                                    value={values.living_area ?? ''}
                                    onChange={handleFracInput}
                                    labelText={t('estate.living_area.name')}
                                    errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='kitchen_area'
                                    value={values.kitchen_area ?? ''}
                                    onChange={handleFracInput}
                                    labelText={t('estate.kitchen_area.name')}
                                    errorMsg={getErrorMsg(errors.kitchen_area, touched.kitchen_area, t)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='ceiling_height'
                                    value={values.ceiling_height ?? ''}
                                    onChange={handleFracInput}
                                    labelText={t('ceiling_height')}
                                    errorMsg={getErrorMsg(errors.ceiling_height, touched.ceiling_height, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='posted'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.posted}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.posted.name`)}
                                    errorMsg={getErrorMsg(errors.posted, touched.posted, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='material'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.material}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.material.name`)}
                                    errorMsg={getErrorMsg(errors.material, touched.material, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='layout'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.layout}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.layout.name`)}
                                    errorMsg={getErrorMsg(errors.layout, touched.layout, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='repair'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.repair}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.repair.name`)}
                                    errorMsg={getErrorMsg(errors.repair, touched.repair, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='lift'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.lift}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.lift.name`)}
                                    errorMsg={getErrorMsg(errors.lift, touched.lift, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='bathroom'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.bathroom}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.bathroom.name`)}
                                    errorMsg={getErrorMsg(errors.bathroom, touched.bathroom, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='balcony'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.balcony}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.balcony.name`)}
                                    errorMsg={getErrorMsg(errors.balcony, touched.balcony, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='metro'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.metro}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.metro.name`)}
                                    errorMsg={getErrorMsg(errors.metro, touched.metro, t)}
                                />
                            </Grid>
                            <Grid item container spacing={2}>
                                <OptionsSelect
                                    isApratment
                                    column={isXsDown}
                                    name='amenities'
                                    values={values}
                                    transKey={`${categoryName}.`}
                                    options={filters.amenities}
                                    handleOptionCheckbox={handleOptionCheckbox}
                                />
                                <OptionsSelect
                                    isApratment
                                    column={isXsDown}
                                    name='infrastructure'
                                    values={values}
                                    transKey={`${categoryName}.`}
                                    options={filters.infrastructure}
                                    handleOptionCheckbox={handleOptionCheckbox}
                                />
                            </Grid>
                        </Grid>}
                </CustomAccordion>
            </CustomFormikProvider>
        </Grid>
    );
};