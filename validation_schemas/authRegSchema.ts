import {string, object} from "yup";


const requiredMsg = 'Поле обязательно для заполнения';

export const authRegSchema = object({
    phone: string().required(requiredMsg),
    password: string().required(requiredMsg),
});