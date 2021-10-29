import {createContext} from 'react';

type HomePageDataType = {
    mainSliderData: MainSliderType[],
    postsSliderData: PostType,
    tabPosts: PostType
}

export type PostType = {
    data,
    total: number
}

export type MainSliderType = {
    id: number,
    img: string,
    title: string,
    description: string
    url: string
}

export const HomePageCtx = createContext<HomePageDataType>(null);