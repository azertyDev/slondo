import {IdNameType} from "@root/interfaces/Announcement";


export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

export type CategoryType = IdNameType & {
    images: {
        id: number,
        url: {
            default: string
        }
    },
    icons: {
        id: number,
        url: {
            default: string,
        }
    },
    childs: (IdNameType & {
        parent: any,
        image: {
            url: string,
        }
    })[],
    has_auction: number,
}

export interface CategoryIDs {
    ctgryID: number,
    subCtgryID: number,
    lang: string,
}

export type SubCategoryType = IdNameType & {
    data: any,
    parent: IdNameType
}
