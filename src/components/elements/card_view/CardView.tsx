import React, {FC} from 'react';
import {GridView} from './grid_view/GridView';
import {ListView} from './list_view/ListView';
import {InnerCardData} from "@root/interfaces/CardData";
import { WithT } from 'i18next';


export type ViewPropsTypes = {
    isFetch?: boolean;
    list: InnerCardData[];
};

export const CardView: FC<ViewPropsTypes & { listMode?: boolean } & WithT> = (props) => {
    const {listMode = false, list, isFetch, t} = props;
    return listMode
        ? <ListView list={list} isFetch={isFetch} t={t}/>
        : <GridView list={list} isFetch={isFetch}/>
};