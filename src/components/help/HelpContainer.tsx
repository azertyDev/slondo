import React from 'react';
import { MainLayout } from '@src/components/MainLayout';
import { Help } from '@src/components/help/Help';
import { HelpMenu } from './help_menu/HelpMenu';

export const HelpContainer = () => {
    return (
        <MainLayout title="Помощь">
            <HelpMenu>
                <Help />
            </HelpMenu>
        </MainLayout>
    );
};
