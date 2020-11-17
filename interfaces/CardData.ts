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
    price: number;
    location: string;
    currency: {
        id: number;
        name: string;
    }
    images: Array<{ url: string }>;
    created_at: string;
}