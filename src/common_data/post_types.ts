import {PostType} from "@root/interfaces/Post";

export const postTypes: PostType[] = [
    {
        id: 1,
        name: 'post',
        subtitle: 'postFree',
        currency: [
            {
                id: 2,
                name: 'sum'
            },
            {
                id: 1,
                name: 'уе'
            }
        ],
        image: {
            url: '/img/adv-background.png'
        },
        guide: 'howToCreatePost'
    },
    {
        id: 2,
        name: 'auc',
        subtitle: 'tradeToGetBetter',
        currency: [
            {
                id: 3,
                name: 'sum'
            }
        ],
        expired: [
            {
                id: 1,
                hours: 10
            },
            {
                id: 2,
                hours: 15
            },
            {
                id: 7,
                hours: 5
            }
        ],
        image: {
            url: '/img/lot-background.png'
        },
        guide: 'howToCreateAuc'
    },
    {
        id: 3,
        name: 'exauc',
        subtitle: 'maxFunctionality',
        currency: [
            {
                id: 4,
                name: 'sum'
            }
        ],
        expired: [
            {
                id: 4,
                hours: 10
            },
            {
                id: 5,
                hours: 15
            },
            {
                id: 8,
                hours: 5
            }
        ],
        image: {
            url: '/img/advanced-lot-background.png'
        },
        guide: 'howToCreateExAuc'
    }
];