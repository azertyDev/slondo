import React from 'react'
import { useRouter } from 'next/router'
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Animal = () => {
    const router = useRouter()

    return (
        <MainLayout title={`Животные - ${router.query.id}`}>
            {router.query.id}
        </MainLayout>
    )
}

export default Animal
