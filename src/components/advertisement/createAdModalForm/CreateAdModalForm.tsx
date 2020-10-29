import React, {useState} from "react";
import {Formik, Form, FormikProps} from "formik";
import {Router} from "@root/i18n";
import {useDispatch, useSelector} from "react-redux";
import {setAdOrLotCtgryAction} from '@src/redux/slices/createAdOrLotSlice';
import {Menu, MenuItem, Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {adTypeAndCtgrySchema} from "@src/validation_schemas/validationSchemas";
import {RootState} from "@src/redux/rootReducer";
import {useStyles} from './useStyles';

const initValues = {
    type: {
        isLot: null,
        name: 'Выберите тип'
    },
    category: {
        id: null,
        name: 'Выберите категорию'
    }
};

export const CreateAdModalForm = (props) => {
    const {handleCloseModal} = props;

    const dispatch = useDispatch();
    const categoriesList = useSelector(({categories}: RootState) => categories.list);

    const [typeAnchor, setTypeAnchor] = useState(null);
    const [estateAnchor, setEstateAnchor] = useState(null);

    const handleMenuOpen = (anchor) => (e) => {
        anchor(e.currentTarget)
    };

    const handleMenuClose = (anchor) => () => {
        anchor(null);
    };

    const handleClickMenuItem = (handleSetValue, values, newValue) => () => {
        handleSetValue({...values, ...newValue});
    };
    const submit = (values) => {
        dispatch(setAdOrLotCtgryAction({
            isLot: values.type.isLot,
            ...values
        }));
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
                 }: FormikProps<any> & { errors: any }) => (
                    <Form className={classes.root}>
                        <div className='menu-btns'>
                            <div>
                                <Typography>{errors.type && touched.type ? errors.type.isLot : ''}</Typography>
                                <ButtonComponent onClick={handleMenuOpen(setTypeAnchor)}>
                                    {values.type.name}
                                </ButtonComponent>
                                <Menu
                                    className={classes.menu}
                                    anchorEl={typeAnchor}
                                    open={Boolean(typeAnchor)}
                                    onClose={handleMenuClose(setTypeAnchor)}
                                >
                                    <MenuItem
                                        id='Объявление'
                                        onClick={handleClickMenuItem(setValues, values, {
                                            type: {
                                                name: 'Объявление',
                                                isLot: false
                                            }
                                        })}
                                        onBlur={handleBlur}
                                    >
                                        <Typography>Объявление</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        id='Торг'
                                        onClick={handleClickMenuItem(setValues, values, {
                                            type: {
                                                name: 'Торг',
                                                isLot: true
                                            }
                                        })}
                                        onBlur={handleBlur}
                                    >
                                        <Typography>Торг</Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <Typography>{errors.category && touched.category ? errors.category.id : ''}</Typography>
                                <ButtonComponent onClick={handleMenuOpen(setEstateAnchor)}>
                                    {values.category.name}
                                </ButtonComponent>
                                <Menu
                                    anchorEl={estateAnchor}
                                    open={Boolean(estateAnchor)}
                                    onClose={handleMenuClose(setEstateAnchor)}
                                >
                                    {
                                        categoriesList.map((category) => {
                                            const {id, name} = category
                                            return (
                                                <MenuItem
                                                    key={id}
                                                    id={name}
                                                    value={id}
                                                    onBlur={handleBlur}
                                                    onClick={handleClickMenuItem(
                                                        setValues,
                                                        values,
                                                        {category}
                                                    )}
                                                >
                                                    <Typography>{name}</Typography>
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Menu>
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
        </Formik>
    )
};