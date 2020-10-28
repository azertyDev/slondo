import React, {useState} from 'react'
import {Advertisement} from './Advertisement'
import {MainLayout} from "../MainLayout";


export const AdvertisementContainer = () => {
    const [isPreview, setIsPreview] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handlePreview = () => {
        setIsPreview(true)
    }

    const handleSuccess = () => {
        setIsSuccess(true)
    }

    return (
        <div>
            <MainLayout>
                <Advertisement
                    isPreview={isPreview}
                    handlePreview={handlePreview}
                    isSuccess={isSuccess}
                    handleSuccess={handleSuccess}
                />
            </MainLayout>
        </div>
    )
}
