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
        icons: [],
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
