export interface AdvertisementProps {
    isPreview: boolean;
    isSuccess: boolean;
    handlePreview: () => void;
    handleSuccess: () => void
}

export interface CreateAdState {
    isFetch: boolean;
    error?: unknown;
    adType: {
        id: number;
        name: string
    };
    category: {
        id: number;
        name: string
    };
    data: {
        id: number;
        name: string;
        address: [];
        adsParams: [
            {
                currency: []
            }
        ];
    },
}

export interface CreateAdFields {
    title: string;
    price: string;
    safe_deal: boolean;
    delivery: boolean;
    exchange: boolean;
    location: {
        area_id: number;
        area: string;
        city_id: number;
        city: string;
        district: string;
        district_id: number;
    };
    files: [];
    description: string;
    phone: string;
}