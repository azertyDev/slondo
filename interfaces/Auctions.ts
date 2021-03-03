export interface Auctions {
    isFetch: boolean;
    error: unknown;
    data: AuctionsDataTypes
}

export type AuctionsDataTypes = {
    id: number;
    name: string;
    cities: {
        id: number;
        name: string;
        district: {
            id: number;
            city_id: number;
            name: string;
        }[];
    }[];
}[];