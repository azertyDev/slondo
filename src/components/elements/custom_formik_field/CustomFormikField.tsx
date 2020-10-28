import React, {FC} from "react"
import {TextField} from "@material-ui/core"
import {Field} from "formik"
import {ICustomField} from "@root/interfaces/ICustomField"


export const CustomFormikField: FC<ICustomField> = ({setFieldValue, validate, ...props}) => {

    const handleOnchange = ({target}) => {
        setFieldValue(props.name, target.value)
    };

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
                        onChange={handleOnchange}
                        {...props}
                    />
                )
            }
        </Field>
    )
};