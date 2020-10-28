import React, {useState} from "react"
import {Formik, Form} from "formik"
import {Router} from "@root/i18n"
import {MenuItem, Typography} from "@material-ui/core"
import {ButtonComponent} from "@src/components/elements/button/Button"
import {CustomFormikMenu} from "@src/components/elements/custom_formik_menu/CustomFormikMenu"
import {object, number} from 'yup'
import {useStyles} from './useStyles'

const initValues = {
    type: {
        id: null,
        desc: 'Выберите тип',
    },
    category: {
        id: null,
        desc: 'Выберите категорию'
    }
};

export const CreateAdModalForm = (props) => {
    const {handleCloseModal} = props;

    const [typeAnchor, setTypeAnchor] = useState(null);
    const [estateAnchor, setEstateAnchor] = useState(null);

    const validationSchema = object({
        type: object({
            id: number().nullable().required('Выберите тип объявления!')
        }),
        category: object({
            id: number().nullable().required('Выберите категорию!')
        })
    });

    const handleMenuOpen = (anchor) => (e) => {
        anchor(e.currentTarget)
    };

    const handleMenuClose = (anchor) => () => {
        anchor(null);
    };

    const handleClickMenuItem = (handleSetValue, values, newValue) => () => {
        handleSetValue({...values, ...newValue});
    };

    const submit = () => {
        Router.push('/create_advertisement');
    };

    const classes = useStyles();
    return (
        <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={submit}>
            {(props) => {
                const {
                    errors,
                    touched,
                    values,
                    setValues,
                    handleBlur,
                } = props;
                return (
                    <Form className={classes.root}>
                        <div className='menu-btns'>
                            <div>
                                <Typography>{errors.type && touched.type ? errors.type.id : ''}</Typography>
                                <ButtonComponent
                                    onClick={handleMenuOpen(setTypeAnchor)}>{values.type.desc}</ButtonComponent>
                                <CustomFormikMenu
                                    className={classes.menu}
                                    name={values}
                                    anchorEl={typeAnchor}
                                    open={Boolean(typeAnchor)}
                                    onClose={handleMenuClose(setTypeAnchor)}
                                    setValues={setValues}
                                >
                                    <MenuItem
                                        value={1}
                                        id='Объявление'
                                        onClick={handleClickMenuItem(setValues, values, {
                                            type: {
                                                id: 1,
                                                desc: 'Объявление'
                                            }
                                        })}
                                        onBlur={handleBlur}
                                    >
                                        <Typography>Объявление</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        value={2}
                                        id='Торг'
                                        onClick={handleClickMenuItem(setValues, values, {
                                            type: {
                                                id: 2,
                                                desc: 'Торг'
                                            }
                                        })}
                                        onBlur={handleBlur}
                                    >
                                        <Typography>Торг</Typography>
                                    </MenuItem>
                                </CustomFormikMenu>
                            </div>
                            <div>
                                <Typography>{errors.category && touched.category ? errors.category.id : ''}</Typography>
                                <ButtonComponent
                                    onClick={handleMenuOpen(setEstateAnchor)}>{values.category.desc}</ButtonComponent>
                                <CustomFormikMenu
                                    name={values}
                                    anchorEl={estateAnchor}
                                    open={Boolean(estateAnchor)}
                                    onClose={handleMenuClose(setEstateAnchor)}
                                    setValues={setValues}
                                >
                                    <MenuItem
                                        id='Недвижимость'
                                        value={3}
                                        onBlur={handleBlur}
                                        onClick={handleClickMenuItem(setValues, values, {
                                            category: {
                                                id: 3,
                                                desc: 'Недвижимость'
                                            }
                                        })}
                                    >
                                        <Typography>Недвижимость</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        id='Автомобили'
                                        value={4}
                                        onBlur={handleBlur}
                                        onClick={handleClickMenuItem(setValues, values, {
                                            category: {
                                                id: 4,
                                                desc: 'Автомобили'
                                            }
                                        })}
                                    >
                                        <Typography>Автомобили</Typography>
                                    </MenuItem>
                                </CustomFormikMenu>
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
            }}
        </Formik>
    )
};