import React from 'react';
import {CabinetCard} from "@src/components/cabinet/card/CabinetCard";

// styles
import {useStyles} from './useStyles';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";

export const RatingComponent = (props) => {
    const title = 'Рейтинг';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title} t={props.t}>
                <Grid item xs={9}>
                    <div>Rating</div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
