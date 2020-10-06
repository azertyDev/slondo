import React, { useState } from 'react'
import CreateAdvertisement from './createAdvertisement/CreateAdvertisement'
import { PreviewAdvertisement } from './previewAdvertisement/PreviewAdvertisement'

export const CreateAdvertisementContainer = () => {
    const [isPreview, setIsPreview] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handlePreview = () => {
        setIsPreview(true)
    }
    return (
        <div>
            {/* {isSuccess ? <div>Success</div> : <div>Fail</div>} */}

            {isPreview ? (
                <PreviewAdvertisement />
            ) : (
                <CreateAdvertisement handlePreview={handlePreview} />
            )}
        </div>
    )
}
