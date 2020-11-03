export interface CardData {
    isFetch: boolean;
    error: any;
    adData: adLotDataValues;
    lotData: adLotDataValues;
}

interface adLotDataValues {
    data: any[];
    total: number;
}

export interface FetchCardData {
    itemsPerPage: number;
    page: number;
    type: string;
}
