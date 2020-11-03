import React, {FC} from "react";
import {TextField} from "@material-ui/core";
import {Field} from "formik";


export const CustomFormikField: FC<any> = (props) => {
    return (
        <Field {...props}>
            {
                ({field}) => (
                    <TextField
                        fullWidth
                        focused={false}
                        variant='outlined'
                        {...field}
                        {...props}
                    />
                )
            }
        </Field>
    )
};