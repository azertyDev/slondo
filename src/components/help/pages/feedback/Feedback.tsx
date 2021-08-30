import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Form, FormikProvider, useFormik} from 'formik';
import {filterInputSchema} from '@root/validation_schemas/filterInputSchema';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {getErrorMsg} from '@src/helpers';


export const Feedback: FC = () => {
    const {t} = useTranslation('help');

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validationSchema: filterInputSchema,
        onSubmit
    });

    const {
        values,
        errors,
        touched
    } = formik;

    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.root}>
            <Typography variant='h6'>{t('feedback.name')}</Typography>
            <Typography variant='subtitle1'>
                {t('feedback.description')}
            </Typography>
            <div className="feedback-form">
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <FormikField
                                t={t}
                                labelText={t('common:personalData')}
                                placeholder={t('common:enterName')}
                                size="small"
                                InputLabelProps={{shrink: true}}
                            />
                            <FormikField
                                t={t}
                                labelText={t('common:mail')}
                                placeholder="example@gmail.com"
                                size="small"
                                InputLabelProps={{shrink: true}}
                            />
                            <FormikField
                                t={t}
                                labelText={t('common:phoneNumber')}
                                placeholder="+998  "
                                size="small"
                                InputLabelProps={{shrink: true}}
                            />
                        </div>
                        <div>
                            <FormikTextarea
                                rows={10}
                                limit={3000}
                                name='description'
                                value={values.description}
                                labelTxt={t('post:description')}
                                errorMsg={getErrorMsg(errors.description, touched.description, t)}
                            />
                        </div>
                        <div className='upload'>
                            <label className='file-upload'>
                                <Typography variant='subtitle1' gutterBottom>
                                    {t('common:photoOrScreenshot')}
                                </Typography>
                                <input type='file' />
                            </label>
                            <CustomButton>
                                {t('common:send')}
                            </CustomButton>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </Grid>
    );
};
