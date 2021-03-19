import React, {FC, Fragment} from "react";
import {Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {excludedKeys, numericFields} from "@src/common_data/form_fields";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {ParametersIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {numberPrettier, prepareDataForCreate} from "@src/helpers";
import {numberRegEx} from "@src/common_data/reg_exs";
import {useStyles} from "./useStyles";
import {useFormik} from "formik";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";


type RegularFormPropsType = {
    isPreview: boolean,
    mark: string,
    filters,
    currentFormIndex: number,
    type,
    subCategory,
    post,
    setPost,
    handleNextFormOpen: () => void,
    handleFormOpen: (k) => () => void,
} & WithT;

export const CarForm: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        mark,
        filters,
        isPreview,
        handleFormOpen,
        currentFormIndex,
        handleNextFormOpen,
        type,
        subCategory,
        post,
        setPost
    } = props;

    const formIndex = 4;

    const onSubmit = (values) => {
        const createData = prepareDataForCreate({...values});
        post.title = values.title;
        post[mark] = {
            ...post[mark],
            ...createData,
            [`${mark}_id`]: subCategory ? subCategory.id : '',
            type_id: type ? type.id : createData.type_id ?? ''
        };
        setPost({...post});
        handleNextFormOpen();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {
            title: ''
        },
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some(n => n === name);

        if (isNumericField) {
            if (numberRegEx.test(value)) {
                if (name !== 'year') {
                    value = numberPrettier(value);
                }
                values[name] = value;
            }
        } else {
            values[name] = value;
        }

        setValues({...values});
    };

    const classes = useStyles();
    return (
        <CustomAccordion
            icon={<ParametersIcon/>}
            isPreview={isPreview}
            open={currentFormIndex === formIndex}
            isEditable={currentFormIndex < formIndex}
            handleEdit={handleFormOpen(formIndex)}
            title={t('parameters')}
            nextButtonTxt={t('appearance')}
        >
            <div className={classes.root}>
                <div className='title-wrapper'>
                    {isPreview
                        ? <Typography variant="subtitle1">
                            <strong>
                                {t('title')}:&nbsp;
                            </strong>
                            {values.title}
                        </Typography>
                        : <CustomFormikField
                            t={t}
                            name='title'
                            style={{width: '50%'}}
                            errors={errors}
                            touched={touched}
                            value={values.title}
                            onChange={handleInput}
                            placeholder={t('exampleTitle')}
                            className={errors.title && touched.title ? 'error-border' : ''}
                        />}
                </div>
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
                                                        {t(key)}:&nbsp;
                                                    </strong>
                                                    {value}
                                                </Typography>
                                            </Grid>
                                        )
                                    }
                                }
                            }
                        })
                        : <div/>}
                </Grid>
            </div>
        </CustomAccordion>
    )
};