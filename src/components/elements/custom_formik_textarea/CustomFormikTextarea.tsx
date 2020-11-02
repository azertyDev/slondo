import React, {FC} from "react"
import {TextareaAutosize} from "@material-ui/core"
import {Field} from "formik"


export const CustomFormikTextarea: FC<any> = (props) => {
    return (
        <Field {...props}>
            {
                ({field}) => (
                    <TextareaAutosize
                        {...field}
                        {...props}
                    />
                )
            }
        </Field>
    )
};