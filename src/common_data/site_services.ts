enum SafeDeal {
    parts = 1,
    goods,
    home,
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
    home,
    electronics,
    hobbies,
    animal
}

enum Delivery {
    parts = 1,
    goods,
    home,
    electronics,
    hobbies,
    animal
}

export const site_services = {
    safe_deal: SafeDeal,
    exchange: Exchange,
    delivery: Delivery
};

export enum HasAuction {
    parts = 1,
    goods,
    home,
    electronics,
    hobbies,
    animal
}