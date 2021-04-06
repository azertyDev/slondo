import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Service = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Service - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Service
