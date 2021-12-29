import {PostType} from '@root/interfaces/Post';

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
            url: '/img/crt_post.png'
        },
        guide: 'howToCreatePost',
        services: {
            safe_deal: true,
            delivery: true,
            time_settings: true,
            exchange: true
        }
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
                id: 2,
                hours: 24
            },
            {
                id: 3,
                hours: 72
            },
            {
                id: 4,
                hours: 168
            },
            {
                id: 5,
                hours: 336
            },
            {
                id: 6,
                hours: 504
            },
            {
                id: 7,
                hours: 720
            }
        ],
        image: {
            url: '/img/crt_auc.png'
        },
        guide: 'howToCreateAuc',
        services: {
            delivery: true,
            buy_now: true,
            reserve_price: false,
            auto_ren: false
        }
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
                id: 8,
                hours: 24
            },
            {
                id: 9,
                hours: 72
            },
            {
                id: 10,
                hours: 168
            },
            {
                id: 11,
                hours: 336
            },
            {
                id: 12,
                hours: 504
            },
            {
                id: 13,
                hours: 720
            }
        ],
        image: {
            url: '/img/crt_exauc.png'
        },
        guide: 'howToCreateExAuc',
        services: {
            delivery: true,
            buy_now: true,
            reserve_price: true,
            auto_ren: true
        }
    }
];