import {number,object} from "yup";


const requiredMsg = 'Обязательное поле!';

export const createAdvrtSchema = object({
    adType: object({
        id: number().nullable().required(requiredMsg)
    }),
    category: object({
        id: number().nullable().required(requiredMsg)
    }),
    // title: string().required(requiredMsg),
    location: object({
        city_id: number().required(requiredMsg),
    }),
    // files: array().required(requiredMsg),
    // description: string().required(requiredMsg),
    // phone: string().required(requiredMsg),
});