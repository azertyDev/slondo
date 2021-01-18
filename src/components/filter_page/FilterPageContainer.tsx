import React from 'react';
import { MainLayout } from '@src/components/MainLayout';
import { FilterPage } from './FilterPage';

export const FilterPageContainer = () => {
    return (
        <MainLayout title="Фильтр по объявлениям">
            <FilterPage />
        </MainLayout>
    );
};
