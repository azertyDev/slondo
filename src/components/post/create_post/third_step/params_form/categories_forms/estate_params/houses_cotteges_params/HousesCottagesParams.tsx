import {FC} from 'react';
import {Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../../PreviewValues';
import {getErrorMsg} from '@src/helpers';
import {NumberSelect} from '@src/components/elements/number_select/NumberSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CommonParamsPropsType} from '../../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {useUrlParams} from "@src/hooks";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

export const HousesCottagesParams: FC<CommonParamsPropsType> = (props) => {
    const {
        type,
        filters,
        isPreview,
        onSubmit,
        categoryName,
        currentFormIndex,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');

    const isRent = type.id === 2 || type.id === 3;
    const {title, params} = useUrlParams();

    let initVals: any = {
        title,
        room: null,
        number_of_floors: null,
        estate_type: null,
        general_area: '',
        land_area: '',
        furnished: false,
        with_pledge: false,
        utilities: false
    };

    if (params) {
        initVals = {
            ...initVals,
            ...params
        };
    }

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

    const {handleCheckbox, handleOptionCheckbox, handleSelect, handleFracInput} = useHandlers(values, setValues);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

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
                    <Grid item xs={12} sm={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                    {isPreview
                        ? <PreviewValues
                            values={values}
                            filters={filters}
                            transKey={t(`${categoryName}.`)}
                        />
                        : <Grid item container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <DeployedSelect
                                    categoryName={categoryName}
                                    values={values}
                                    name='estate_type'
                                    options={filters.estate_type}
                                    handleSelect={handleSelect}
                                    errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <DeployedSelect
                                    categoryName={categoryName}
                                    values={values}
                                    name='location'
                                    options={filters.location}
                                    handleSelect={handleSelect}
                                    errorMsg={getErrorMsg(errors.location, touched.location, t)}
                                />
                            </Grid>
                            {isRent && (
                                <>
                                    {!!filters?.payment?.length && (
                                        <Grid item xs={12} sm={4} md={4}>
                                            <DropDownSelect
                                                name='payment'
                                                items={filters.payment}
                                                values={values}
                                                onBlur={handleBlur}
                                                handleSelect={handleSelect}
                                                transKey={`${categoryName}.`}
                                                labelTxt={t(`${categoryName}.payment.name`)}
                                            />
                                        </Grid>
                                    )}
                                    <Grid item container xs={12} md={4} alignItems='flex-end'>
                                        <CheckboxSelect
                                            name='utilities'
                                            labelTxt={t('filters:utilities')}
                                            checked={values.utilities}
                                            handleCheckbox={handleCheckbox}
                                        />
                                    </Grid>
                                    <Grid item container xs={12} sm={4} md={4} alignItems='flex-end'>
                                        <CheckboxSelect
                                            name='with_pledge'
                                            labelTxt={t('filters:with_pledge')}
                                            checked={values.with_pledge}
                                            handleCheckbox={handleCheckbox}
                                        />
                                    </Grid>
                                </>
                            )}
                            <Grid item container xs={12} md={4} lg={3} alignItems='flex-end'>
                                <CheckboxSelect
                                    name='furnished'
                                    checked={values.furnished}
                                    handleCheckbox={handleCheckbox}
                                    labelTxt={t('estate.furnished.name')}
                                />
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item container xs={12} sm={6} md={4} lg={4}>
                                    <NumberSelect
                                        count={5}
                                        name='number_of_floors'
                                        errors={errors}
                                        touched={touched}
                                        values={values}
                                        setValues={setValues}
                                        transKey={`${categoryName}.`}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={6} md={5} lg={4}>
                                    <NumberSelect
                                        count={5}
                                        name='number_of_bedrooms'
                                        values={values}
                                        setValues={setValues}
                                        errors={errors}
                                        touched={touched}
                                        transKey={`${categoryName}.`}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4} md={3} lg={4}>
                                    <DropDownSelect
                                        name='room'
                                        values={values}
                                        onBlur={handleBlur}
                                        items={filters.room}
                                        handleSelect={handleSelect}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.room.name`)}
                                        errorMsg={getErrorMsg(errors.room, touched.room, t)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='general_area'
                                    value={values.general_area ?? ''}
                                    labelText={t('estate.general_area.name')}
                                    errorMsg={getErrorMsg(errors.general_area, touched.general_area, t)}
                                />
                            </Grid>
                            <Grid item container xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='land_area'
                                    value={values.land_area ?? ''}
                                    labelText={t('estate.land_area.name')}
                                    errorMsg={getErrorMsg(errors.land_area, touched.land_area, t)}
                                />
                            </Grid>
                            <Grid item container xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='living_area'
                                    value={values.living_area ?? ''}
                                    labelText={t('estate.living_area.name')}
                                    errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                                />
                            </Grid>
                            <Grid item container xs={12} sm={4}>
                                <FormikField
                                    t={t}
                                    name='ceiling_height'
                                    value={values.ceiling_height ?? ''}
                                    onChange={handleFracInput}
                                    labelText={t('estate.ceiling_height.name')}
                                    errorMsg={getErrorMsg(errors.ceiling_height, touched.ceiling_height, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
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
                                container
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
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='heating'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.heating}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.heating.name`)}
                                    errorMsg={getErrorMsg(errors.heating, touched.heating, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='gas'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.gas}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.gas.name`)}
                                    errorMsg={getErrorMsg(errors.gas, touched.gas, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='electricity'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.electricity}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.electricity.name`)}
                                    errorMsg={getErrorMsg(errors.electricity, touched.electricity, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
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
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='sewerage'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.sewerage}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.sewerage.name`)}
                                    errorMsg={getErrorMsg(errors.sewerage, touched.sewerage, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
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
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='water'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.water}
                                    handleSelect={handleSelect} transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.water.name`)}
                                    errorMsg={getErrorMsg(errors.water, touched.water, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                sm={4}
                                xs={12}
                            >
                                <DropDownSelect
                                    name='garage'
                                    values={values}
                                    onBlur={handleBlur}
                                    items={filters.garage}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.garage.name`)}
                                    errorMsg={getErrorMsg(errors.garage, touched.garage, t)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
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
        </div>
    );
};