import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";

const Free = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Free - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Free
