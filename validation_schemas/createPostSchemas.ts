import {object, string, array, lazy} from "yup";
import {requiredMsg} from "@src/common_data/form_fields";


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

export const isRequired = (field: string): boolean =>
    reqList.some(reqField => reqField === field);

export const paramsFormSchema = lazy((value) => object(
    Object.entries(value)
        .reduce((acc, [key]) => {
            if (isRequired(key)) {
                if (typeof value[key] === 'object') {
                    acc[key] = object<{ id: number }>()
                        .nullable()
                        .test(
                            '',
                            requiredMsg,
                            value => !!value && !!value.id
                        );
                } else {
                    acc[key] = string().required(requiredMsg);
                }
            }
            return acc;
        }, {})
));

export const appearanceSchema = object({
    files: array().required(requiredMsg),
    color: object<{ id: number }>()
        .nullable()
        .test(
            '',
            requiredMsg,
            color => !color || !!color.id
        )
});

export const defaultParamsSchema = object({
    title: string().required(requiredMsg),
    price: string().required(requiredMsg),
    description: string().required(requiredMsg),
    location: object<{ city: { id: number } }>()
        .nullable()
        .test(
            '',
            requiredMsg,
            location => !!location && !!location.city.id
        ),
    auction: object({
        duration: object<{ id: number }>()
            .nullable()
            .test('',
                requiredMsg,
                duration => !duration || !!duration.id
            )
    })
});