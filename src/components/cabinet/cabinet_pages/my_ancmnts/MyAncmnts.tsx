import React, { FC } from 'react';
import {
    CardView,
    ViewPropsTypes,
} from '@root/src/components/elements/card_view/CardView';
import { WithT } from 'i18next';

// styles
import { useStyles } from './useStyles';

export const MyAncmnts: FC<ViewPropsTypes & WithT> = (props) => {
    const { isFetch, list, t } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <>
                <CardView listMode={true} list={list} isFetch={isFetch} t={t} />
            </>
        </div>
    );
};
