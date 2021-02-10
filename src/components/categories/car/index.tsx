import React from 'react'
import {MainLayout} from "@src/components/MainLayout";
import {useStyles} from './useStyles'
import Filter from "@src/components/categories/car/filter";

const Car = () => {

    const classes = useStyles()

    return (
        <MainLayout title="Автомобили">
            <div className={classes.root}>
                <Filter />

            </div>
        </MainLayout>
    )
}

export default Car
