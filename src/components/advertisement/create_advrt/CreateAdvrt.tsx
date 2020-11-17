import React, {FC, useEffect, useState} from 'react';
import {Grid, Hidden, Container, Typography} from '@material-ui/core';
import {AdvrtForm} from './advrt_form/AdvrtForm';
import {SuccessAdvrt} from './success_advrt/SuccessAdvrt';
import {CreateAdFields} from "@root/interfaces/Advertisement";
import {createAdvrtSchema} from "@root/validation_schemas/createAdvrtSchema";
import {useFormik, FormikProvider} from "formik";
import {useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {MainLayout} from "@src/components/MainLayout";
// styles
import {useStyles} from './useStyles';


const initFields: CreateAdFields = {
    adType: {
        id: null,
        name: ''
    },
    category: {
        id: null,
        name: ''
    },
    title: '',
    safe_deal: false,
    delivery: false,
    exchange: false,
    location: null,
    files: [],
    description: '',
    phone: '',
    adsParams: {}
};

export const CreateAdvrt: FC = () => {
    const {createAdvrt} = useSelector((store: RootState) => store);

    const [isPreview, setIsPreview] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = () => {
        isPreview
            ? console.log('submit')
            : setIsPreview(true)
    };

    const formik = useFormik({
        initialValues: initFields,
        validationSchema: createAdvrtSchema,
        onSubmit
    });

    const {
        setValues,
        values,
        errors,
        setErrors,
        touched,
        handleBlur,
    } = formik;

    const handlePreview = (value) => () => {
        setIsPreview(value)
    };

    const handleCheckboxChange = (valName) => ({target}) => {
        setValues({...values, [valName]: target.checked});
    };

    const handleParamsCheckbox = (valueName, value) => () => {
        const {adsParams} = values;
        if (adsParams[valueName]) {
            if (adsParams[valueName].some(val => val.id === value.id)) {
                adsParams[valueName].map((val, index) => {
                    if (val.id === value.id) {
                        adsParams[valueName].splice(index, 1)
                    }
                });
                setValues({
                        ...values,
                        adsParams: {...adsParams}
                    }
                );
            } else {
                setValues({
                        ...values,
                        adsParams: {
                            ...adsParams,
                            [valueName]: [
                                ...adsParams[valueName],
                                value
                            ]
                        }
                    }
                );
            }
        } else {
            setValues({
                    ...values,
                    adsParams: {
                        ...adsParams,
                        [valueName]: [value]
                    }
                }
            );
        }
    };

    const handleMenuItem = (valueName) => (newValue, setAnchor) => () => {
        setAnchor(null);

        setValues({
            ...values,
            adsParams: {
                ...values.adsParams,
                [valueName]: newValue
            }
        });

        // Reset sub props in values
        Object.keys(newValue).map(key => {
            if (values.adsParams[key]) {
                setValues({
                    ...values,
                    adsParams: {
                        ...values.adsParams,
                        [valueName]: newValue,
                        [key]: {id: null, name: 'Не выбрано', ...newValue[key]}
                    }
                })
            }
        });
    };

    const handleListItem = (valueName, value) => () => {
        if (values.adsParams[valueName] && values.adsParams[valueName].id === value.id) {
            delete values.adsParams[valueName];

            setValues({
                ...values,
                adsParams: {
                    ...values.adsParams
                }
            });
        } else {
            setValues({
                ...values,
                adsParams: {
                    ...values.adsParams,
                    [valueName]: value
                }
            });
        }
    };

    useEffect(() => {
        setErrors({});
        isPreview && setIsPreview(false);
        setValues({...initFields, adType: createAdvrt.adType, category: createAdvrt.data});
    }, [createAdvrt.category.id, createAdvrt.data.id, createAdvrt.data.name]);

    console.log(values)
    const classes = useStyles();
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9}>
                        <FormikProvider value={formik}>
                            <form onSubmit={formik.handleSubmit}>
                                {
                                    isSuccess
                                        ? <SuccessAdvrt/>
                                        : (
                                            <AdvrtForm
                                                isPreview={isPreview}
                                                setIsPreview={setIsPreview}
                                                createAdvrt={createAdvrt}
                                                errors={errors}
                                                touched={touched}
                                                values={values}
                                                setValues={setValues}
                                                handleBlur={handleBlur}
                                                handleMenuItem={handleMenuItem}
                                                handleListItem={handleListItem}
                                                handleParamsCheckbox={handleParamsCheckbox}
                                                handleCheckboxChange={handleCheckboxChange}
                                            />
                                        )
                                }
                                <div className={classes.nextButtonBlock}>
                                    {
                                        isPreview && (
                                            <ButtonComponent
                                                className={classes.nextButton}
                                                onClick={handlePreview(false)}
                                            >
                                                <Typography>
                                                    Назад
                                                </Typography>
                                            </ButtonComponent>
                                        )
                                    }
                                    <ButtonComponent
                                        type='submit'
                                        className={classes.nextButton}
                                    >
                                        <Typography>
                                            {
                                                isPreview
                                                    ? 'Создать'
                                                    : 'Далее'
                                            }
                                        </Typography>
                                    </ButtonComponent>
                                </div>
                            </form>
                        </FormikProvider>
                    </Grid>
                    <Hidden smDown>
                        <Grid
                            item
                            md={3}
                            container
                            justify="flex-end"
                            className={classes.adBanner}
                        >
                            <Grid item md={12}>
                                <div className="right-banner"/>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </MainLayout>
    )
}