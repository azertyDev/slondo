import {number, string, object, array} from "yup";


export const createAdvrtSchema = object({
    adName: string().required('Обязательное поле!'),
    adType: object({
        id: number().nullable().required('Выберите тип объявления!')
    }),
    adCategory: object({
        id: number().nullable().required('Выберите категорию!')
    }),
    photos: array().required('Загрузите фотографии!'),
    description: string().required('Обязательное поле!'),
    phone: string().required('Обязательное поле!'),
});