import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";

const Hobbies = () => {
    const router = useRouter()
    return (
        <MainLayout title={`MainLayout - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Hobbies
