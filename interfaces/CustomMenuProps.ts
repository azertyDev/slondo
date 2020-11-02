import {FocusEvent} from "react";

export interface CustomMenuProps {
    valueName: string,
    items: any[],
    onClick: (v: any, a: any) => () => void,
    onBlur: (e: FocusEvent<any>) => void
}