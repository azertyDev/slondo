import React, {FC} from "react"
import {Menu, MenuProps} from "@material-ui/core"


interface IMenu extends MenuProps {
    name: object,
    setValues: (values: React.SetStateAction<object>, shouldValidate?: boolean) => void;
}

export const CustomFormikMenu: FC<IMenu> = ({setValues, ...props}) => {

    return (
        <Menu {...props}>
            {props.children}
        </Menu>
    )
};