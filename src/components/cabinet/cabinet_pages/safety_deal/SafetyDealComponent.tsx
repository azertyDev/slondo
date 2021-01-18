import React from 'react';
import {Grid} from "@material-ui/core";
import {CabinetMenuWrapper} from "@src/components/cabinet/CabinetMenuWrapper";

// styles
import {useStyles} from './useStyles';

export const SafetyDealComponent = (props) => {
    const title = 'Безопасная покупка';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title} t={props.t}>
                <Grid item xs={9}>
                    <div className='wrapper'>
                        
                    </div>
                </Grid>
            </CabinetMenuWrapper>
        </div>
    )
}
