import {object, string} from 'yup';
import {fieldRequiredTxt} from '@src/common_data/fields_keys';
import {wrongFormat} from "@root/validation_schemas/authRegSchema";
import {bottomDashRegEx} from "@src/common_data/reg_exs";

export const paymentCardSchema = object({
    cardName: string().required(fieldRequiredTxt),
    cardNumber: string().test('cardNum', wrongFormat, val => !RegExp(bottomDashRegEx).test(val)),
    expireDate: string()
        .test('expireDate', wrongFormat, val => {
            const [mm] = val.split('/');
            return (mm !== '00' && +mm <= 12) && !RegExp(bottomDashRegEx).test(val);
        }),
    phone: string().test('phone', wrongFormat, val => !RegExp(bottomDashRegEx).test(val))
});