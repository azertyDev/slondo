import {string, object} from "yup";


const requiredMsg = 'Поле обязательно для заполнения';
const minCharacterMsg = 'Пароль должен быть не менее 6 символов!'
const codeMsg = 'Напишите код полученный на телефон'
const minCodeMsg = 'Код должен быть не меньше 4 символов'
const maxCodeMsg = 'Код должен быть не больше 4 символов'

export const authRegSchema = object({
    phone: string().required(requiredMsg),
    password: string().required(requiredMsg)
            .min(6, minCharacterMsg),
});

export const authRecoverySchema = object({
    phone: string().required(requiredMsg),
});
