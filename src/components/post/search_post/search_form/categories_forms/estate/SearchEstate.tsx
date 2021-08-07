import {FC, ReactNode, useEffect} from 'react';
import {SearchApartments} from '@src/components/post/search_post/search_form/categories_forms/estate/search_apartments/SearchApartments';
import {SearchHousesCottages} from '@src/components/post/search_post/search_form/categories_forms/estate/search_houses_cottages/SearchHousesCottages';
import {SearchCommercialProperty} from '@src/components/post/search_post/search_form/categories_forms/estate/search_commercial_property/SearchCommercialProperty';
import {SearchLand} from '@src/components/post/search_post/search_form/categories_forms/estate/search_land/SearchLand';
import {SearchParkingLotsBoxes} from '@src/components/post/search_post/search_form/categories_forms/estate/search_parking_lots_boxes/SearchParkingLotsBoxes';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';
import {Grid} from '@material-ui/core';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useFormik} from 'formik';

type SearchEstatePropsType = {
    subcategoryName: string,
    isRent: boolean,
    onSubmit,
    filters,
    handleReset: () => void,
    urlParams
} & CommonFiltersType;

export type SubcategoryFormTypes = {
    formik
} & CommonFiltersType;

export const SearchEstate: FC<SearchEstatePropsType> = (props) => {
    const {
        categoryName,
        subcategoryName,
        isRent,
        onSubmit,
        filters,
        handleReset,
        urlParams,
        sameWithUrlCtgr
    } = props;

    const initialValues = {
        estate_type: null,
        room: [],
        area_from: '',
        area_to: '',
        floor_from: '',
        floor_to: '',
        number_of_floors_from: '',
        number_of_floors_to: '',
        material: [],
        metro: [],
        repair: [],
        furnished: false,
        with_pledge: false,
        general_area_from: '',
        general_area_to: '',
        land_area_from: '',
        land_area_to: '',
        location: null,
        p2pHold: null,
        posted: null,
        electricity: null,
        sewerage: null,
        gas: null,
        water: null,
        parking_spaces_from: '',
        parking_spaces_to: ''
    };

    const formik = useFormik<any>({
        initialValues: initialValues,
        onSubmit
    });

    function getFormByCtgr(): ReactNode {
        switch (subcategoryName) {
            case 'flat':
                return <SearchApartments
                    formik={formik}
                    isRent={isRent}
                    filters={filters}
                    handleReset={handleReset}
                    urlParams={urlParams}
                    categoryName={categoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
            case 'houses_cottages':
                return <SearchHousesCottages
                    formik={formik}
                    isRent={isRent}
                    filters={filters}
                    handleReset={handleReset}
                    urlParams={urlParams}
                    categoryName={categoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
            case 'commercial_real_estate':
                return <SearchCommercialProperty
                    formik={formik}
                    isRent={isRent}
                    filters={filters}
                    handleReset={handleReset}
                    urlParams={urlParams}
                    categoryName={categoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
            case 'land_plots':
                return <SearchLand
                    formik={formik}
                    filters={filters}
                    handleReset={handleReset}
                    urlParams={urlParams}
                    categoryName={categoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
            case 'underground_parking_lots_boxes':
                return <SearchParkingLotsBoxes
                    formik={formik}
                    filters={filters}
                    handleReset={handleReset}
                    urlParams={urlParams}
                    categoryName={categoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
        }
    }

    useEffect(() => {
        formik.setValues(initialValues);
    }, [subcategoryName]);

    return (
        <CustomFormikProvider formik={formik}>
            {!!subcategoryName && getFormByCtgr()}
            <Grid item container xs={12}>
                <ActionButtons handleReset={handleReset}/>
            </Grid>
        </CustomFormikProvider>
    );
};
