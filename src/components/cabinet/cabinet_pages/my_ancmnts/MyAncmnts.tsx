import React from 'react';
import { CustomListView } from '@root/src/components/elements/custom_card_view/custom_list_view/CustomListView';

// styles
import { useStyles } from './useStyles';

export const MyAncmnts = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomListView safeShopping={props.safeShopping} />
            <CustomListView safeShopping={props.safeShopping} />
        </div>
    );
};
