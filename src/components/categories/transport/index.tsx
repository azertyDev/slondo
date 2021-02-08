import React, {FC} from 'react'
import {MainLayout} from "@src/components/MainLayout";
import { useStyles } from './useStyles';

const Transport: FC = () =>  {
    const classes = useStyles();

    return (
        <MainLayout title="Transport">
            <div className={classes.root}>
                Transport
            </div>
        </MainLayout>
    )
}

export default Transport
