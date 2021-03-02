import {ReactNode} from "react";

export type PostType = IdNameType & {
    currency: IdNameType[];
    expired: { id: number, hours: number }[];
    image: { url: string },
    guide: string,
    subtitle: string
};

export interface CreatePostProps {
    isFetch: boolean;
    files: FileType[];
    postParams: any;
    defaultParams: {
        category_id: number;
        sub_category_id: number;
        ads_type_id: number;
        title: string;
        price: string;
        description: string;
        phone: string;
        currency: IdNameType;
        safe_deal: boolean;
        delivery: boolean;
        exchange: boolean;
        location: LocationType;
        avalTime: {
            isActive: boolean;
            available_days: { id: number }[];
            start_time: string;
            end_time: string;
        };
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
}

export type LocationType = {
    region_id: number;
    city_id: number;
    district_id: number;
};

export type IdNameType = {
    id: number;
    name: string;
};

export type FileType = {
    file?: { name: string };
    url: string | ReactNode;
};