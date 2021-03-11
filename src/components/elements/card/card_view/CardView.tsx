import React, {FC} from 'react';
import {GridMode} from './grid_mode/GridMode';
import {ListMode} from './list_mode/ListMode';
import {InnerCardData} from "@root/interfaces/CardData";


export type ViewPropsTypes = {
    isFetch?: boolean;
    list: InnerCardData[];
};

export const CardView: FC<ViewPropsTypes & { listMode?: boolean, favorite?: boolean }> = (props) => {
    const {listMode = false, list, isFetch} = props;

    return listMode
        ? <ListMode list={list} isFetch={isFetch} />
        : <GridMode list={list} isFetch={isFetch} />
};