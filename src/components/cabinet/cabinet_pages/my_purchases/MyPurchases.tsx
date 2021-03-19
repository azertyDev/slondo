import React, {FC} from 'react';
import {CardView, ViewPropsType} from '@root/src/components/elements/card/card_view/CardView';
import {useStyles} from './useStyles';


export const MyPurchases: FC<ViewPropsType> = (props) => {
    const { isFetch, list } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CardView listMode={true} list={list} isFetch={isFetch} />
        </div>
    );
};
