import {string, object, ref} from "yup";


const requiredMsg = 'Поле обязательно для заполнения';
const phoneNumberLength = 'Телефон номер должен быть написан полностью!';
const minCharacterMsg = 'Пароль должен быть не менее 6 символов!';
const minCodeMsg = 'Код должен быть не меньше 4 символов';
const maxCodeMsg = 'Код должен быть не больше 4 символов';
const passwordMin = 'Пароль должен быть не меньше 6 символов'
const passwordMatch = 'Пароль должен совпадать с предыдущим'

export const authRegSchema = object({
    phone: string().required(requiredMsg)
        .min(13, phoneNumberLength),
    password: string().required(requiredMsg)
            .min(6, minCharacterMsg),
});

export const authRecoverySchema = object({
    phone: string().required(requiredMsg),
    code: string().min(4, minCodeMsg)
        .max(4, maxCodeMsg),
    password: string().min(6, passwordMin),
    password_confirmation: string()
        .oneOf([ref('password'), null], passwordMatch)

});
