import React from 'react';
import {CabinetCard} from "@src/components/cabinet/card/CabinetCard";

// styles
import {useStyles} from './useStyles';

export const MyAncmnts = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CabinetCard safeShopping={props.safeShopping}/>
            <CabinetCard safeShopping={props.safeShopping}/>
        </div>
    )
}
