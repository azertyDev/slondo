export interface CardData {
    isFetch: boolean;
    isShowMoreFetch?: boolean;
    error: unknown;
    data: {
        cards: InnerCardData[];
        total: number;
    }
}

export type InnerCardData = {
    id: number;
    title: string;
    safe_deal: number;
    price: string;
    region: {
        id: number,
        name: string;
    },
    city: {
        id: number,
        name: string;
    },
    district?: {
        id: number,
        name: string;
    },
    currency: {
        id: number;
        name: string;
    };
    images: {
        url: {
            default: string;
        };
    }[];
    created_at: string;
    delivery: number;
    exchange: number;
    ads_type: {
        id: number;
        name: string;
        mark: string;
    };
};
