import {FC} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Help} from '@src/components/help/Help';
import {ThemesMenu} from '../elements/themes_menu/ThemesMenu';
import {data} from '@src/components/help/help_page_data';

export const HelpContainer: FC = () => {
    const handleClick = () => {
        console.log('click help');
    };
    return (
        <MainLayout title="Помощь">
            <ThemesMenu handleClick={handleClick} data={data} title="Помощь"/>
            <Help/>
        </MainLayout>
    );
};
