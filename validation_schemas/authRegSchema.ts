import {string, object, ref} from 'yup';
import {fieldIsRequired} from '@src/common_data/form_fields';

const wrongNumberFormat = 'wrongNumberFormat';
const passwordMin = 'passwordMustMinEightChars';
const passwordsDifferent = 'passwordsDifferent';

export const passwordSchema = object({
    password: string().required(fieldIsRequired)
});

export const phoneSchema = object({
    phone: string().required(fieldIsRequired)
        .test('len', wrongNumberFormat, val => !RegExp(/_/g).test(val))
});

export const codeSchema = object({
    code: string().required(fieldIsRequired)
});

export const authSchema = object().concat(phoneSchema).concat(passwordSchema);

export const passwordConfirmSchema = object({
    newPassword: string().required(fieldIsRequired).min(8, passwordMin),
    newPassword_confirm: string().required(fieldIsRequired)
        .oneOf([ref('newPassword')], passwordsDifferent)
});