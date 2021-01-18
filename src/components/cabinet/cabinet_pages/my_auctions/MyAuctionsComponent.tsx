import React, { FC } from 'react';
import { CardView } from '@src/components/elements/card_view/CardView';
import { ViewPropsTypes } from '@src/components/elements/card_view/CardView';

// styles
import { useStyles } from './useStyles';

export const MyAuctionsComponent: FC<ViewPropsTypes> = (props) => {
    const { isFetch, list } = props;
    const classes = useStyles();

    return (
        <>
            <CardView listMode={true} list={list} isFetch={isFetch} />
        </>
    );
};
