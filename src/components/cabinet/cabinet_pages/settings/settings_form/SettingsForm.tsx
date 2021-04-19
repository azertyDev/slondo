import React, {FC, useEffect} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {SettingsFormValidation} from '@src/components/cabinet/cabinet_pages/settings/settings_form/SettingsFormValidation';
import {useTranslation} from 'react-i18next';
import {cookieOpts, cookies, getErrorMsg} from '@src/helpers';
import {Box, Button, CircularProgress, Typography} from '@material-ui/core';
import {useStyles} from '@src/components/cabinet/cabinet_pages/settings/settings_form/useStyles';
import {userAPI} from '@src/api/api';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {signInAction} from '@root/src/redux/slices/userSlice';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';

type SettingsFormPropsType = {
    isEditable: boolean
}

export const SettingsForm: FC<SettingsFormPropsType> = ({ isEditable }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation(['cabinet']);
    const userInfo = useSelector((store: RootState) => store.user.info);

    const initUserInfo = {
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        available_days: ''
    };


    const onSubmit = async (fields) => {
        try {
            console.log(fields);
            const { name, surname } = fields;
            const newUserInfo = { ...userInfo, ...fields };

            await userAPI.changeUserInfo(name, surname);

            dispatch(signInAction(newUserInfo));
            cookies.set('slondo_user', newUserInfo, cookieOpts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const formik = useFormik({
        initialValues: initUserInfo,
        validationSchema: SettingsFormValidation,
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        setFieldValue,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting
    } = formik;

    useEffect(() => {
        setValues(userInfo);
    }, [userInfo]);

    const classes = useStyles();
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        className={classes.root}
                    >
                        <input
                            id="raised-button-file"
                            type="file"
                            name="avatar"
                            accept="image/jpeg"
                            hidden
                            onChange={(event) => {
                                setFieldValue('avatar', event.currentTarget.files[0]);
                            }}
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                        <Box m={2}>
                            <img
                                src={values.file}
                                alt={values.file}
                                height={200}
                                width={200}
                            />

                        </Box>
                        <CustomFormikField
                            name='name'
                            labelText={t('name')}
                            value={values.name}
                            onChange={handleChange}
                            disabled={isEditable}
                            errorMsg={getErrorMsg(errors.name, touched.name, t)}
                        />
                        <CustomFormikField
                            name='surname'
                            labelText={t('surname')}
                            value={values.surname}
                            onChange={handleChange}
                            disabled={isEditable}
                            errorMsg={getErrorMsg(errors.surname, touched.surname, t)}
                        />
                    </Box>
                    <div className={classes.wrapper}>
                        <Button
                            variant='contained'
                            type='submit'
                            onSubmit={onSubmit}
                            disabled={isSubmitting}
                            color='secondary'
                            size="large"
                            disableElevation
                        >
                            <Typography variant='subtitle1'>
                                Применить
                            </Typography>
                        </Button>
                        {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>
                </Form>
            </FormikProvider>
        </>
    );
};


