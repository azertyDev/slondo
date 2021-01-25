import {IdNameType} from "@root/interfaces/Post";


export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

export type CategoryType = {
    mark: string;
    image: {
        url: string;
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

export type SubLvlCtgrsType = {
    parents: IdNameType[]
} & IdNameType