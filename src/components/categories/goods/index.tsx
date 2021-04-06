import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Goods = () => {
    const router = useRouter()
    return (
        <MainLayout title={`Goods - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Goods
