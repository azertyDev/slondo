import {useEffect, useState} from 'react';
import {cookieOpts, cookies} from "@src/helpers";
import {IdNameType} from "@root/interfaces/Post";
import {unstable_batchedUpdates} from "react-dom";

export type UserLocationType = {
    region: IdNameType,
    city?: IdNameType
}

export const initUserLocation: UserLocationType = {
    region: null,
    city: null
};

export const useUserLocation = () => {
    const cookiesUserLocation = cookies.get('user_location');
    const hasLocation = !!cookiesUserLocation;
    const [userLocation, setUserLocation] = useState(initUserLocation);

    const addUserLocation = (location) => {
        unstable_batchedUpdates(() => {
            setUserLocation(location);
            cookies.set('user_location', location, cookieOpts);
        });
    };

    const removeUserLocation = () => {
        unstable_batchedUpdates(() => {
            setUserLocation(initUserLocation);
            cookies.remove('user_location', {path: '/'});
        });
    };

    useEffect(() => {
        hasLocation && setUserLocation(cookiesUserLocation);
    }, [hasLocation]);

    return {
        userLocation,
        addUserLocation,
        removeUserLocation
    };
};