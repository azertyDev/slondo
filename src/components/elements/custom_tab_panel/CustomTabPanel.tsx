import React, {FC, ReactNode} from "react";

interface CustomTabPanelProps {
    value: number;
    index: number;
    children?: ReactNode;
    className?: string;
}

export const CustomTabPanel: FC<CustomTabPanelProps> = (props) => {
    const {children, value, index, ...other} = props

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    )
};