export interface AddressAutocompleteProps {
    list: {
        id: number;
        name: string;
        cities: [{
            id: number;
            name: string;
            districts: [{
                id: number;
                city_id: number;
                name: string;
            }]
        }]
    }[];
}