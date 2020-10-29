import {number, boolean, object} from "yup";

export const adTypeAndCtgrySchema = object({
    type: object({
        isLot: boolean().nullable().required('Выберите тип объявления!')
    }),
    category: object({
        id: number().nullable().required('Выберите категорию!')
    })
})