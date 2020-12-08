import React, {FC} from 'react';
import {Checkbox, CheckboxProps} from '@material-ui/core';


export const CustomCheckbox: FC<CheckboxProps> = (props) => {
    return (
        <Checkbox color='primary' {...props}/>
    )
}