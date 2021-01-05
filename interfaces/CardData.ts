export interface CardData {
    isFetch: boolean;
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
    location: string;
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
