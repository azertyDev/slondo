import React from 'react';
import {ListView} from '@src/components/elements/card_view/list_view/ListView';

// styles
import {useStyles} from './useStyles';

export const MyAncmnts = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListView
                isFetch={false}
                list={[]}
                // safeShopping={props.safeShopping}
            />
            <ListView
                isFetch={false}
                list={[]}
                // safeShopping={props.safeShopping}
            />
        </div>
    );
};
