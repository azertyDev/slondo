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
export type CategoryType = {
    icon: {
        url: string;
    },
    smallIcon: any;
    model?: ModelType[];
    has_auction: boolean;
} & IdNameType;

export type ModelType = {
    parents: IdNameType[];
    type?: SubLvlCtgrsType[];
} & IdNameType;

export type SubLvlCtgrsType = {
    parents: IdNameType[]
} & IdNameType
