import {IdNameType} from "@root/interfaces/Post";

export interface Categories {
    isFetch: boolean;
    error?: unknown;
    data: CategoriesDataTypes[];
}

export type CategoriesDataTypes = {
    id: number;
    manufactures: [];
    name: string;
    defaultParams: {
        id: number;
        name: string;
        adjustable_seats: AdjustableSeats[]
    }[]
}[];
export type AdjustableSeats = {
    id: number;
    name: string;
}[];

export type CategoryType = IdNameType & {
    icon: {
        url: string;
    },
    ru_name: string;
    smallIcon: any;
    subcategory?: SubcategoryType[];
    has_auction: boolean;
};

export type SubcategoryType = IdNameType & {
    parents?: IdNameType[],
    type?: TypeCategory[]
};

export type TypeCategory = IdNameType & {
    parents?: IdNameType[]
};
