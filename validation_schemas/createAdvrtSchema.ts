import * as yup from "yup";


const requiredMsg = 'Обязательное поле!';

export const createAdvrtSchema = yup.object({
    adType: yup.object({
        id: yup.number().nullable().required(requiredMsg)
    }),
    category: yup.object({
        id: yup.number().nullable().required(requiredMsg)
    }),
    // title: yup.string().required(requiredMsg),
    location: yup.object({
        city_id: yup.number().required(requiredMsg),
    }),
    // files: yup.array().required(requiredMsg),
    // description: yup.string().required(requiredMsg),
    // phone: yup.string().required(requiredMsg),
});