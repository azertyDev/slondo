export interface CardData {
    isFetch: boolean;
    error: any;
    itemsPerPage: number;
    data: {
        data: [
            {
                id: number;
                title: string;
                location: string;
                safe_deal: boolean;
                created_at: string;
                total: number;
                currency: {
                    id: number;
                    name: string;
                };
                images: [
                    {
                        id: number;
                        url: string;
                    },
                ];
            },
        ];
    };
}

export interface FetchCardData {
    itemsPerPage: number,
    page: number,
    type: string,
}