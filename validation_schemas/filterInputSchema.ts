import {string, object} from 'yup';
import {fieldRequiredTxt} from "@src/common_data/fields_keys";

export const filterInputSchema = object({
    phone: string().required(fieldRequiredTxt),
    car: string().required(fieldRequiredTxt),
    category: string().required(fieldRequiredTxt),
    price: string().required(fieldRequiredTxt),
    created_at: string().required(fieldRequiredTxt),
    ancmnt_type: string().required(fieldRequiredTxt),
    state: string().required(fieldRequiredTxt)
});
