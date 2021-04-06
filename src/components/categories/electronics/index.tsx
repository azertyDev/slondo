import React, {FC} from 'react'
import {useRouter} from 'next/router'
import {MainLayout} from "@src/components/main_layout/MainLayout";

const Electronics: FC = () => {
    const router = useRouter();
    console.log(router.query)
    return (
        <MainLayout title={`Electronika - ${router.query.city} - ${router.query.index}`}>
            {router.query.index}
        </MainLayout>
    )
};

export default Electronics;
