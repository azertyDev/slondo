import * as Yup from 'yup';

const codes = /\+[9]{2}[8] [0-9]{2}\ [0-9]{3}\ [0-9]{2}\ [0-9]{2}/;

export const SettingsFormValidation = Yup.object().shape({
    name: Yup.string().required('Поле нужно заполнить'),
    surname: Yup.string().required('Поле нужно заполнить'),
    // phone: Yup.string()
    // phone: Yup.string().matches(codes, 'Invalid format')
});