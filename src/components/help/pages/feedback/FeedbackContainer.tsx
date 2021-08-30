import React, {FC} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';

export const FeedbackContainer: FC = () => {

    return (
        <MainLayout title="Обратная связь">
            <Feedback/>
        </MainLayout>
    );
};