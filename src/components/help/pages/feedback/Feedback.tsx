import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Form, FormikProvider, useFormik} from 'formik';
import {filterInputSchema} from '@root/validation_schemas/filterInputSchema';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


export const Feedback: FC = () => {
    const {t} = useTranslation('filters');

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {},
        validationSchema: filterInputSchema,
        onSubmit
    });

    const classes = useStyles();
    return (
        <Grid item xs={7} className={classes.root}>
            <Typography variant='h6'>Обратная связь</Typography>
            <Typography variant='subtitle1'>Если вы не нашли нужную информацию в разделах Помощь, вы можете найти ее
                ниже или задать вопрос Службе поддержки через форму обратной связи. Уточните, с чем связан
                вопрос:
            </Typography>
            <div className="feedback-form">
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <FormikField
                                t={t}
                                labelText='*Персональные данные'
                                placeholder="Введите Имя"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <FormikField
                                t={t}
                                labelText='*Почта'
                                placeholder="example@gmail.com"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <FormikField
                                t={t}
                                labelText='*Номер телефона'
                                placeholder="+998  "
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </div>
                        <div>
                            <label>*Сообщение</label>
                            <FormikField
                                t={t}
                                multiline
                                rows={10}
                                variant="outlined"
                                fullWidth
                                helperText='Описание не должно превышать 3000 символов'
                            />
                        </div>
                        <div className='upload'>
                            <label className='file-upload'>
                                Фото или скриншот
                                <input
                                    type='file'
                                />
                            </label>
                            <CustomButton>
                                Отправить
                            </CustomButton>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </Grid>
    );
};
