import React, {FC} from 'react';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";
import {useStyles} from './useStyles';


export const Messages: FC<any> = () => {
    const title = 'Сообщения';


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title}>
                <Grid item xs={9}>
                    <div>
                        Messages
                    </div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
