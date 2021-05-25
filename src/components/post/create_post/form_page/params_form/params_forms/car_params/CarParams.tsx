import {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {getErrorMsg, setRequireVals} from '@src/helpers';
import {BodySelect} from '@src/components/elements/body_select/BodySelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {optionFields} from '@src/common_data/form_fields';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useHandlers} from '@src/hooks/useHandlers';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useStyles} from './useStyles';

type CarParamsPropsType = {
    subCategoryName: string
} & CommonParamsPropsType;

export const CarParams: FC<CarParamsPropsType> = (props) => {
    const {
        t,
        isSearch,
        onSubmit,
        subCategoryName,
        isPreview,
        filters,
        currentFormIndex,
        handleFormOpen
    } = props;

    const isForeignCars = subCategoryName === 'foreignCars';
    const isMadeInUzb = subCategoryName === 'madeInUzb';

    const initVals: any = {
        manufacturer: null,
        model: null,
        year: null,
        body: null,
        transmission: null,
        drive: null,
        engine_type: null,
        engine_capacity: '',
        mileage: '',
        broken: false
    };

    if (!isSearch) initVals.title = '';
    if (isMadeInUzb) initVals.position = null;

    const dispatch = useDispatch();

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
    const {handleInput, handleCheckbox, handleOptionCheckbox} = useHandlers(values, setValues);

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
                        model: value
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
                            model: values.model,
                            year: value,
                            body: valsByYear.body
                        };

                        // normalize positions structure
                        valsByYear.positions = valsByYear.positions.map(pos => {
                            const vals = {id: pos.id, name: pos.name};
                            Object.keys(pos).forEach(k => {
                                if (Array.isArray(pos[k]) && !!pos[k].length) {
                                    const [valKey] = Object.keys(pos[k][0]);
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
                            model: values.model
                        };
                    }
                }
                if (name === 'position') {
                    const valsByPosition = {};

                    if (value) {
                        Object.keys(value).forEach(key => {
                            if (Array.isArray(value[key])) {
                                valsByPosition[key] = [...value[key]];
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
                            model: values.model,
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
                            model: values.model,
                            year: values.year,
                            body: values.body
                        };
                    }
                }
            }
            if (isForeignCars && name === 'manufacturer') newVals.model = null;

            setValues(newVals);
            isMadeInUzb && setTouched({});
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        setRequireVals(
            values,
            setValues,
            filters,
            subCategoryName
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
                    title={t('parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    {!isSearch && (
                        <Grid item xs={6}>
                            <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                        </Grid>
                    )}
                    <Grid container spacing={2}>
                        {isPreview
                         ? <PreviewValues t={t} values={values}/>
                         : <>
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
                                     disableRequire={isSearch}
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
                                     disableRequire={isSearch}
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
                                     values={values}
                                     onBlur={handleBlur}
                                     disableRequire={isSearch}
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
                                             t={t}
                                             values={values}
                                             bodies={filters.body}
                                             disableRequire={isSearch}
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
                                                 t={t}
                                                 name='position'
                                                 values={values}
                                                 onBlur={handleBlur}
                                                 items={valuesByYear.positions}
                                                 disableRequire={isSearch}
                                                 handleSelect={handleSelect}
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
                                                     t={t}
                                                     name='transmission'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.transmission}
                                                     disableRequire={isSearch}
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
                                                     t={t}
                                                     name='drive'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.drive}
                                                     disableRequire={isSearch}
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
                                                     name='engine_type'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.engine_type}
                                                     disableRequire={isSearch}
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
                                                     value={values.engine_capacity}
                                                     disableRequire={isSearch}
                                                     onChange={handleInput}
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
                                                     value={values.mileage ?? ''}
                                                     disableRequire={isSearch}
                                                     onChange={handleInput}
                                                     errorMsg={getErrorMsg(errors.mileage, touched.mileage, t)}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 justify='flex-start'
                                                 sm={4}
                                                 xs={12}
                                             >
                                                 <CheckboxSelect
                                                     t={t}
                                                     name='broken'
                                                     labelText='broken'
                                                     checked={values.broken}
                                                     onChange={handleCheckbox}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={12}
                                             >
                                                 <Typography variant='h5'>
                                                     <strong>{t('filters:comfort_title')}</strong>
                                                 </Typography>
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 sm={4}
                                                 xs={12}
                                             >
                                                 <DropDownSelect
                                                     t={t}
                                                     name='climate'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.climate}
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
                                                     t={t}
                                                     name='power_steering'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.power_steering}
                                                     handleSelect={handleSelect}
                                                 />
                                             </Grid>
                                             <Grid item container xs={12}>
                                                 <Grid
                                                     item
                                                     container
                                                     sm={4}
                                                     xs={12}
                                                 >
                                                     <OptionsSelect
                                                         t={t}
                                                         name='power_windows'
                                                         values={values}
                                                         options={filters.power_windows}
                                                         handleOptionCheckbox={handleOptionCheckbox}
                                                     />
                                                 </Grid>
                                                 <Grid
                                                     item
                                                     container
                                                     sm={4}
                                                     xs={12}
                                                 >
                                                     <OptionsSelect
                                                         t={t}
                                                         name='steering'
                                                         values={values}
                                                         options={filters.steering}
                                                         handleOptionCheckbox={handleOptionCheckbox}
                                                     />
                                                 </Grid>
                                                 <Grid
                                                     item
                                                     container
                                                     sm={4}
                                                     xs={12}
                                                 >
                                                     <OptionsSelect
                                                         t={t}
                                                         name='seat_heating'
                                                         values={values}
                                                         options={filters.seat_heating}
                                                         handleOptionCheckbox={handleOptionCheckbox}
                                                     />
                                                 </Grid>
                                                 <Grid
                                                     item
                                                     container
                                                     sm={4}
                                                     xs={12}
                                                 >
                                                     <OptionsSelect
                                                         t={t}
                                                         name='adjustable_seats'
                                                         values={values}
                                                         options={filters.adjustable_seats}
                                                         handleOptionCheckbox={handleOptionCheckbox}
                                                     />
                                                 </Grid>
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 sm={4}
                                                 xs={12}
                                                 alignItems='flex-end'
                                             >
                                                 <DropDownSelect
                                                     t={t}
                                                     multiple
                                                     name='comfort'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.comfort}
                                                     handleSelect={handleSelect}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={12}
                                             >
                                                 <Typography variant='h5'>
                                                     <strong>{t('filters:salon')}</strong>
                                                 </Typography>
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 sm={4}
                                                 xs={12}
                                             >
                                                 <DropDownSelect
                                                     t={t}
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
                                                     t={t}
                                                     name='upholstery'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.upholstery}
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
                                                     t={t}
                                                     multiple
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
                                                     <strong>{t('filters:driving_assistance')}</strong>
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
                                                     t={t}
                                                     multiple
                                                     name='assistance'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.assistance}
                                                     handleSelect={handleSelect}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 xs={12}
                                             >
                                                 <OptionsSelect
                                                     t={t}
                                                     name='parking'
                                                     values={values}
                                                     options={filters.parking}
                                                     handleOptionCheckbox={handleOptionCheckbox}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={12}
                                             >
                                                 <Typography variant='h5'>
                                                     <strong>{t('filters:safety_title')}</strong>
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
                                                     t={t}
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
                                                     t={t}
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
                                                 xs={12}
                                             >
                                                 <OptionsSelect
                                                     t={t}
                                                     name='anti_theft'
                                                     values={values}
                                                     options={filters.anti_theft}
                                                     handleOptionCheckbox={handleOptionCheckbox}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={12}
                                             >
                                                 <Typography variant='h5'>
                                                     <strong>{t('filters:visibility')}</strong>
                                                 </Typography>
                                             </Grid>
                                             <Grid
                                                 item
                                                 container
                                                 sm={4}
                                                 xs={12}
                                             >
                                                 <DropDownSelect
                                                     t={t}
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
                                                     t={t}
                                                     multiple
                                                     name='view'
                                                     labelTxt='car_view'
                                                     values={values}
                                                     onBlur={handleBlur}
                                                     items={filters.view}
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
                                                     t={t}
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
};