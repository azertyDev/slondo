import React from 'react';
import { ListView } from '@src/components/elements/card_view/list_view/ListView';

// styles
import { useStyles } from './useStyles';

export const MyAncmnts = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListView safeShopping={props.safeShopping} />
            <ListView safeShopping={props.safeShopping} />
        </div>
    );
};
