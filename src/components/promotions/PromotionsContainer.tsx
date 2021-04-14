import React from 'react'
import { MainLayout } from '@src/components/main_layout/MainLayout'
import { Promotions } from '@src/components/promotions/Promotions'

export const PromotionsContainer = () => {
    return (
        <MainLayout title='Акции'>
            <Promotions />
        </MainLayout>
    )
}
