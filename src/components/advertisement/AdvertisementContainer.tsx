import React, { useState } from 'react'
import { PreviewAdvertisement } from './previewAdvertisement/PreviewAdvertisement'
import { Advertisement } from './Advertisement'

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
            <Advertisement
                isPreview={isPreview}
                handlePreview={handlePreview}
                isSuccess={isSuccess}
                handleSuccess={handleSuccess}
            />
        </div>
    )
}
