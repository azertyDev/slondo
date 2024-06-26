import {object, string} from 'yup';
import {fieldRequiredTxt, invalidFormat} from './validateMessages';
import {bottomDashRegEx} from '@src/common_data/reg_exs';
import {userInfoSchema} from '@root/validation_schemas/authRegSchema';

export const cardNumExpSchema = object({
    cardNumber: string().test(
        'cardNum',
        invalidFormat,
        val => !RegExp(bottomDashRegEx).test(val)
    ),
    expireDate: string().test('expireDate', invalidFormat, val => {
        const [mm] = val.split('/');
        return mm !== '00' && +mm <= 12 && !RegExp(bottomDashRegEx).test(val);
    })
});

export const paymentCardSchema = object({
    cardName: string().required(fieldRequiredTxt),
    phone: string().test(
        'phone',
        invalidFormat,
        val => !RegExp(bottomDashRegEx).test(val)
    )
})
    .concat(cardNumExpSchema)
    .concat(userInfoSchema);
