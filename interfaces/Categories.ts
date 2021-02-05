import {IdNameType} from "@root/interfaces/Post";


export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

export type CategoryType = {
    icon: {
        url: string;
    },
    smallIcon: {
        url: string;
    },
    model: ModelType[];
    has_auction: boolean;
} & IdNameType;

export type ModelType = {
    parents: IdNameType[];
    image: {
        url: string
    };
    type: IdNameType[];
} & IdNameType;

export type SubLvlCtgrsType = {
    parents: IdNameType[]
} & IdNameType