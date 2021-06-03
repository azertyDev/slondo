import {FC} from 'react';
import {WithT} from 'i18next';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularParams} from '@src/components/post/create_post/form_page/params_form/params_forms/regular_params/RegularParams';
import {CarParams} from '@src/components/post/create_post/form_page/params_form/params_forms/car_params/CarParams';
import {prepareParamsData} from '@src/helpers';
import {useStyles} from './useStyles';


export type CommonParamsPropsType = {
    type?,
    filters,
    isPreview?: boolean,
    onSubmit: (v) => void,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void
} & WithT;

type ParamsFormPropsType = {
    type,
    filters,
    isPreview?: boolean,
    currentFormIndex: number,
    subCategory,
    handleFormOpen: (k) => () => void,
    handleSubmit: (v) => void,
    handleNextFormOpen?: () => void
} & WithT;

export const ParamsFormContainer: FC<ParamsFormPropsType> = (props) => {
    const {
        t,
        isPreview,
        filters,
        handleSubmit,
        type,
        subCategory,
        currentFormIndex,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const onSubmit = (values) => {
        const params = prepareParamsData({...values});
        handleSubmit({params});
        handleNextFormOpen();
    };

    const getParamsForm = () => {
        switch (subCategory.name) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarParams
                    t={t}
                    filters={filters}
                    isPreview={isPreview}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                    subCategoryName={subCategory.name}
                    onSubmit={onSubmit}
                />;
            case 'apartments':
                return <ApartmentsParams
                    t={t}
                    type={type}
                    filters={filters}
                    isPreview={isPreview}
                    onSubmit={onSubmit}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'housesCottages':
                return <HousesCottagesParams
                    t={t}
                    type={type}
                    filters={filters}
                    isPreview={isPreview}
                    onSubmit={onSubmit}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'land':
                return <LandParams
                    t={t}
                    type={type}
                    isPreview={isPreview}
                    filters={filters}
                    onSubmit={onSubmit}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'parkingLotsAndBoxes':
                return <ParkingLotsBoxes
                    t={t}
                    type={type}
                    isPreview={isPreview}
                    filters={filters}
                    onSubmit={onSubmit}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'commercialProperty':
                return <CommercialPropertyParams
                    t={t}
                    type={type}
                    filters={filters}
                    isPreview={isPreview}
                    onSubmit={onSubmit}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            default:
                return <RegularParams
                    t={t}
                    filters={filters}
                    isPreview={isPreview}
                    onSubmit={onSubmit}
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