import React, {FC} from 'react';
import {GridView} from './grid_view/GridView';
import {ListView} from './list_view/ListView';
import {InnerCardData} from "@root/interfaces/CardData";
import {WithT} from "i18next";


export type ViewPropsTypes = {
    isFetch: boolean;
    list: InnerCardData[];
} & WithT;

export const CardView: FC<ViewPropsTypes & { listMode?: boolean }> = (props) => {
    const {listMode = false, list, isFetch, t} = props;
    return listMode
        ? <ListView t={t} list={list} isFetch={isFetch}/>
        : <GridView t={t} list={list} isFetch={isFetch}/>
};