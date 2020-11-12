export interface Categories {
    isFetch: boolean,
    error?: any,
    list: [{
        id: number,
        name: string,
        images: { id: number, url: string },
        icons: { id: number, url: string },
        childs: []
    }],
}

export interface CategoryIDs {
    ctgryID: number,
    subCtgryID: number,
    lang: string
}