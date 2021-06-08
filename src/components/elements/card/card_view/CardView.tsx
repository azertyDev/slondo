import React, {FC} from 'react';
import {GridMode} from './grid_mode/GridMode';
import {ListMode} from './list_mode/ListMode';
import {CardDataType} from '@root/interfaces/Cabinet';

export type ViewPropsType = {
    isFetch?: boolean;
    listMode?: boolean;
    data?: CardDataType[];
    handleModalOpen?: (value?, id?) => void
};

export const CardView: FC<ViewPropsType> = (props) => {
    const {listMode = false, data, isFetch} = props;

    return listMode
        ? <ListMode data={data} isFetch={isFetch} />
        : <GridMode data={data} isFetch={isFetch} />
};