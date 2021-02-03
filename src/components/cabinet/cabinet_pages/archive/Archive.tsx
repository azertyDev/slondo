import React, {FC, ReactElement} from 'react';
import {
    CardView,
    ViewPropsTypes,
} from '@src/components/elements/card/card_view/CardView';


export const Archive: FC<ViewPropsTypes> = (
    props,
): ReactElement => {
    const {list, isFetch} = props;

    return (
        <CardView listMode={true} list={list} isFetch={isFetch}/>
    );
};
