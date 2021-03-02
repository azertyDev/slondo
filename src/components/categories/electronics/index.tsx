import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";

const Electronics = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Electronics - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Electronics