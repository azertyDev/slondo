import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './useStyles'
import { Form, FormikProvider, useFormik } from 'formik'
import { filterInputSchema } from '@root/validation_schemas/filterInputSchema'
import { CustomFormikField } from '@src/components/elements/custom_formik_field/CustomFormikField'
import { ButtonComponent } from '@src/components/elements/button/Button'

const initialFeedbackInputsVals = {}

export const Feedback = () => {

    const onSubmit = (values) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialFeedbackInputsVals,
        validationSchema: filterInputSchema,
        onSubmit,
    })

    const classes = useStyles()
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
                            <CustomFormikField
                                labelText='*Персональные данные'
                                placeholder="Введите Имя"
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <CustomFormikField
                                labelText='*Почта'
                                placeholder="example@gmail.com"
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <CustomFormikField
                                labelText='*Номер телефона'
                                placeholder="+998  "
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <label>*Сообщение</label>
                            <CustomFormikField
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
                            <ButtonComponent>
                                Отправить
                            </ButtonComponent>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </Grid>
    )
}
