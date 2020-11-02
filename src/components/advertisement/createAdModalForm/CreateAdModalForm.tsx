import React, {FC, useState} from "react";
import {Formik, Form, FormikProps} from "formik";
import {Router} from "@root/i18n";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
// import {adTypeAndCtgrySchema} from "@src/validationSchemas";
import {RootState} from "@src/redux/rootReducer";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {useStyles} from './useStyles';


export const adTypesList = [
    {id: 1, name: 'Объявление'},
    {id: 2, name: 'Торг'},
    {id: 3, name: 'Продвинутый торг'},
];

const initValues = {
    adType: {
        id: null,
        name: 'Выберите тип'
    },
    adCategory: {
        id: null,
        name: 'Выберите категорию'
    }
};

export const CreateAdModalForm: FC<any> = (props) => {
    const {handleCloseModal} = props;

    const dispatch = useDispatch();
    const categoriesList = useSelector(({categories}: RootState) => categories.list);

    const [typeAnchor, setTypeAnchor] = useState(null);
    const [categoryAnchor, setCategoryAnchor] = useState(null);

    const handleMenuOpen = (setAnchor) => (e) => {
        setAnchor(e.currentTarget);
    };

    const handleMenuClose = (setAnchor) => () => {
        setAnchor(null);
    };

    const submit = (values) => {
        // dispatch(setAdvrtCtgryAction(values));
        Router.push('/create_advertisement');
        handleCloseModal();
    };

    const classes = useStyles();
    return (
        <Formik initialValues={initValues} validationSchema={adTypeAndCtgrySchema} onSubmit={submit}>
            {
                ({
                     errors,
                     touched,
                     values,
                     setValues,
                     handleBlur
                 }: FormikProps<any> & { errors: any }) => {

                    const handleClickMenuItem = (valueName, setAnchor) => (newValue) => () => {
                        setValues({...values, [valueName]: newValue});
                        handleMenuClose(setAnchor)();
                    };

                    return (
                        <Form className={classes.root}>
                            <div className='menu-btns'>
                                <div>
                                    <Typography>{errors.adType && touched.adType ? errors.adType.id : ''}</Typography>
                                    <ButtonComponent onClick={handleMenuOpen(setTypeAnchor)}>
                                        {values.adType.name}
                                    </ButtonComponent>
                                    <CustomMenu
                                        items={adTypesList}
                                        open={Boolean(typeAnchor)}
                                        anchorEl={typeAnchor}
                                        onBlur={handleBlur}
                                        onClose={handleMenuClose(setTypeAnchor)}
                                        onClick={handleClickMenuItem('adType', setTypeAnchor)}
                                    />
                                </div>
                                <div>
                                    <Typography>{errors.adCategory && touched.adCategory ? errors.adCategory.id : ''}</Typography>
                                    <ButtonComponent onClick={handleMenuOpen(setCategoryAnchor)}>
                                        {values.adCategory.name}
                                    </ButtonComponent>
                                    <CustomMenu
                                        items={categoriesList}
                                        anchorEl={categoryAnchor}
                                        open={Boolean(categoryAnchor)}
                                        onBlur={handleBlur}
                                        onClose={handleMenuClose(setCategoryAnchor)}
                                        onClick={handleClickMenuItem('adCategory', setCategoryAnchor)}
                                    />
                                </div>
                            </div>
                            <div className='form-btns'>
                                <ButtonComponent onClick={handleCloseModal}>
                                    <Typography>Отмена</Typography>
                                </ButtonComponent>
                                <ButtonComponent type='submit'>
                                    <Typography>Продолжить</Typography>
                                </ButtonComponent>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )
};