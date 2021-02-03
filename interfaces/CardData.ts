export interface CardData {
    isFetch: boolean;
    isShowMoreFetch?: boolean;
    error: unknown;
    data: {
        cards: InnerCardData[];
        total: number;
    };
}

export type InnerCardData = {
    id: number;
    title: string;
    safe_deal: number;
    price: string;
    number_of_views?: number;
    region: {
        id: number;
        name: string;
    };
    city: {
        id: number;
        name: string;
    };
    district?: {
        id: number;
        name: string;
    };
    currency: {
        id: number;
        name: string;
    };
    images: {
        url: {
            default: string;
        };
    }[];
    category?: {
        id: number;
        name: string;
        mark: string;
    };
    sub_category_id?: number;
    ads_type: string;
    created_at: string;
    delivery: number;
    exchange: number;
    accepted?: boolean;
    expected?: boolean;
    denied?: boolean;
    promote?: boolean;
    raise?: boolean;
    raiseInRape?: boolean;
    isModerated?: boolean;
    follow?: boolean;
};
