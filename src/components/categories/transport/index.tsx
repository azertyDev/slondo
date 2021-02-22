import React, {FC} from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";
import { useStyles } from './useStyles';

const Transport: FC = () =>  {
    const router = useRouter()
    const classes = useStyles();

    return (
        <MainLayout title={`Transport - ${router.query.id}`}>
            <div className={classes.root}>
                {router.query.id}
            </div>
        </MainLayout>
    )
}

export default Transport
