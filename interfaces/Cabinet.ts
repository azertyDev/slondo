import {ReactElement} from 'react';
import {CardDataType} from '@root/interfaces/CardData';

export type TabsDataType = {
    id: number,
    title: string,
    itemsPerPage: number,
    handleFetchByTab: (page: number) => void,
    component: ReactElement,
}[];

export type InitPostsType  = {
    total: number,
    data: CardDataType[]
}

