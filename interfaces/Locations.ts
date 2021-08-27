export type CityType = {
    id: number,
    name: string,
    ru_name: string,
}

export type RegionType = {
    cities: CityType[]
} & CityType;