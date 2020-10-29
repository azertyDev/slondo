export interface ICategories {
    isFetch: boolean,
    error?: never,
    list: [{
        id: number,
        name: string,
        images: { id: number, url: string }
    }],
}