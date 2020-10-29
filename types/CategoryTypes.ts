export type CategoryTypes = {
    id: number,
    name: string,
    childs: [{
        id: number,
        name: string,
        image: {
            id: number,
            url: string
        },
        icons: {
            id: number,
            url: string
        }
    }]
}

export type CategoryIDsTypes = {
    ctgryID: number,
    subCtgryID: number
}