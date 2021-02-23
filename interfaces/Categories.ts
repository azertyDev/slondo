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
    smallIcon: any;
    subCategory?: SubCategoryType[];
    has_auction: boolean;
};

export type SubCategoryType = IdNameType & {
    parents: IdNameType[];
    type?: SubCtgrsType[];
};

export type SubCtgrsType = IdNameType & {
    parents: IdNameType[]

} & IdNameType
