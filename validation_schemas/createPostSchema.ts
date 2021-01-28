import {object, number, string, array, lazy} from "yup";


export const isRequired = (field: string): boolean => {
    const reqList = [
        'condition',
        'currency',
        'price',
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

const lazyPostParams = lazy((value) => object(
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

export const createPostSchema = object().shape({
    defaultParams: object({
        title: string().required(requiredMsg),
        // price: string().required(requiredMsg),
        // currency: lazy(value => (
        //     value !== undefined
        //         ? object({
        //             id: number().nullable().required(requiredMsg)
        //         })
        //         : mixed().notRequired()
        // )),
        location: object({
            city_id: number().required(requiredMsg),
        }).nullable().required(requiredMsg),
        description: string().required(requiredMsg),
    }),
    files: array().required(requiredMsg),
    postParams: lazyPostParams
});