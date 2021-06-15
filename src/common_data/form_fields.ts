export const fieldIsRequired = 'fieldIsRequired';

export const requireFields = [
    'title',
    'type',
    'price',
    'startPrice',
    'year',
    'mileage',
    'body',
    'manufacturer',
    'models',
    'colors',
    'car_engine_type',
    'transmission',
    'transport_type',
    'condition',
    'duration',
    'currency',
    'estate_type',
    'floor',
    'number_of_floors',
    'rooms',
    'area',
    'land_area',
    'general_area',
    'model',
    'position',
    'engine_type',
    'engine_capacity',
    'drive',
    'user_name',
    'comment'
];

export const excludeFields = [
    'title',
    'id',
    'name',
    'type_id',
    'sub_type_id',
    'area_id'
];

export const numericFields = [
    'price',
    'reserve_price',
    'price_buy_now',
    'price_from',
    'price_to',
    'year',
    'area',
    'floor',
    'general_area',
    'kitchen_area',
    'living_area',
    'land_area',
    'number_of_floors',
    'number_of_bedrooms',
    'engine_capacity',
    'mileage',
    'ceiling_height',
    'year_from',
    'year_to',
    'mileage_from',
    'mileage_to',
    'engine_capacity_from',
    'engine_capacity_to'
];

export const fractionalFields = [
    'engine_capacity',
    'ceiling_height'
];

export const optionFields = [
    'function',
    'mount',
    'properties',
    'power_windows',
    'multimedia',
    'anti_theft',
    'airbags',
    'assistance',
    'parking',
    'adjustable_seats',
    'seat_heating',
    'power_windows',
    'seat_heating',
    'steering',
    'other',
    'comfort',
    'safety',
    'view'
];

export const singleFields = [
    'manufacturer'
];

export const stringFields = [
    'year_from',
    'year_to',
    'mileage_from',
    'mileage_to',
    'engine_capacity_from',
    'engine_capacity_to'
];