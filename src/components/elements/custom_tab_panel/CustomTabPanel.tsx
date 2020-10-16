import React from "react";


export const CustomTabPanel = (props) => {
    const {children, value, index, ...other} = props

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    )
};