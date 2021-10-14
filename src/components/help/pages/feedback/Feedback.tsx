import {FC, useContext, useState} from 'react';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import {useTranslation} from 'react-i18next';
import {Button, Grid, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {getErrorMsg, phonePrepare} from '@src/helpers';
import {AuthCtx, ErrorCtx} from '@src/context';
import {useHandlers} from '@src/hooks';
import {useStyles} from './useStyles';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from 'react-dom';
import {fieldRequiredTxt, invalidFormat} from '@root/validation_schemas/validateMessages';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {bottomDashRegEx} from '@src/common_data/reg_exs';
import {Publish} from '@material-ui/icons';

export const Feedback: FC = () => {
    const {user} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const hasPhone = user.phone !== '';
    const {t} = useTranslation('help');
    const [file, setFile] = useState(null);

    const onSubmit = async (values) => {
        try {
            const form = new FormData();
            const {
                name,
                email,
                phone,
                message
            } = values;

            if (file) form.append('files[]', file);
            if (email !== '') form.append('email', email);

            form.append('message', message);
            form.append('name', hasPhone ? user.name : name);
            form.append('phone', hasPhone ? user.phone : phonePrepare(phone));

            await userAPI.feedback(form);
            unstable_batchedUpdates(() => {
                setFile(null);
                setTouched({});
                setValues(initialValues);
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const initialValues = {
        name: '',
        email: '',
        message: '',
        phone: '+998(__) ___ __ __'
    };

    const feedbackSchema = object({
        message: string().test('text', fieldRequiredTxt, val => !!val && val.trim() !== ''),
        email: string()
            .email('invalidFormat')
            .test('text', fieldRequiredTxt, val => !!val && val.trim() !== '')
    });

    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema: hasPhone
            ? feedbackSchema
            : feedbackSchema.concat(object({
                name: string()
                    .test('text', fieldRequiredTxt, val => !!val && val.trim() !== ''),
                phone: string()
                    .test('phone', invalidFormat, val => !RegExp(bottomDashRegEx).test(val))
            }))
    });

    const {
        values,
        setValues,
        setTouched,
        errors,
        touched
    } = formik;

    const {handleInput} = useHandlers(values, setValues);

    const handleUpload = (event) => {
        setFile(event.target.files[0]);
    };

    const handleCancel = () => {
        setFile(null);
    };

    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={12} lg={7} className={classes.root}>
            <Typography variant='h6'>
                {t('feedback.name')}
            </Typography>
            <Typography variant='subtitle1'>
                {t('feedback.description')}
            </Typography>
            <div className="feedback-form">
                <CustomFormikProvider formik={formik}>
                    {!hasPhone && (
                        <>
                            <FormikField
                                t={t}
                                required
                                name='name'
                                value={values.name}
                                onChange={handleInput}
                                labelText={t('common:personalData')}
                                placeholder={t('common:enterName')}
                                errorMsg={getErrorMsg(errors.name, touched.name, t)}
                            />
                            <FormikField
                                t={t}
                                required
                                name='phone'
                                type='tel'
                                labelText={t('common:phoneNumber')}
                                placeholder={t('common:enterName')}
                                value={values.phone}
                                onChange={handleInput}
                                errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                            />
                        </>
                    )}
                    <FormikField
                        t={t}
                        required
                        name='email'
                        type='email'
                        labelText={t('common:mail')}
                        placeholder="slondo@mail.com"
                        value={values.email}
                        onChange={handleInput}
                        errorMsg={getErrorMsg(errors.email, touched.email, t)}
                    />
                    <FormikTextarea
                        rows={10}
                        limit={3000}
                        name='message'
                        value={values.message}
                        onChange={handleInput}
                        labelTxt={t('post:enterQuestion')}
                        errorMsg={getErrorMsg(errors.message, touched.message, t)}
                    />
                    <div className='upload-submit'>
                        <input
                            type="file"
                            name='file-upload'
                            id="file-upload"
                            onChange={handleUpload}
                            style={{display: 'none'}}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <label className='file-upload' htmlFor='file-upload'>
                                    <Button
                                        variant="text"
                                        component="span"
                                        aria-label="upload picture"
                                        startIcon={
                                            <Publish className={classes.icon} />
                                        }
                                        classes={{root: classes.button}}
                                    >
                                        <Typography variant='subtitle1'>
                                            {t('common:photoOrScreenshot')}
                                        </Typography>
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomButton type='submit'>
                                    {t('common:send')}
                                </CustomButton>
                            </Grid>
                            {file && (
                                <Grid item xs={12}>
                                    <div className='img-wrapper'>
                                        <img
                                            className='file'
                                            alt='feedback-img'
                                            src={URL.createObjectURL(file)}
                                        />
                                        <CustomButton
                                            onClick={handleCancel}
                                        >
                                            {t('common:cancel')}
                                        </CustomButton>
                                    </div>
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </CustomFormikProvider>
            </div>
        </Grid>
    );
};
