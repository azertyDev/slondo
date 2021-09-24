import {ReactElement} from 'react';
import {CardDataType} from '@root/interfaces/CardData';

export type TabsType<T> = {
    firstTab: T,
    secondTab?: T
};

export type DoubleTabType = {
    id: number,
    title: string,
    innerTabsData: {
        innerFirstTab: {
            posts: CardDataType[],
            total: number,
            emptyPage: ReactElement
        },
        innerSecondTab: {
            posts: CardDataType[],
            total: number,
            emptyPage: ReactElement
        }
    }
}

export type SingleTabType = {
    id: number,
    total: number,
    title: string,
    component?: ReactElement,
    emptyPage: ReactElement
};

export type InitPostsType = {
    total: number,
    data: CardDataType[]
}

