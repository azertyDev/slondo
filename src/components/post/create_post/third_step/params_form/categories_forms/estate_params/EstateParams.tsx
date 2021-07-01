import {FC} from 'react';
import {ApartmentsParams} from '@src/components/post/create_post/third_step/params_form/categories_forms/estate_params/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/third_step/params_form/categories_forms/estate_params/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/third_step/params_form/categories_forms/estate_params/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/third_step/params_form/categories_forms/estate_params/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/third_step/params_form/categories_forms/estate_params/commercial_property_params/CommercialPropertyParams';
import {CommonParamsPropsType} from '@src/components/post/create_post/third_step/params_form/ParamsFormContainer';

export const EstateParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        categoryName,
        subcategoryName,
        filters,
        isPreview,
        onSubmit,
        handleFormOpen,
        currentFormIndex
    } = props;

    const getParamsForm = () => {
        switch (subcategoryName) {
            case 'flat':
                return <ApartmentsParams
                    t={t}
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'houses_cottages':
                return <HousesCottagesParams
                    t={t}
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'land_plots':
                return <LandParams
                    t={t}
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'underground_parking_lots_boxes':
                return <ParkingLotsBoxes
                    t={t}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
            case 'commercial_real_estate':
                return <CommercialPropertyParams
                    t={t}
                    type={type}
                    filters={filters}
                    onSubmit={onSubmit}
                    isPreview={isPreview}
                    categoryName={categoryName}
                    handleFormOpen={handleFormOpen}
                    currentFormIndex={currentFormIndex}
                />;
        }
    };

    return (
        <div>
            {getParamsForm()}
        </div>
    );
};
