import React, {FC} from 'react'
import {MainLayout} from '@src/components/main_layout/MainLayout'
import {SiteMapComponent} from './SiteMapComponent'
import {categories_list} from '@src/common_data/categories_list'

export const SiteMapContainer: FC = () => {
    const categories = categories_list.map((category) => {
        return category
    })

    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent categories={categories}/>
        </MainLayout>
    )
}
