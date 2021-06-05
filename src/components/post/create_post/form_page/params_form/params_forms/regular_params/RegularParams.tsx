import {FC, Fragment, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {excludeFields, optionFields} from '@src/common_data/form_fields';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {getErrorMsg, isRequired} from '@src/helpers';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useStyles} from './useStyles';


export const RegularParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        onSubmit,
        filters,
        isPreview,
        currentFormIndex,
        handleFormOpen
    } = props;

    const initVals: any = {
        title: ''
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

    const {handleSelect} = useHandlers(values, setValues);

    const setRequireVals = () => {
        const reqVals = {};
        Object.keys(filters).forEach(k => {
            if (isRequired(k)) reqVals[k] = null;
        });
        setValues({...values, ...reqVals});
    };

    useEffect(() => {
        setRequireVals();
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
                    <Grid item xs={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                    <Grid container spacing={2}>
                        {isPreview
                         ? Object.keys(values).map(key => {
                                if (!!values[key]) {
                                    let value = values[key];
                                    if (Object.keys(values[key]).length) {
                                        if (values[key].name) {
                                            value = values[key].name;
                                            return (
                                                <Grid
                                                    item
                                                    key={key}
                                                    sm={4}
                                                    xs={12}
                                                >
                                                    <Typography variant="subtitle1">
                                                        <strong>
                                                            {t(`filters:${key}`)}:&nbsp;
                                                        </strong>
                                                        {value}
                                                    </Typography>
                                                </Grid>
                                            );
                                        }
                                    }
                                }
                            })
                         : getFields(filters)}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );

    function getFields(filters) {
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
                                 handleOptionCheckbox={() => console.log('')}
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
                        {!!values[key] && !!Object.keys(values[key]).length && getFields(values[key])}
                    </Fragment>
                );
            }
        });
    }
};