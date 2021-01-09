import React, {FC} from 'react';
import {GridView} from './grid_view/GridView';
import {ListView} from './list_view/ListView';
import {InnerCardData} from "@root/interfaces/CardData";


export type ViewPropsTypes = {
    isFetch: boolean;
    list: InnerCardData[];
};

export const CardView: FC<ViewPropsTypes & { listMode?: boolean }> = (props) => {
    const {listMode = false, list, isFetch} = props;
    return listMode
        ? <ListView list={list} isFetch={isFetch}/>
        : <GridView list={list} isFetch={isFetch}/>
};