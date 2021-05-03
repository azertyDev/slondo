import {object, string, array, lazy} from 'yup';
import {fieldIsRequired} from '@src/common_data/form_fields';
import {isRequired} from '@root/src/helpers';

export const paramsFormSchema = lazy(
    (value) => object({
        title: string().required(fieldIsRequired),
        ...Object.entries(value)
            .reduce((acc, [key]) => {
                if (isRequired(key)) {
                    if (typeof value[key] === 'object') {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                '',
                                fieldIsRequired,
                                value => !!value && !!value.id
                            );
                    } else if (key === 'engine_capacity') {
                        acc[key] = string()
                            .required(fieldIsRequired)
                            .test(
                                '',
                                'value not must be less than 0.8',
                                value => +value >= 0.8
                            );
                    } else {
                        acc[key] = string().required(fieldIsRequired);
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
                        acc[key] = string().required(fieldIsRequired);
                    } else {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                `${key}`,
                                fieldIsRequired,
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
            fieldIsRequired,
            color => !color || !!color.id
        )
});

export const defaultParamsSchema = object({
    price: string().required(fieldIsRequired),
    description: string().required(fieldIsRequired),
    location: object<{ city: { id: number } }>()
        .nullable()
        .test(
            '',
            fieldIsRequired,
            location => !!location && !!location.city.id
        )
});

export const auctionParamsSchema = defaultParamsSchema.shape({
    auction: object<{ duration: any }>()
        .nullable()
        .test(
            '',
            fieldIsRequired,
            auction => !!auction.duration?.id
        )
});