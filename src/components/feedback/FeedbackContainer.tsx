import React, {FC} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Feedback} from '@src/components/feedback/Feedback';
import {ThemesMenu} from '@src/components/elements/themes_menu/ThemesMenu';

export const FeedbackContainer: FC = () => {
    const handleClick = () => {
        console.log('click help');
    };
    return (
        <MainLayout title="Обратная связь">
            <ThemesMenu handleClick={handleClick} data={[]} title='Feedback'/>
            <Feedback/>
        </MainLayout>
    );
};