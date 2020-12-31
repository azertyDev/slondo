import React from 'react';
import { CustomGridView } from './custom_grid_view/CustomGridView';
import { CustomListView } from './custom_list_view/CustomListView';

export const CustomCardView = (props) => {
    const { listMode = false, list, isFetch, t } = props;

    return (
        <>
            {listMode ? (
                <CustomListView list={list} isFetch={isFetch} t={t} />
            ) : (
                <CustomGridView list={list} isFetch={isFetch} t={t} />
            )}
        </>
    );
};
