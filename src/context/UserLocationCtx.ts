import {createContext} from 'react';
import {initUserLocation, UserLocationType} from "@src/hooks/useUserLocation";

type UserLocationCtxType = {
    userLocation: UserLocationType,
    addUserLocation: (location: UserLocationType) => void,
    removeUserLocation: () => void
};

const initCtx: UserLocationCtxType = {
    userLocation: initUserLocation,
    addUserLocation: (location) => {},
    removeUserLocation: () => {}
};

export const UserLocationCtx = createContext(initCtx);