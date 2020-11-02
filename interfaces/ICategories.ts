export interface ICategories {
    isFetch: boolean,
    error?: any,
    list: [{
        id: number,
        name: string,
        images: { id: number, url: string }
    }],
}