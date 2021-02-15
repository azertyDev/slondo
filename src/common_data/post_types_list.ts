import {PostType} from "@root/interfaces/Post";

export const postTypes: PostType[] = [
    {
        id: 1,
        name: 'post',
        subtitle: 'postFree',
        currency: [
            {
                id: 1,
                name: 'уе',
            },
            {
                id: 2,
                name: 'sum',
            },
        ],
        expired: [
            {
                id: 3,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/adv-background.png',
        },
        guide: 'howToCreatePost',
    },
    {
        id: 2,
        name: 'auc',
        subtitle: 'tradeToGetBetter',
        currency: [
            {
                id: 3,
                name: 'sum',
            },
        ],
        expired: [
            {
                id: 1,
                expiration_at: '2',
            },
            {
                id: 2,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/lot-background.png',
        },
        guide: 'howToCreateAuc',
    },
    {
        id: 3,
        name: 'exauc',
        subtitle: 'maxFunctionality',
        currency: [
            {
                id: 4,
                name: 'sum',
            }
        ],
        expired: [
            {
                id: 4,
                expiration_at: '2',
            },
            {
                id: 5,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/advanced-lot-background.png',
        },
        guide: 'howToCreateExAuc',
    }
];