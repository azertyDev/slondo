import {string, object} from "yup";


const requiredMsg = 'Поле обязательно для заполнения';
const phoneNumberLength = 'Телефон номер должен быть написан полностью!';
const minCharacterMsg = 'Пароль должен быть не менее 6 символов!';
const minCodeMsg = 'Код должен быть не меньше 4 символов';
const maxCodeMsg = 'Код должен быть не больше 4 символов';

export const authRegSchema = object({
    phone: string().required(requiredMsg)
        .min(13, phoneNumberLength),
    password: string().required(requiredMsg)
            .min(6, minCharacterMsg),
});

export const authRecoverySchema = object({
    phone: string().required(requiredMsg),
    password_confirmation: string().required(requiredMsg)
        .min(4, minCodeMsg)
        .max(4, maxCodeMsg)
});
