import {FC, useContext} from 'react';
import {RegularParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/regular_params/RegularParams';
import {CarParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/car_params/CarParams';
import {EstateParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/estate_params/EstateParams';
import {TransportParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/transport_params/TransportParams';
import {JobParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/job_params/JobParams';
import {ElectronicsParams} from '@src/components/post/create_post/third_step/third_form/categories_forms/electronics_params/ElectronicsParams';
import {dotRegEx} from "@src/common_data/reg_exs";
import {AuthCtx} from "@src/context";
import {useStyles} from './useStyles';

export type CommonParamsPropsType = {
    type?,
    categoryName: string,
    subcategoryName?: string,
    isPreview?: boolean,
    filters,
    onSubmit: (v) => void,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void
};

type ParamsFormPropsType = {
    type,
    category,
    subcategory,
    filters,
    isPreview?: boolean,
    currentFormIndex: number,
    handleSubmit: (v) => void,
    handleNextFormOpen?: () => void,
    handleFormOpen: (k) => () => void
};

export const ThirdForm: FC<ParamsFormPropsType> = (props) => {
    const {
        isPreview,
        filters,
        handleSubmit,
        type,
        category,
        subcategory,
        currentFormIndex,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const categoryName = category.name;

    const {phone} = useContext(AuthCtx).user;

    const prepareParamsData = (data) => {
        return Object.keys(data).reduce<any>((acc, key) => {
            const isArray = Array.isArray(data[key]);
            const isDuplicatePhone = key === 'phone' && data[key] === phone;
            const isPrimitive = typeof data[key] === 'string'
                || typeof data[key] === 'number'
                || (typeof data[key] === 'boolean' && data[key]);

            if (data[key]) {
                if (isArray) {
                    if (data[key].length) {
                        acc[key] = data[key].map(id => ({id}));
                    }
                } else if (isPrimitive && !isDuplicatePhone) {
                    if (key === 'engine_capacity' && (data[key].length === 1 || RegExp(dotRegEx).test(data[key]))) {
                        data[key] = data[key].replace(dotRegEx, '');
                        data[key] = `${data[key]}.0`;
                    }
                    acc[key] = data[key];
                } else if (typeof data[key] === 'object') {
                    acc[`${key}_id`] = data[key].id;
                }
            }

            return acc;
        }, {});
    };

    const onSubmit = (values) => {
        const params = prepareParamsData(values);
        handleSubmit({params});
        handleNextFormOpen();
    };

    const getParamsForm = () => {
        switch (category.name) {
            case 'car':
                return <CarParams
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    categoryName={categoryName}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            case 'transport':
                return <TransportParams
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    subcategoryName={subcategory.name}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'estate':
                return <EstateParams
                    type={type}
                    onSubmit={onSubmit}
                    filters={filters}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    categoryName={categoryName}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            case 'job':
                return <JobParams
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    categoryName={categoryName}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            case 'electronics':
                return <ElectronicsParams
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            default:
                return <RegularParams
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {getParamsForm()}
        </div>
    );
};