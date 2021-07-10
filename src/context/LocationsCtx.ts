import {createContext} from 'react';
import {LocationsType} from "@src/hooks/useLocations";

export const LocationsCtx = createContext<LocationsType[]>([]);