import {CategoryTypes} from "@root/types/CategoryTypes";

export interface IAdOrLot {
    isFetch: boolean,
    error?: never,
    isLot: boolean,
    category: CategoryTypes
}