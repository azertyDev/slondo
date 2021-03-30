import {string, object, ref} from "yup";
import {fieldIsRequired} from "@src/common_data/form_fields";

const wrongNumberFormat = 'wrongNumberFormat';
const passwordMin = 'passwordMustMinEightChars';
const passwordsDifferent = 'passwordsDifferent';

export const authSchema = object({
    password: string().required(fieldIsRequired),
    phone: string().required(fieldIsRequired)
        .test('len', wrongNumberFormat, val => val?.length === 16)
});

export const passwordSchema = object({
    password: string().required(fieldIsRequired)
});

export const phoneSchema = object({
    phone: string().required(fieldIsRequired)
        .test('len', wrongNumberFormat, val => val?.length === 16)
});

export const codeSchema = object({
    code: string().required(fieldIsRequired)
});

export const passwordConfirmSchema = object({
    newPassword: string().required(fieldIsRequired).min(8, passwordMin),
    newPassword_confirm: string().required(fieldIsRequired)
        .oneOf([ref('newPassword')], passwordsDifferent)
});