export interface Categories {
    isFetch: boolean;
    error?: unknown;
    list: CategoryType[];
}

export type CategoryType = {
    id: number;
    name: string;
    images: {
        id: number;
        url: {
            extra: ''
        }
    };
    icons: {
        id: number;
        url: {
            extra: ''
        }
    };
    childs: [];
    has_auction: boolean;
}

export interface CategoryIDs {
    ctgryID: number;
    subCtgryID: number;
    lang: string;
}
