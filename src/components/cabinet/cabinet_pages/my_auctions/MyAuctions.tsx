import React, {FC} from 'react';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {ViewPropsTypes} from '@src/components/elements/card/card_view/CardView';


export const MyAuctions: FC<ViewPropsTypes> = (props) => {
    const {isFetch, list} = props;

    return (
        <CardView listMode={true} list={list} isFetch={isFetch}/>
    )
};
