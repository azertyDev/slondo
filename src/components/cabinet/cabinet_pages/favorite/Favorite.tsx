import React, {useEffect} from 'react';

// styles
import {useStyles} from './useStyles';
import {CardView} from "@src/components/elements/card/card_view/CardView";

export const Favorite = ({data, handleType, type}) => {

    const classes = useStyles();
    useEffect(() => {
        handleType(type)
    }, [])
    return (
        <div className={classes.root}>
            <CardView listMode={true} list={data} favorite={true} />
        </div>
    )
}
