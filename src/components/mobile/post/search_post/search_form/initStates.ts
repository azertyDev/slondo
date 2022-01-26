import {
    booleanFields,
    singleFields,
    stringFields
} from '@root/src/common_data/fields_keys';

export const initStates = {
    mainInit: {
        subcategory: null,
        type: null,
        post_type: null,
        price_from: '',
        price_to: '',
        free: false,
        archive: false,
        safe_deal: false,
        exchange: false,
        delivery: false,
        by_currency: null,
        by_filtering: 'created_at',
        page: '1'
    },
    car: {
        manufacturer: null,
        model: null,
        params: null,
        transmission: [],
        year_from: '',
        year_to: '',
        mileage_from: '',
        mileage_to: '',
        engine_capacity_from: '',
        engine_capacity_to: ''
    },
    transport: {
        year_from: '',
        year_to: '',
        engine_capacity_from: '',
        engine_capacity_to: '',
        mileage_from: '',
        mileage_to: ''
    },
    estate: {
        estate_type: null,
        room: [],
        area_from: '',
        area_to: '',
        floor_from: '',
        floor_to: '',
        number_of_floors_from: '',
        number_of_floors_to: '',
        material: [],
        metro: [],
        repair: [],
        furnished: false,
        with_pledge: false,
        general_area_from: '',
        general_area_to: '',
        land_area_from: '',
        land_area_to: '',
        location: null,
        p2pHold: null,
        posted: null,
        electricity: null,
        sewerage: null,
        gas: null,
        water: null,
        parking_spaces_from: '',
        parking_spaces_to: ''
    },
    job: {
        employment: [],
        experience: [],
        nature: [],
        urgent: {id: null}
    }
};

export const getInitStateByCategory = (
    category: string,
    urlParams,
    filters
) => {
    const vals: any = initStates[category] || {};

    Object.keys(urlParams).forEach(k => {
        const isSingleField = singleFields.some(f => f === k);
        const isStringField = stringFields.some(f => f === k);
        const isBooleanField = booleanFields.some(f => f === k);

        if (filters[k]) {
            if (isSingleField) {
                vals[k] = filters[k].find(v => v.id === +urlParams[k]);
            } else {
                vals[k] = filters[k].filter(v =>
                    urlParams[k]
                        .toString()
                        .split(',')
                        .some(p => +p === v.id)
                );
            }
        } else if (isBooleanField || isStringField) {
            vals[k] = isBooleanField || urlParams[k];
        }
    });

    if (urlParams.model && vals?.manufacturer?.models) {
        vals.model = vals.manufacturer.models.find(
            m => m.id === +urlParams.model
        );
    }

    return vals;
};
