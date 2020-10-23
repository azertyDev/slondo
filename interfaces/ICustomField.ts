import {FieldValidator} from "formik";

export interface ICustomField {
    name: string,
    type?: string,
    placeholder: string,
    className: string
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    validate: FieldValidator,
}