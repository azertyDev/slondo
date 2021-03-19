import React, {FC} from 'react';
import {GridMode} from './grid_mode/GridMode';
import {ListMode} from './list_mode/ListMode';

export type ViewPropsType = {
    isFetch?: boolean;
    listMode?: boolean;
    list?: any[];
    handleModalOpen?: (value?, id?) => void
};

export const CardView: FC<ViewPropsType> = (props) => {
    const { listMode = false, list, isFetch, handleModalOpen } = props;

    return listMode
        ? <ListMode list={list} isFetch={isFetch} handleModalOpen={handleModalOpen} />
        : <GridMode list={list} isFetch={isFetch} />;
};