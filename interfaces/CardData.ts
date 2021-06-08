import {UserInfo} from '@root/interfaces/Auth';
import {CardDataType} from '@root/interfaces/Cabinet';

export interface CardData {
    isFetch: boolean;
    isShowMoreFetch?: boolean;
    error?: unknown;
    data: {
        cards: CardDataType[];
        total: number;
    };
}

export type InnerCardData = {
    id: number;
    title: string;
    safe_deal: number;
    price: string;
    number_of_views?: number;
    region: {
        id: number;
        name: string;
    };
    city: {
        id: number;
        name: string;
    };
    district?: {
        id: number;
        name: string;
    };
    currency: {
        id: number;
        name: string;
    };
    image: string;
    category?: {
        id: number;
        name: string;
    };
    sub_category_id?: number;
    ads_type: string;
    created_at: string;
    delivery: number;
    exchange: number;
    favorite: boolean;
    creator: boolean;
    author: UserInfo
};
