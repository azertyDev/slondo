export interface FavoriteType {
    isFetch: boolean;
    error?: unknown;
    data: FavoritesDataTypes[];
}

export type FavoritesDataTypes = {
    id: number;
    manufactures: [];
    name: string;
    defaultParams: {
        id: number;
        name: string;
    }[]
}[];
