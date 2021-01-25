import React, {FC} from "react";
import {TextField} from "@material-ui/core";
import {Field} from "formik";


export const CustomFormikField: FC<any> = (props) => {
    const {labelText, ...otherProps} = props;
    return (
        <Field {...otherProps}>
            {({field}) => (
                <>
                    <label>
                        {labelText}
                    </label>
                    <TextField
                        fullWidth
                        focused={false}
                        variant="outlined"
                        {...field}
                        {...otherProps}
                    />
                </>
            )}
        </Field>
    )
};