import {object, number, string, array, mixed, lazy} from "yup";


export const isRequired = (field: string): boolean => {
    const reqList = [
        'year',
        'mileage',
        'body',
        'manufacturer',
        'models',
        'colors',
        'car_engine_type',
        'transmission',
        'transport_type',
        'area_value'
    ];

    return reqList.some(reqField => reqField === field);
};

const requiredMsg = 'Обязательное поле!';

const lazyAdParams = lazy((value) => object(
    Object.entries(value)
        .reduce((acc, [key]) => {
            if (isRequired(key)) {
                if (typeof value[key] === 'object') {
                    acc[key] = object({
                        id: number().nullable().required(requiredMsg)
                    });
                } else {
                    acc[key] = string().required(requiredMsg);
                }
            }
            return acc;
        }, {})
));

export const createAdvrtSchema = object().shape({
    title: string().required(requiredMsg),
    price: string().required(requiredMsg),
    currency: lazy(value => (
        value !== undefined
            ? object({
                id: number().nullable().required(requiredMsg)
            })
            : mixed().notRequired()
    )),
    location: object({
        city_id: number().required(requiredMsg),
    }).nullable().required(requiredMsg),
    files: array().required(requiredMsg),
    description: string().required(requiredMsg),
    adParams: lazyAdParams,
});