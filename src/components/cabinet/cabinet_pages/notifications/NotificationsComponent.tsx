import React from 'react';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";

// styles
import {useStyles} from './useStyles';

export const NotificationsComponent = (props) => {
    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title} t={props.t}>
                <Grid item xs={9}>
                    <div>Notifications</div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
