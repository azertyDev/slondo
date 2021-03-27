import {ReactElement} from 'react';

export type TabsDataType = {
    id: number;
    title: string;
    total?: number;
    component: ReactElement;
}[];