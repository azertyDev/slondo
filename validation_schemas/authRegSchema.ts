import {string, object} from "yup";


const requiredMsg = 'Обязательное поле!';

export const authRegSchema = object({
    phone: string().required(requiredMsg),
    password: string().required(requiredMsg),
});