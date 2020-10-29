import {FieldValidator} from "formik";

export interface ICustomField {
    name: string,
    type?: string,
    placeholder: string,
    className: string
    setFieldValue: (field: string, value: never, shouldValidate?: boolean) => void,
    validate: FieldValidator,
}