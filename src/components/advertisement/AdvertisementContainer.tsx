import React, { useState } from 'react'
import CreateAdvertisement from './createAdvertisement/CreateAdvertisement'
import { PreviewAdvertisement } from './previewAdvertisement/PreviewAdvertisement'
import { Advertisement } from "./Advertisement";

export const AdvertisementContainer = () => {
    const [isPreview, setIsPreview] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handlePreview = () => {
        setIsPreview(true)
    }
    return (
        <div>
            {/* {isSuccess ? <div>Success</div> : <div>Fail</div>} */}
            <Advertisement isPreview={isPreview} handlePreview={handlePreview}/>

        </div>
    )
}
