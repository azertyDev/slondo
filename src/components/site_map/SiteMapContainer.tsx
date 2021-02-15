import React, { FC } from 'react'
import { MainLayout } from '@src/components/MainLayout'
import { SiteMapComponent } from './SiteMapComponent'
import { WithT } from 'i18next'
import { categoriesList } from '@src/common_data/categoriesList'

export const SiteMapContainer: FC<WithT> = ({ t }) => {
    const categories = categoriesList.map((category) => {
        return category
    })


    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent t={t} categories={categories} />
        </MainLayout>
    )
}
