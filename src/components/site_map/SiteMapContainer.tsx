import React, {FC} from 'react'
import {MainLayout} from '@src/components/main_layout/MainLayout'
import {SiteMapComponent} from './SiteMapComponent'
import {siteCategories} from '@src/common_data/siteCategories'

export const SiteMapContainer: FC = () => {
    const categories = siteCategories.map((category) => {
        return category
    })

    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent categories={categories}/>
        </MainLayout>
    )
}
