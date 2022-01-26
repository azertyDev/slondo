import {FC} from 'react';
import {CommonFiltersType} from '../../SearchForm';
import {SearchApartments} from './search_apartments/SearchApartments';
import {SearchCommercialProperty} from './search_commercial_property/SearchCommercialProperty';
import {SearchHousesCottages} from './search_houses_cottages/SearchHousesCottages';
import {SearchLand} from './search_land/SearchLand';
import {SearchParkingLotsBoxes} from './search_parking_lots_boxes/SearchParkingLotsBoxes';

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

    function getFormByCtgr() {
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

    return getFormByCtgr();
};
