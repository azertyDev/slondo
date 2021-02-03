import React, { FC } from 'react';
import { Notifications } from '@src/components/cabinet/cabinet_pages/notifications/Notifications';

export type NotificationDataType = {
    id: number;
    title: string;
    text: string;
    img: string;
};

const notificationMockData: NotificationDataType[] = [
    {
        id: 1,
        img: '/img/notification_group.png',
        title: 'Системное уведомление',
        text:
            'Получайте бесплатные бонусы и тратьте их на продвежение своих объявлений. По формированию позиции представляет собой интересный эксперимент проверки систем массового участия.',
    },
    {
        id: 2,
        img: '/img/surprise_img.svg',
        title: 'Бонусы всем!',
        text:
            'Получайте бесплатные бонусы и тратьте их на продвежение своих объявлений. По формированию позиции представляет собой интересный эксперимент проверки систем массового участия.',
    },
];

export const NotificationsContainer: FC = () => {
    return <Notifications notifications={notificationMockData} />;
};
