import {IdNameType} from "@root/interfaces/Post";

export interface UserInfo {
    id?: number,
    name: string,
    surname: string,
    phone: string,
    avatar: string,
    created_at?: string,
    available_days: IdNameType[],
    available_start_time?: string,
    available_end_time?: string,
    rating?: number,
    signed?: boolean,
    observer?: {
        number_of_reviews: number,
        number_of_purchase: number,
        number_of_notifications: number,
        number_of_messages: number,
        number_of_ratings: number
    }
}

export type SubscriberType = {
    user_id?: number,
    user?: UserInfo
}
