import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { useStyles } from './useStyles'
import { Form, FormikProvider, useFormik } from 'formik'
import { filterInputSchema } from '@root/validation_schemas/filterInputSchema'
import { CustomFormikField } from '@src/components/elements/custom_formik_field/CustomFormikField'
import { CustomFormikTextarea } from '@src/components/elements/custom_formik_textarea/CustomFormikTextarea'

const initialFeedbackInputsVals = {
    phone: '',
    car: '',
    category: '',
    price: '',
    created_at: '',
    ancmnt_type: '',
    state: '',
}

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
        <div className={classes.root}>
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
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <CustomFormikField
                                labelText='*Почта'
                                placeholder="example@gmail.com"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <CustomFormikField
                                labelText='*Номер телефона'
                                placeholder="+998  "
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <label>*Сообщение</label>
                            <TextField
                                multiline
                                rows={10}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    )
}
