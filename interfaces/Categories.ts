export interface Categories {
    isFetch: boolean,
    error?: any,
    list: [{
        id: number,
        name: string,
        images: { id: number, url: string }
    }],
}

export interface CategoryIDs {
    ctgryID: number,
    subCtgryID: number,
    lang: string
}