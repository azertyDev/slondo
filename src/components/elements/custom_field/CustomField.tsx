import React, {FC} from "react"
import {TextField} from "@material-ui/core"
import {Field} from "formik"
import {ICustomField} from "../../../../interfaces/ICustomField"


export const CustomField: FC<ICustomField> = ({setFieldValue, validate, ...props}) => {

    const handler = e => {
        let {value} = e.target;

        if (value.length < 3 && props.name === 'phone') {
            value = `+998${value}`;
            setFieldValue(props.name, value);
        } else if (value.length === 6) {
            value = `${value}`.replace(/[0-9][0-9]$/, (match) => `(${match}) `);
            setFieldValue(props.name, value);
        } else if (value.length === 8) {
            value = `${value}`.replace(/[0-9]$/, (match) => `${match}) `);
            setFieldValue(props.name, value);
        } else if (value.length > 3 && value.length < 17) {
            setFieldValue(props.name, value);
        }
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
                        onChange={handler}
                        {...props}
                    />
                )
            }
        </Field>
    )
};