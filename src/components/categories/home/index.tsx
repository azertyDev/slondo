import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/MainLayout";

const Home = () => {
    const router = useRouter()

    return (
        <MainLayout title={`Home - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Home
