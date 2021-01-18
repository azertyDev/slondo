import { string, object } from 'yup';

const requiredMsg = 'Поле обязательно для заполнения';

export const filterInputSchema = object({
    phone: string().required(requiredMsg),
    car: string().required(requiredMsg),
    category: string().required(requiredMsg),
    price: string().required(requiredMsg),
    created_at: string().required(requiredMsg),
    ancmnt_type: string().required(requiredMsg),
    state: string().required(requiredMsg),
});
