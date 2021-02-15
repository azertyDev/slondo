import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";

const Service = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Service - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Service
