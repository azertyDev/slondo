import React, {FC} from 'react';
import {Grid} from "@material-ui/core";
import {CabinetWrapper} from "@src/components/cabinet/CabinetWrapper";
import {useStyles} from './useStyles';


export const Settings: FC<any> = () => {
    const title = 'Рейтинг';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                <Grid item xs={9}>
                    <div>Rating</div>
                </Grid>
            </CabinetWrapper>
        </div>
    )
}
