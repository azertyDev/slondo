export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoriesDataTypes;
}

export type CategoriesDataTypes = Array<{
    id: number;
    name: string;
    images: {
        id: number;
        url: {
            original: ''
        }
    };
    icons: {
        id: number;
        url: {
            original: ''
        }
    };
    childs: [];
    has_auction: number;
}>

export interface CategoryIDs {
    ctgryID: number;
    subCtgryID: number;
    lang: string;
}