import {FC} from 'react';
import {WithT} from 'i18next';
import {useTranslation} from 'next-i18next';
import {RegularParams} from '@src/components/post/create_post/form_page/params_form/categories_forms/regular_params/RegularParams';
import {CarParams} from '@src/components/post/create_post/form_page/params_form/categories_forms/car_params/CarParams';
import {prepareParamsData} from '@src/helpers';
import {EstateParams} from '@src/components/post/create_post/form_page/params_form/categories_forms/estate_params/EstateParams';
import {TransportParams} from '@src/components/post/create_post/form_page/params_form/categories_forms/transport_params/TransportParams';
import {JobParams} from '@src/components/post/create_post/form_page/params_form/categories_forms/job_params/JobParams';
import {useStyles} from './useStyles';


export type CommonParamsPropsType = {
    type?,
    subcategoryName?: string,
    isPreview?: boolean,
    filters,
    onSubmit: (v) => void,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void
} & WithT;

type ParamsFormPropsType = {
    type,
    category,
    subcategory,
    filters,
    isPreview?: boolean,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void,
    handleSubmit: (v) => void,
    handleNextFormOpen?: () => void
};

export const ParamsFormContainer: FC<ParamsFormPropsType> = (props) => {
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

    const {t} = useTranslation('post');

    const onSubmit = (values) => {
        const params = prepareParamsData({...values});
        handleSubmit({params});
        handleNextFormOpen();
    };

    const getParamsForm = () => {
        switch (category.name) {
            case 'car':
                return <CarParams
                    t={t}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            case 'transport':
                return <TransportParams
                    t={t}
                    filters={filters}
                    onSubmit={onSubmit}
                    type={type}
                    subcategoryName={subcategory.name}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'estate':
                return <EstateParams
                    t={t}
                    type={type}
                    onSubmit={onSubmit}
                    filters={filters}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            case 'job':
                return <JobParams
                    t={t}
                    onSubmit={onSubmit}
                    filters={filters}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    subcategoryName={subcategory.name}
                    currentFormIndex={currentFormIndex}
                />;
            default:
                return <RegularParams
                    t={t}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    subcategoryName={subcategory.name}
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