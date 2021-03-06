import {number, string, object, ref} from "yup";

const numberMsg = "Пожалуйста введите только цыфры"
const requiredMsg = 'Поле обязательно для заполнения';
const phoneNumberLength = 'Телефон номер должен быть написан полностью!';
const minCharacterMsg = 'Пароль должен быть не менее 6 символов!';
const minCodeMsg = 'Код должен быть не меньше 4 символов';
const maxCodeMsg = 'Код должен быть не больше 4 символов';
const passwordMin = 'Пароль должен быть не меньше 6 символов'
const passwordMatch = 'Пароль должен совпадать с предыдущим'

export const authRegSchema = object({
    phone: number().typeError(numberMsg).required(requiredMsg)
        .min(13, phoneNumberLength),
    password: string().required(requiredMsg)
            .min(6, minCharacterMsg),
});

export const authRecoverySchema = object({
    phone: number().required(requiredMsg),
    code: number().typeError(numberMsg),
        // .test('len', 'Must be exactly 5 characters', val => val.toString().length === 4),
    password: string().min(6, passwordMin),
    password_confirmation: string()
        .oneOf([ref('password'), null], passwordMatch)

});
