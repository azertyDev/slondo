import {SetStateAction} from "react";
import {CreateAdFields} from "@root/interfaces/Announcement";

export interface AddressAutocompleteProps {
    values: CreateAdFields;
    setValues: (values: SetStateAction<unknown>, shouldValidate?: boolean | undefined) => any;
    list: Array<{
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
    }>;
}