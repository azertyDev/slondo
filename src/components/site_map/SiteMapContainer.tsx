import React, {FC} from 'react'
import {MainLayout} from '@src/components/main_layout/MainLayout'
import {SiteMapComponent} from './SiteMapComponent'
import {site_categories} from '@src/common_data/site_categories'

export const SiteMapContainer: FC = () => {
    const site_categories = site_categories.map((category) => {
        return category
    })

    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent categories={categories}/>
        </MainLayout>
    )
}
