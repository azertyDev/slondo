import {string, object, ref} from 'yup';
import {fieldRequiredTxt, invalidFormat} from "./validateMessages";
import {bottomDashRegEx} from "@src/common_data/reg_exs";

const passwordMin = 'passwordMustMinEightChars';
const passwordsDifferent = 'passwordsDifferent';

export const userInfoSchema = object().shape({
    name: string()
        .min(3, 'must_more_than_3')
        .max(20, 'must_less_than_20')
        .required(fieldRequiredTxt),
    surname: string()
        .max(20, 'must_less_than_20')
});

export const phoneSchema = object({
    phone: string()
        .test('format', invalidFormat, val => !RegExp(bottomDashRegEx).test(val))
});

export const passwordSchema = object({
    password: string().required(fieldRequiredTxt)
});

export const codeSchema = object({
    code: string().required(fieldRequiredTxt)
});

export const signInSchema = object({}).concat(phoneSchema).concat(passwordSchema);

export const passwordConfirmSchema = object({
    password: string().required(fieldRequiredTxt).min(8, passwordMin),
    password_confirm: string().required(fieldRequiredTxt)
        .oneOf([ref('password')], passwordsDifferent)
});