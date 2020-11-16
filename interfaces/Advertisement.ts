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
    },
}

export interface CreateAdFields {
    adType: {
        id: number;
        name: string
    };
    category: {
        id: number;
        name: string
    };
    title: string;
    safe_deal: boolean;
    delivery: boolean;
    exchange: boolean;
    location: {
        area_id: number;
        area: string;
        city_id: number;
        city: string;
    };
    files: [];
    description: string;
    phone: string;
    adsParams: any;
}