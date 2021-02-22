import React, {FC} from 'react'
import {MainLayout} from '@src/components/MainLayout'
import {SiteMapComponent} from './SiteMapComponent'
import {WithT} from 'i18next'
import {categories_list} from '@src/common_data/categories_list'

export const SiteMapContainer: FC<WithT> = ({t}) => {
    const categories = categories_list.map((category) => {
        return category
    })

    return (
        <MainLayout title="Карта сайта">
            <SiteMapComponent t={t} categories={categories}/>
        </MainLayout>
    )
}
