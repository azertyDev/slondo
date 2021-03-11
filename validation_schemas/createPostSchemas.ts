import {object, string, array, lazy} from "yup";
import {requiredMsg} from "@src/common_data/form_fields";
import {isRequired} from "@root/src/helpers";


export const paramsFormSchema = lazy(
    (value) => object({
        title: string().required(requiredMsg),
        ...Object.entries(value)
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
    })
);

export const regularFormSchema = lazy(
    value => object(
        Object.entries(value)
            .reduce((acc, [key]) => {
                if (isRequired(key)) {
                    if (typeof value[key] === 'string') {
                        acc[key] = string().required(requiredMsg);
                    } else {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                `${key}`,
                                requiredMsg,
                                value => !!value
                            );
                    }
                }
                return acc;
            }, {})
    )
);

export const appearanceSchema = object({
    files: array().required('addPhotos'),
    color: object<{ id: number }>()
        .nullable()
        .test(
            '',
            requiredMsg,
            color => !color || !!color.id
        )
});

export const defaultParamsSchema = object({
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