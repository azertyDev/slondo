import React from "react"
import {TextField, TextFieldProps} from "@material-ui/core"
import {FieldProps} from "formik"


export const CustomField: React.FC<FieldProps & TextFieldProps> = (props) => {
    return <TextField
        fullWidth
        focused={false}
        variant='outlined'
        {...props}
    />
};