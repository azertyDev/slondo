import React, {FC} from 'react';
import {useStyles} from './useStyles';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";


export const Rating: FC<any> = () => {
    const title = 'Рейтинг';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title}>
                <Grid item xs={9}>
                    <div>Rating</div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
