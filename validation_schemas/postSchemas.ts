import {object, string, array, lazy, number} from 'yup';
import {fieldRequiredTxt, fractionalFields} from '@src/common_data/fields_keys';
import {DESC_MIN, SAFE_DEAL_LIMIT, TITLE_MIN} from "@src/constants";
import {isRequired} from '@root/src/helpers';

export const titleValidate = string()
    .required(fieldRequiredTxt)
    .test('len', 'min_chars', val => !!val && val.length >= TITLE_MIN);

export const paramsFormSchema = lazy(
    (value) => object({
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
                    } else if (key === 'title') {
                        acc[key] = titleValidate;
                    } else if (key === 'engine_capacity') {
                        acc[key] = string()
                            .required(fieldRequiredTxt)
                            .test(
                                '',
                                'notMustBeLess0.8',
                                value => +value >= 0.8
                            );
                    } else {
                        acc[key] = string().required(fieldRequiredTxt);
                    }
                } else if (fractionalFields.some(f => f === key)) {
                    acc[key] = string()
                        .test(
                            '',
                            'notMustBeLessZero',
                            value => +value > 0
                        );
                }
                return acc;
            }, {})
    })
);

export const transportParamsSchema = lazy(
    (value) => object({
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
                    } else if (key === 'title') {
                        acc[key] = titleValidate;
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
    price: number().required(fieldRequiredTxt),
    description: string()
        .required(fieldRequiredTxt)
        .test('len', 'min_chars', val => !!val && val.length > DESC_MIN),
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

export const safeDealPriceSchema = defaultParamsSchema.concat(object({
    price: number().required(fieldRequiredTxt).min(SAFE_DEAL_LIMIT, 'price_not_bee_less')
}));

export const complaintSchema = object({
    complaint: string().required(fieldRequiredTxt)
});