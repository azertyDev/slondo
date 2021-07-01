import React, {FC} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {SiteMapComponent} from './SiteMapComponent';

export const SiteMapContainer: FC = () => {
    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent/>
        </MainLayout>
    );
};
