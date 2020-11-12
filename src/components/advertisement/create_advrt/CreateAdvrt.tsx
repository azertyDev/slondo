import React, {FC, useEffect, useState} from 'react';
import {Grid, Hidden, Container, Typography} from '@material-ui/core';
import {AdvrtForm} from './advrtForm/AdvrtForm';
import {SuccessAdvrt} from './successAdvrt/SuccessAdvrt';
import {AdvertisementProps} from "@root/interfaces/Advertisement";
import {createAdvrtSchema} from "@root/validation_schemas/createAdvrtSchema";
import {useFormik, FormikProvider} from "formik";
import {useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {MainLayout} from "@src/components/MainLayout";
// styles
import {useStyles} from './useStyles';


const initFields = {
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
    location: '',
    files: [],
    description: '',
    phone: '',
    adsParams: {}
};

export const CreateAdvrt: FC<AdvertisementProps> = () => {
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

    const handleClickMenuItem = (valueName) => (newValue, setAnchor) => () => {
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

    useEffect(() => {
        setErrors({});
        isPreview && setIsPreview(false);
        setValues({...values, adType: createAdvrt.adType, category: createAdvrt.data});
    }, [createAdvrt.category.id, createAdvrt.data.id, createAdvrt.data.name]);

    console.log(errors)
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
                                                handleClickMenuItem={handleClickMenuItem}
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