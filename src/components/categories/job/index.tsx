import React from 'react'
import {useRouter} from "next/router";
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Job = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Job - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Job
