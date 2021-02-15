import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";
import {useStyles} from './useStyles'
import Filter from "@src/components/categories/estate/filter";

const Estate = () => {
    const router = useRouter()

    const classes = useStyles()

    return (
        <MainLayout title={`Estate - ${router.query.id}`}>
            <div className={classes.root}>
                <Filter />
                {router.query.id}
            </div>
        </MainLayout>
    )
}

export default Estate

