import {IdNameType} from "@root/interfaces/Post";

export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

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
};