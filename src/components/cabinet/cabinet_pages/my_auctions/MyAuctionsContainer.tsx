import React, { FC } from 'react';
import { TabsContent } from '@src/components/cabinet/cabinet_pages/TabsContent';
import { MyAuctionsComponent } from '@root/src/components/cabinet/cabinet_pages/my_auctions/MyAuctionsComponent';
import { InnerCardData } from '@root/interfaces/CardData';

const MyAuctionsMockData: InnerCardData[] = [
    {
        id: 1,
        title: 'Купить мебель для спальни',
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
            name: 'Сум',
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
        expected: true,
        denied: false,
        promote: false,
        raise: true,
        raiseInRape: false,
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
            name: 'Сум',
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
        raise: false,
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
            name: 'Сум',
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
        promote: false,
        raise: false,
        raiseInRape: false,
    },
    {
        id: 4,
        title: 'Купить мебель для кухни',
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
            name: 'Сум',
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
        raiseInRape: false,
    },
];

export const MyAuctionsContainer: FC = () => {
    const tabsData = [
        {
            title: 'Созданные',
            count: MyAuctionsMockData.length,
            component: (
                <MyAuctionsComponent list={MyAuctionsMockData} isFetch />
            ),
        },
        {
            title: 'Участие',
            count: MyAuctionsMockData.length,
            component: (
                <MyAuctionsComponent list={MyAuctionsMockData} isFetch />
            ),
        },
    ];

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};
