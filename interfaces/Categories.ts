type markRuNameType = {
    id: number,
    name: string,
    ru_name: string,
};

export type CategoryType = markRuNameType & {
    iconUrl: string,
    smallIcon: JSX.Element,
    has_auction?: number,
    subcategory?: SubcategoryType[];
};

export type SubcategoryType = markRuNameType & {
    parents?: markRuNameType[],
    type?: TypeCategory[]
};

export type TypeCategory = markRuNameType & {
    parents?: markRuNameType[]
};
