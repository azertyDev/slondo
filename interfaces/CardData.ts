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
    price: number;
    number_of_views: number;
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
    category: {
        id: null;
        name: string;
        mark: string;
    };
    accepted?: boolean;
    expected?: boolean;
    denied?: boolean;
    promote?: boolean;
    raise?: boolean;
    raiseInRape?: boolean;
    isModerated?: boolean;
    follow?: boolean;
};
