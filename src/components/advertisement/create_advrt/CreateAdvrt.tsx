import React, {FC, useEffect, useState} from 'react';
import {Grid, Hidden, Container, Typography} from '@material-ui/core';
import {userAPI} from '@src/api/api';
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
    title: '',
    price: '',
    safe_deal: false,
    delivery: false,
    exchange: false,
    location: null,
    files: [],
    description: '',
    phone: '',
};

export const CreateAdvrt: FC<void> = () => {
    const {createAdvrt, locations} = useSelector((store: RootState) => store);

    const [isPreview, setIsPreview] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const prepareData = (data: CreateAdFields) => {
        const form = new FormData();
        const {
            safe_deal,
            delivery,
            exchange,
            location,
            files,
            ...otherValues
        } = data;

        form.set('ads_type_id', createAdvrt.adType.id.toString());
        form.set('parent_categories_id', createAdvrt.category.id.toString());
        form.set('safe_deal', Number(safe_deal).toString());
        form.set('delivery', Number(delivery).toString());
        form.set('exchange', Number(exchange).toString());
        form.set('year', '2018');
        files.forEach(({file}: any) => form.set('files[]', file, file.name));

        for (const key in location) {
            if (typeof location[key] === 'number') {
                form.set(key, Number(location[key]).toString());
            }
        }

        for (const key in otherValues) {
            if (otherValues[key]) {
                if (typeof otherValues[key] === 'string') {
                    form.set(key, otherValues[key]);
                } else {
                    form.set(`${key}_id`, otherValues[key].id);
                }
            }
        }

        // for (const key of form.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

        return form;
    };

    const onSubmit = async (values: CreateAdFields) => {
        try {
            if (!isPreview) {
                setIsPreview(true);
            } else {
                const data = prepareData(values);
                await userAPI.createAdvrt(data);
                // setIsSuccess(true);
                console.log('success');
            }
        } catch (e) {
            console.log(e);
        }
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
        setIsPreview(value);
    };

    const handleCheckboxChange = (valName) => ({target}) => {
        setValues({...values, [valName]: target.checked});
    };

    const handleParamsCheckbox = (valueName, value) => () => {
        if (values[valueName]) {
            if (values[valueName].some(val => val.id === value.id)) {
                values[valueName].map((val, index) => {
                    if (val.id === value.id) {
                        values[valueName].splice(index, 1)
                    }
                });
                setValues({...values});
            } else {
                setValues({
                        ...values,
                        [valueName]: [...values[valueName], value]
                    }
                );
            }
        } else {
            setValues({...values, [valueName]: [value]});
        }
    };

    const handleMenuItem = (valueName) => (newValue, setAnchor) => () => {
        setAnchor(null);

        setValues({
            ...values,
            [valueName]: newValue
        });

        // Reset sub props in values
        Object.keys(newValue).map(key => {
            if (values[key]) {
                setValues({
                    ...values,
                    [valueName]: newValue,
                    [key]: {id: null, name: 'Не выбрано', ...newValue[key]}
                })
            }
        });
    };

    const handleListItem = (valueName, value) => () => {
        if (values[valueName] && values[valueName].id === value.id) {
            delete values[valueName];

            setValues({...values});
        } else {
            setValues({
                ...values,
                [valueName]: value
            });
        }
    };

    useEffect(() => {
        setErrors({});
        setValues({...initFields});
        isPreview && setIsPreview(false);
    }, [createAdvrt.data.id, createAdvrt.data.name]);

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
                                                locations={locations}
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
                                        disabled={!(createAdvrt.adType.id && createAdvrt.category.id)}
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