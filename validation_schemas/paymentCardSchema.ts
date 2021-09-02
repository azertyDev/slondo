import {object, string} from 'yup';
import {fieldRequiredTxt, invalidFormat} from "./index";
import {bottomDashRegEx} from "@src/common_data/reg_exs";

export const paymentCardSchema = object({
    cardName: string().required(fieldRequiredTxt),
    cardNumber: string().test('cardNum', invalidFormat, val => !RegExp(bottomDashRegEx).test(val)),
    expireDate: string()
        .test('expireDate', invalidFormat, val => {
            const [mm] = val.split('/');
            return (mm !== '00' && +mm <= 12) && !RegExp(bottomDashRegEx).test(val);
        }),
    phone: string().test('phone', invalidFormat, val => !RegExp(bottomDashRegEx).test(val))
});