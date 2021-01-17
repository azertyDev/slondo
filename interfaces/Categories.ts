import {IdNameType} from "@root/interfaces/Announcement";


export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

export type CategoryType = {
    image: {
        url: {
            default: string;
        }
    },
    icon: {
        url: string;
    },
    model: ModelType[];
    has_auction: number;
} & IdNameType;

export type ModelType = {
    parents: IdNameType[];
    image: {
        url: string
    };
    type: IdNameType[];
} & IdNameType;

export interface CategoryIDs {
    ctgryID: number,
    subCtgryID: number,
    lang: string,
}

export type SubLvlCtgrsType = {
    parents: IdNameType[]
} & IdNameType