import {useContext, useEffect, useState} from 'react';
import {userAPI} from "@src/api/api";
import {ErrorCtx} from "@src/context";

export type LocationsType = {
    id: number,
    name: string,
    cities: { id: number, name: string }[]
};

export const useLocations = () => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const [locations, setLocations] = useState<LocationsType[]>([]);

    const fetchLocations = async () => {
        try {
            const fetchedLocations = await userAPI.getLocations();
            setLocations(fetchedLocations);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    return locations;
};