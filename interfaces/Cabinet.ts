import {ReactElement} from 'react';
import {UserInfo} from '@root/interfaces/Auth';

export type TabsDataType = {
    id: number,
    title: string,
    total?: number,
    component: ReactElement,
}[];


export interface InitialCabinetCardState {
    isFetch: boolean,
    myPosts: {
        total: number,
        data: CardDataType[]
    }
}

export type CardDataType = {
    ads_type: string,
    adsable: {
        id: number,
        sub_category: InitValuesType,
        type: InitValuesType
    }
    auction: {
        id: number,
        is_accepted: boolean | null,
        winner: UserInfo,
        winner_id: number,
        number_of_bets: number,
        number_of_offers?: number,
        offer?: {
            id: number,
            price: number,
            user: UserInfo
        }
    },
    author: UserInfo,
    available_days: string,
    category: InitValuesType,
    city: InitValuesType,
    created_at: string,
    creator: boolean,
    currency: InitValuesType,
    delivery: number,
    description: string,
    district: InitValuesType,
    exchange: number,
    expiration_at: string,
    favorite: boolean,
    id: number,
    image: string,
    number_of_views: number,
    price: number,
    region: InitValuesType,
    safe_deal: number,
    status: string,
    subscribed: boolean,
    title: string,
    user_id: number,
}

export type OffersStateType = {
    isFetch: boolean,
    total: number,
    data: [{
        id: number,
        auction_id: number,
        price: number,
        created_at: string,
        offer_price_status: boolean,
        user: UserInfo
    }]
}

export type initialUserStateType = {
    isFetch: boolean,
    user: UserInfo
}

export type InitValuesType = { id: number, name: string }