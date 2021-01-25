import {FocusEvent} from "react";

export interface CustomMenuProps {
    disabled?: boolean;
    name?: string;
    className?: string;
    valueName: string;
    getValByName?: string;
    items: ItemsType[];
    onClick: (v: unknown, a: unknown) => () => void;
    onBlur: (e: FocusEvent<unknown>) => void
}

export type ItemsType = {
    id: number;
    name: string;
    icon?: { url: string };
    hex_color_code?: string;
};