import { InnerCardData } from '@root/interfaces/CardData';

export const CabinetMockData: InnerCardData[] = [
    {
        id: 1,
        title: 'Спальная мебель: купить мебель для спальни новую',
        safe_deal: 1,
        price: 123456,
        number_of_views: 1,
        region: {
            id: 1233,
            name: 'Ташкентская область',
        },
        city: {
            id: 34,
            name: 'Бекабадский район',
        },
        district: {
            id: 54443,
            name: '',
        },
        currency: {
            id: 444,
            name: 'sum',
        },
        images: [
            {
                url: {
                    default: '/img/mebel2.jpg',
                },
            },
        ],
        created_at: '22.09.2020',
        delivery: 1,
        exchange: 1,
        ads_type: {
            id: 43122,
            name: 'Объявление',
            mark: 'regular',
        },
        accepted: false,
        expected: false,
        denied: false,
        isModerated: true,
        follow: false,
        promote: true,
        raise: true,
        raiseInRape: true,
    },
    {
        id: 2,
        title: 'Купить мебель для гостиной',
        safe_deal: 1,
        price: 123456,

        number_of_views: 1,
        region: {
            id: 1233,
            name: 'Ташкентская область',
        },
        city: {
            id: 34,
            name: 'Бекабадский район',
        },
        district: {
            id: 54443,
            name: '',
        },
        currency: {
            id: 444,
            name: 'sum',
        },
        images: [
            {
                url: {
                    default: '/img/mebel1.jpg',
                },
            },
        ],
        created_at: '22.09.2020',
        delivery: 0,
        exchange: 0,
        ads_type: {
            id: 43122,
            name: 'Аукцион',
            mark: 'auction',
        },
        accepted: true,
        expected: false,
        denied: false,
        promote: true,
        raise: true,
        raiseInRape: true,
    },
    {
        id: 3,
        title: 'Купить мебель для офиса',
        safe_deal: 0,
        price: 123456,

        number_of_views: 1,
        region: {
            id: 1233,
            name: 'Ташкентская область',
        },
        city: {
            id: 34,
            name: 'Бекабадский район',
        },
        district: {
            id: 54443,
            name: '',
        },
        currency: {
            id: 444,
            name: 'sum',
        },
        images: [
            {
                url: {
                    default: '/img/mebel3.jpg',
                },
            },
        ],
        created_at: '22.09.2020',
        delivery: 0,
        exchange: 1,
        ads_type: {
            id: 43122,
            name: 'Аукцион',
            mark: 'auction',
        },
        accepted: false,
        expected: false,
        denied: true,
        promote: true,
        raise: true,
        raiseInRape: true,
    },
    {
        id: 4,
        title: 'Кухонные гарнитуры на заказ кухни на заказ в Ташкенте',
        safe_deal: 0,
        price: 123456,
        number_of_views: 1,
        region: {
            id: 1233,
            name: 'Ташкент',
        },
        city: {
            id: 34,
            name: 'Алмазарский район',
        },
        district: {
            id: 54443,
            name: '',
        },
        currency: {
            id: 3500000,
            name: 'sum',
        },
        images: [
            {
                url: {
                    default: '/img/mebel4.jpg',
                },
            },
        ],
        created_at: '22.09.2020',
        delivery: 0,
        exchange: 1,
        ads_type: {
            id: 43122,
            name: 'Объявление',
            mark: 'regular',
        },
        accepted: false,
        expected: false,
        denied: false,
        promote: true,
        raise: true,
        raiseInRape: true,
    },
];
