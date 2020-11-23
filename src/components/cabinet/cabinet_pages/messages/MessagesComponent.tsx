import React from 'react';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";

// styles
import {useStyles} from './useStyles';

export const MessagesComponent = (props) => {
    const title = 'Сообщения';


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title} t={props.t}>
                <Grid item xs={9}>
                   <div>
                       Messages
                   </div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
