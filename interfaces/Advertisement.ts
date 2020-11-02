export interface AdvertisementProps {
    isPreview: boolean,
    isSuccess: boolean,
    handlePreview: () => void,
    handleSuccess: () => void
}

export interface CreateAdState {
    isFetch: boolean,
    error?: any,
    data: []
}