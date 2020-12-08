export interface Locations {
    isFetch: boolean;
    error: unknown;
    data: LocationsDataTypes
}

export type LocationsDataTypes = Array<{
    id: number;
    name: string;
    cities: Array<{
        id: number;
        name: string;
        district: Array<{
            id: number;
            city_id: number;
            name: string;
        }>;
    }>;
}>;