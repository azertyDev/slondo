import React, { FC, useState } from 'react';
import { Field } from 'formik';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";

export const CustomFormikPasswordField: FC<any> = (props) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const { labelText, ...otherProps } = props;
    return (
        <Field {...otherProps}>
            {({ field }) => (
                <>
                    {labelText ? <label>{labelText}</label> : null}
                    <FormControl variant="outlined" fullWidth>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            focused={false}
                            variant="outlined"
                            {...field}
                            {...otherProps}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </>
            )}
        </Field>
    );
};
