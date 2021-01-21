import React, { FC, ReactElement } from 'react';
import {
    CardView,
    ViewPropsTypes,
} from '@src/components/elements/card_view/CardView';
import { useStyles } from './useStyles';
import { WithT } from 'i18next';

export const ArchiveComponent: FC<ViewPropsTypes & WithT> = (
    props,
): ReactElement => {
    const { list, isFetch, t } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const classes = useStyles();
    return (
        <>
            <CardView listMode={true} list={list} isFetch={isFetch} t={t} />
        </>
    );
};
