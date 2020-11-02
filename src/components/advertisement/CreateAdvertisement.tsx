import React, {FC, useState} from 'react';
import {Grid, Hidden, Container, Typography} from '@material-ui/core';
import {AdvertisementFormContent} from './advertisementFormContent/AdvertisementFormContent';
import {SuccessAdvertisement} from './successAdvertisement/SuccessAdvertisement';
import {AdvertisementProps} from "@root/interfaces/Advertisement";
import {createAdvrtSchema} from "@src/validationSchemas";
import {Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchAdDataForCreate, resetCreateAdvrtDataAction} from '@src/redux/slices/createAdvrtSlice';
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {PreviewAdvertisement} from './previewAdvertisement/PreviewAdvertisement';
import {i18n} from '@root/i18n';
// styles
import {useStyles} from './useStyles';
import {MainLayout} from "@src/components/MainLayout";


export const CreateAdvertisement: FC<AdvertisementProps> = () => {

    const store = useSelector((store: RootState) => store);

    const dispatch = useDispatch();

    const lang = i18n.language;

    const [isPreview, setIsPreview] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    const handlePreview = (value) => () => {
        setIsPreview(value)
    };

    const initVals = {
        adName: '',
        adType: {
            id: null,
            name: 'Тип объявления'
        },
        adCategory: {
            id: null,
            name: 'Выберите категорию',
            childs: []
        },
        adSubCategory: {
            id: null,
            name: 'Выберите под категорию'
        },
        safeBuy: false,
        haveDelivery: false,
        haveExch: false,
        location: null,
        photos: [],
        description: '',
        phone: ''
    };

    const submit = () => {
        isPreview
            ? console.log('submit')
            : setIsPreview(true)
    };

    const classes = useStyles();
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9}>
                        <Formik initialValues={initVals} validationSchema={createAdvrtSchema} onSubmit={submit}>
                            {
                                ({
                                     errors,
                                     touched,
                                     values,
                                     setValues,
                                     handleBlur,
                                 }) => {

                                    const handleCheckboxChange = (event) => {
                                        setValues(event.target.checked)
                                    };

                                    const handleClickMenuItem = (valueName) => (newValue, setAnchor) => () => {
                                        setValues({...values, [valueName]: newValue});

                                        setAnchor(null);

                                        // Fetch data when sub category chosen
                                        if (valueName === 'adSubCategory') {
                                            dispatch(fetchAdDataForCreate({
                                                lang,
                                                ctgryID: values.adCategory.id,
                                                subCtgryID: newValue.id,
                                            }))
                                        }
                                    };

                                    const handleClickMenuCategory = (newValue, setAnchor) => () => {
                                        setValues({
                                            ...initVals,
                                            adType: values.adType,
                                            adCategory: newValue,
                                            adSubCategory: initVals.adSubCategory
                                        });

                                        dispatch(resetCreateAdvrtDataAction())

                                        setAnchor(null);
                                    };

                                    return (
                                        <Form>
                                            {
                                                isSuccess
                                                    ? <SuccessAdvertisement/>
                                                    : (
                                                        isPreview
                                                            ? <PreviewAdvertisement/>
                                                            : <AdvertisementFormContent
                                                                store={store}
                                                                errors={errors}
                                                                touched={touched}
                                                                values={values}
                                                                handleBlur={handleBlur}
                                                                handleClickMenuItem={handleClickMenuItem}
                                                                handleCheckboxChange={handleCheckboxChange}
                                                                handleClickMenuCategory={handleClickMenuCategory}
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
                                                                ? 'Отпарвить на модерацию'
                                                                : 'Далее'
                                                        }
                                                    </Typography>
                                                </ButtonComponent>
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
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
