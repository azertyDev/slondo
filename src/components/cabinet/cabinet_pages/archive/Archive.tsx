import React, {FC, ReactElement} from 'react';
import {CardView, ViewPropsType} from '@src/components/elements/card/card_view/CardView';


export const Archive: FC<ViewPropsType> = (props): ReactElement => {
    const { list, isFetch } = props;

    return (
        <CardView listMode={true} list={list} isFetch={isFetch} />
    );
};
