export interface AdvertisementProps {
    isPreview: boolean,
    isSuccess: boolean,
    handlePreview: () => void,
    handleSuccess: () => void
}

export interface CreateAdState {
    isFetch: boolean,
    error?: any,
    adType: {
        id: number,
        name: string
    },
    category: {
        id: number,
        name: string
    },
    data: {
        id: number,
        name: string
    }
}

export interface CreateAdFields {
    isFetch: boolean,
    error?: any,
    adType: {
        id: number,
        name: string
    },
    category: {
        id: number,
        name: string
    },
    title: string,
    safe_deal: boolean,
    delivery: boolean,
    exchange: boolean,
    location: string,
    files: [],
    description: string,
    phone: string,
    adsParams: any
}