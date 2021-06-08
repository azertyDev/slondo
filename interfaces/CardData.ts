import {UserInfo} from '@root/interfaces/Auth';
import {IdNameType} from '@root/interfaces/Post';

export interface CardData {
    isFetch: boolean;
    isShowMoreFetch?: boolean;
    error?: unknown;
    data: {
        cards: CardDataType[];
        total: number;
    };
}

export type CardDataType = {
    ads_type: string,
    adsable: {
        id: number,
        sub_category: IdNameType,
        type: IdNameType
    }
    auction: {
        id: number,
        is_accepted: number,
        winner: UserInfo,
        winner_id: number,
        number_of_bets: number,
        number_of_offers?: number,
        auto_renewal?: number,
        offer?: {
            id: number,
            price: number,
            user: UserInfo
        },
        bet?: {
            auction_id: number
            bet: number
            id: number
            number_of_bets: number
        }
    },
    observer?: {
        number_of_views: number,
        number_of_favorites: number,
        number_of_notifications: number
    },
    reasons?: [
        {
            created_at: string,
            reason: IdNameType
        }
    ]
    author: UserInfo,
    available_days: IdNameType[],
    available_start_time: string,
    available_end_time: string,
    category: IdNameType,
    city: IdNameType,
    created_at: string,
    creator: boolean,
    currency: IdNameType,
    delivery: number,
    description: string,
    district: IdNameType,
    exchange: number,
    expiration_at: string,
    favorite: boolean,
    id: number,
    image: string,
    price: string,
    region: IdNameType,
    safe_deal: number,
    status: string,
    subscribed: boolean,
    title: string,
    user_id: number
}
