export interface Locations {
    isFetch: boolean;
    error: unknown;
    data: LocationsDataTypes
}

export type LocationsDataTypes = {
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