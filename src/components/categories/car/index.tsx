import React from 'react'
import {MainLayout} from "@src/components/MainLayout";
import {useStyles} from './useStyles'

const Car = () => {

    const classes = useStyles()

    return (
        <MainLayout title="Автомобили">
            <div className={classes.root}>
                Car
            </div>
        </MainLayout>
    )
}

export default Car
