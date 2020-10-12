import React from "react"
import {TextField, TextFieldProps} from "@material-ui/core"
import {FieldProps} from "formik"


export const CustomField: React.FC<FieldProps & TextFieldProps> = (
    {
        type,
        placeholder,
        className,
        field
    }
) => {
    return <TextField
        fullWidth
        focused={false}
        variant='outlined'
        placeholder={placeholder}
        type={type}
        className={className}
        {...field}
    />
};