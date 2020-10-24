import React, {FC} from "react"
import {TextField} from "@material-ui/core"
import {Field} from "formik"
import {ICustomField} from "../../../../interfaces/ICustomField"


export const CustomField: FC<ICustomField> = ({setFieldValue, validate, ...props}) => {

    return (
        <Field validate={validate} name={props.name}>
            {
                ({field}) => (
                    <TextField
                        fullWidth
                        focused={false}
                        variant='outlined'
                        value={field.value}
                        onBlur={field.onBlur}
                        {...props}
                    />
                )
            }
        </Field>
    )
};