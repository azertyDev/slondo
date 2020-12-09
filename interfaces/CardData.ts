export interface CardData {
    isFetch: boolean;
    error: unknown;
    cardData: {
        data: Array<InnerCardData>;
        total: number;
    };
}

export type InnerCardData = {
    id: number;
    title: string;
    cardType: string;
    safe_deal: number;
    price: string;
    location: string;
    currency: {
        id: number;
        name: string;
    }
    images: Array<{
        url: {
            original: string
        }
    }>;
    created_at: string;
    delivery: number,
    exchange: number,
}