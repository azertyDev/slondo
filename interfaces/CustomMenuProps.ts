import {FocusEvent} from "react";

export interface CustomMenuProps {
    valueName: string;
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