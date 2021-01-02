import {ReactNode} from "react";
import {CategoryType, SubCategoryType} from "@root/interfaces/Categories";

export interface AdvertisementProps {
    isPreview: boolean;
    isSuccess: boolean;
    handlePreview: () => void;
    handleSuccess: () => void
}

export interface CreateAncmntState {
    isFetch: boolean;
    error?: unknown;
    category: CategoryType;
    subCategory: SubCategoryType;
}

export type AncmntType = IdNameType & {
    currency: IdNameType[];
    expired: { id: number, expiration_at: number }[];
    image: { url: string }
};

export type AncmntStateTypes = {
    isFetch: boolean;
    types: AncmntType[];
};

export interface CreateAncmntFields {
    isFetch: boolean;
    title: string;
    price: string;
    currency: IdNameType;
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
        week: IdNameType[];
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

export type IdNameType = {
    id: number;
    name: string;
};

export type FileType = {
    file?: { name: string };
    url: string | ReactNode;
};