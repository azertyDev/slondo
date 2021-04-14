import React from 'react'
import { MainLayout } from '@src/components/main_layout/MainLayout'
import { Help } from '@src/components/help/Help'
import { ThemesMenu } from '../elements/themes_menu/ThemesMenu'
import { data } from '@src/components/help/help_page_data'

export const HelpContainer = () => {
    return (
        <MainLayout title="Помощь">
            <ThemesMenu data={data} title="Помощь">
                <Help />
            </ThemesMenu>
        </MainLayout>
    )
}
