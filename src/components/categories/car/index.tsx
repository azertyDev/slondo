import React from 'react'
import {MainLayout} from "@src/components/MainLayout";
import { useRouter } from 'next/router'
import {useStyles} from './useStyles'
import Filter from "@src/components/categories/car/filter";

const Car = () => {
    const router = useRouter()
    const classes = useStyles()

    return (
        <MainLayout title={`Автомобили - ${router.query.id}`}>
            <div className={classes.root}>
                <Filter />
                {router.query.id}
            </div>
        </MainLayout>
    )
}

export default Car
