import React, { FC } from 'react';
import { CardView } from '@src/components/elements/card_view/CardView';
import { ViewPropsTypes } from '@src/components/elements/card_view/CardView';
import { useStyles } from './useStyles';
import { WithT } from 'i18next';

export const MyAuctionsComponent: FC<ViewPropsTypes & WithT> = (props) => {
    const { isFetch, list, t } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const classes = useStyles();
    return (
        <>
            <CardView listMode={true} list={list} isFetch={isFetch} t={t}/>
        </>
    );
};
