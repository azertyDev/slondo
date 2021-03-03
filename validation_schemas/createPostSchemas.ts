import {object, string, array, lazy} from "yup";
import {requiredMsg, requireFields} from "@src/common_data/form_fields";


export const isRequired = (field: string): boolean =>
    requireFields.some(reqField => reqField === field);

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