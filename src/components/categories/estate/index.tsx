import React from 'react'
import {MainLayout} from "@src/components/MainLayout";
import {useStyles} from './useStyles'
import Filter from "@src/components/categories/estate/filter";

const Estate = () => {

    const classes = useStyles()

    return (
        <MainLayout title="Estate">
            <div className={classes.root}>
                <Filter />
            </div>
        </MainLayout>
    )
}

export default Estate

