import {ReactNode} from "react";

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
        adsParams: [
            {
                currency: []
            }
        ];
    },
}

export interface CreateAdFields {
    isFetch: boolean;
    title: string;
    price: string;
    currency: {
        id: number;
        name: string;
    };
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
    files: FileType[];
    description: string;
    phone: string;
    avalTime: {
        isActive: boolean;
        week: { id: number, name: string }[];
        start_time: string;
        end_time: string;
    };
    auction: {
        duration: {
            id: number;
            expiration_at: string
        };
        offer_the_price: boolean;
        auto_renewal: boolean;
        display_phone: boolean;
        reserve_price: string;
        price_by_now: {
            isActive: boolean;
            value: string;
        }
    };
    adParams: any
}

export type FileType = {
    file?: { name: string };
    url: string | ReactNode;
};