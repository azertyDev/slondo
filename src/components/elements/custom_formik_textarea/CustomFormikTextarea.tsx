import React, {FC} from "react";
import {TextareaAutosize, TextareaAutosizeProps} from "@material-ui/core";
import {Field} from "formik";


export const CustomFormikTextarea: FC<TextareaAutosizeProps> = (props) => {
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