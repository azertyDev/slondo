import {FC, ReactNode} from 'react';
import {SearchApartments} from '@src/components/post/search_post/search_form/categories_forms/estate/search_apartments/SearchApartments';
import {SearchHousesCottages} from '@src/components/post/search_post/search_form/categories_forms/estate/search_houses_cottages/SearchHousesCottages';
import {SearchCommercialProperty} from '@src/components/post/search_post/search_form/categories_forms/estate/search_commercial_property/SearchCommercialProperty';
import {SearchLand} from '@src/components/post/search_post/search_form/categories_forms/estate/search_land/SearchLand';
import {SearchParkingLotsBoxes} from '@src/components/post/search_post/search_form/categories_forms/estate/search_parking_lots_boxes/SearchParkingLotsBoxes';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';

type SearchEstatePropsType = {
    subcategoryName: string;
    isRent: boolean;
    filters;
    handleReset: () => void;
    urlParams;
} & CommonFiltersType;

export type SubcategoryFormTypes = {
    formik;
} & CommonFiltersType;

export const SearchEstate: FC<SearchEstatePropsType> = props => {
    const {
        categoryName,
        subcategoryName,
        isRent,
        formik,
        filters,
        handleReset,
        handleSelect,
        urlParams
    } = props;

    function getFormByCtgr(): ReactNode {
        switch (subcategoryName) {
            case 'flat':
                return (
                    <SearchApartments
                        formik={formik}
                        isRent={isRent}
                        filters={filters}
                        urlParams={urlParams}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={categoryName}
                    />
                );
            case 'houses_cottages':
                return (
                    <SearchHousesCottages
                        formik={formik}
                        isRent={isRent}
                        filters={filters}
                        urlParams={urlParams}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={categoryName}
                    />
                );
            case 'commercial_real_estate':
                return (
                    <SearchCommercialProperty
                        formik={formik}
                        isRent={isRent}
                        filters={filters}
                        urlParams={urlParams}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={categoryName}
                    />
                );
            case 'land_plots':
                return (
                    <SearchLand
                        formik={formik}
                        filters={filters}
                        urlParams={urlParams}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={categoryName}
                    />
                );
            case 'underground_parking_lots_boxes':
                return (
                    <SearchParkingLotsBoxes
                        formik={formik}
                        filters={filters}
                        urlParams={urlParams}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={categoryName}
                    />
                );
        }
    }

    return (
        <CustomFormikProvider formik={formik}>
            {!!subcategoryName && getFormByCtgr()}
        </CustomFormikProvider>
    );
};
