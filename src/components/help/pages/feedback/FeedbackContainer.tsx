import React, {FC} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';

export const FeedbackContainer: FC = () => {
    const handleClick = () => {
        console.log('click help');
    };
    return (
        <MainLayout title="Обратная связь">
            <Feedback/>
        </MainLayout>
    );
};