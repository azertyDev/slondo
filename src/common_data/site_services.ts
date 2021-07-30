enum SafeDeal {
    parts = 1,
    goods,
    for_homes_cottages,
    electronics,
    hobbies,
    animal
}

enum Exchange {
    car = 1,
    transport,
    parts,
    estate,
    goods,
    for_homes_cottages,
    electronics,
    hobbies,
    animal
}

enum Delivery {
    parts = 1,
    goods,
    for_homes_cottages,
    electronics,
    hobbies,
    animal
}

export const site_services = {
    safe_deal: SafeDeal,
    exchange: Exchange,
    delivery: Delivery
};