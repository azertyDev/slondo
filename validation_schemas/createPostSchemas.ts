import {object, string, array, lazy} from 'yup';
import {fieldRequiredTxt} from '@src/common_data/fields_keys';
import {isRequired} from '@root/src/helpers';

export const paramsFormSchema = lazy(
    (value) => object({
        title: string().required(fieldRequiredTxt),
        ...Object.entries(value)
            .reduce((acc, [key]) => {
                if (isRequired(key)) {
                    if (typeof value[key] === 'object') {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                '',
                                fieldRequiredTxt,
                                value => !!value && !!value.id
                            );
                    } else if (key === 'engine_capacity') {
                        acc[key] = string()
                            .required(fieldRequiredTxt)
                            .test(
                                '',
                                'value not must be less than 0.8',
                                value => +value >= 0.8
                            );
                    } else {
                        acc[key] = string().required(fieldRequiredTxt);
                    }
                }
                return acc;
            }, {})
    })
);

export const transportParamsSchema = lazy(
    (value) => object({
        title: string().required(fieldRequiredTxt),
        ...Object.entries(value)
            .reduce((acc, [key]) => {
                if (isRequired(key)) {
                    if (typeof value[key] === 'object') {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                '',
                                fieldRequiredTxt,
                                value => !!value && !!value.id
                            );
                    } else {
                        acc[key] = string().required(fieldRequiredTxt);
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
                        acc[key] = string().required(fieldRequiredTxt);
                    } else {
                        acc[key] = object<{ id: number }>()
                            .nullable()
                            .test(
                                `${key}`,
                                fieldRequiredTxt,
                                value => !!value
                            );
                    }
                }
                return acc;
            }, {})
    )
);

export const appearanceSchema = object({
    files: array().compact(v => v === null).required('addPhotos'),
    color: object<{ id: number }>()
        .nullable()
        .test(
            '',
            fieldRequiredTxt,
            color => !color || !!color.id
        )
});

export const defaultParamsSchema = object({
    price: string().required(fieldRequiredTxt),
    description: string().required(fieldRequiredTxt),
    location: object()
        .nullable()
        .required(fieldRequiredTxt)
});

export const auctionParamsSchema = defaultParamsSchema.shape({
    auction: object<{ duration: any }>()
        .nullable()
        .test(
            '',
            fieldRequiredTxt,
            auction => !!auction.duration?.id
        )
});