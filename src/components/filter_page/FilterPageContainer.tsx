import React from 'react';
import { MainLayout } from '@src/components/main_layout/MainLayout';
import { FilterPage } from './FilterPage';

export const FilterPageContainer = () => {
    return (
        <MainLayout title="Фильтр по объявлениям">
            <FilterPage />
        </MainLayout>
    );
};
