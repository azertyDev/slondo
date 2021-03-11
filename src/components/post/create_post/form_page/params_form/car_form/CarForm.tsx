import React, {FC, Fragment} from "react";
import {Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {excludedKeys, numericFields} from "@src/common_data/form_fields";
import {isRequired, paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {ParametersIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {numberPrettier, prepareDataForCreate} from "@src/helpers";
import {numberRegEx} from "@src/common_data/reg_exs";
import {useStyles} from "./useStyles";
import {useFormik} from "formik";


type RegularFormPropsType = {
    isPreview: boolean,
    mark: string,
    filters,
    handleFormOpen: (k) => () => void,
    currentFormIndex: number,
    titleComponent,
    type,
    subCategory,
    post,
    setPost,
} & WithT;

export const CarForm: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        mark,
        filters,
        isPreview,
        handleFormOpen,
        currentFormIndex,
        titleComponent,
        type,
        subCategory,
        post,
        setPost
    } = props;

    const formIndex = 4;
    const nextFormIndex = 3;

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
        handleFormOpen(nextFormIndex)();
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
                {titleComponent}
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