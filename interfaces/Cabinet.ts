import {ReactElement} from 'react';
import {UserInfo} from '@root/interfaces/Auth';

export type TabsDataType = {
    id: number;
    title: string;
    total?: number;
    component: ReactElement;
}[];


export interface InitialCabinetCardState {
    isFetch: boolean,
    myPosts: {
        total: number,
        data: CardDataType[]
    }
}

export type CardDataType = {
    ads_type: string
    adsable: {
        id: number,
        sub_category: initValuesType,
        type: initValuesType
    }
    auction: {
        winner: UserInfo,
        number_of_bets: number
    },
    author: UserInfo,
    available_days: string
    category: initValuesType
    city: initValuesType
    created_at: string
    creator: boolean
    currency: initValuesType
    delivery: number
    description: string
    district: initValuesType
    exchange: number
    expiration_at: string
    favorite: boolean
    id: number
    image: string
    number_of_views: number
    price: number
    region: initValuesType
    safe_deal: number
    status: string
    subscribed: boolean
    title: string
    user_id: number
}

type initValuesType = { id: number, name: string }