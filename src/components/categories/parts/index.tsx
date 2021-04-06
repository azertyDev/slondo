import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Parts = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Parts - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Parts
