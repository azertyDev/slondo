import {ReactElement} from 'react';
import {UserInfo} from '@root/interfaces/Auth';
import {CardDataType} from '@root/interfaces/CardData';

export type TabsDataType = {
    id: number,
    title: string,
    total: number,
    itemsPerPage: number,
    handleFetchByPage: (page: number) => void,
    component: ReactElement,
}[];

export interface InitialCabinetCardState {
    isFetch: boolean,
    myPosts: {
        total: number,
        data: CardDataType[]
    }
}

export type OffersStateType = {
    isFetch: boolean,
    total: number,
    data: {
        id: number,
        auction_id: number,
        price: number,
        created_at: string,
        offer_price_status: boolean,
        user: UserInfo
    }[]
}

export type initialUserStateType = {
    isFetch: boolean,
    user: UserInfo
}

