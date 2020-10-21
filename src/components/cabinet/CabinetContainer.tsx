import React from 'react';
import { Cabinet } from './Cabinet';
import { MainLayout } from './../MainLayout';

export const CabinetContainer = (props) => {
    return (
        <MainLayout title="Личный кабинет">
            <Cabinet {...props} />
        </MainLayout>
    );
};
