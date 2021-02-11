import React from 'react'
import { MainLayout } from '@src/components/MainLayout'
import { Feedback } from '@src/components/feedback/Feedback'
import { HelpMenu } from '@src/components/help/help_menu/HelpMenu'

export const FeedbackContainer = (props) => {
    return (
        <MainLayout title="Обратная связь">
            <HelpMenu>
                <Feedback {...props} />
            </HelpMenu>
        </MainLayout>
    )
}