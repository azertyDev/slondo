import React from 'react'
import { MainLayout } from '@src/components/main_layout/MainLayout'
import { Feedback } from '@src/components/feedback/Feedback'
import { ThemesMenu } from '@src/components/elements/themes_menu/ThemesMenu'

export const FeedbackContainer = (props) => {
    return (
        <MainLayout title="Обратная связь">
            <ThemesMenu>
                <Feedback {...props} />
            </ThemesMenu>
        </MainLayout>
    )
}