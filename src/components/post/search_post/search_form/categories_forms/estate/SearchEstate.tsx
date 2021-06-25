import {FC, ReactNode} from 'react';
import {SearchApartments} from '@src/components/post/search_post/search_form/categories_forms/estate/search_apartments/SearchApartments';
import {SearchHousesCottages} from '@src/components/post/search_post/search_form/categories_forms/estate/search_houses_cottages/SearchHousesCottages';
import {SearchCommercialProperty} from '@src/components/post/search_post/search_form/categories_forms/estate/search_commercial_property/SearchCommercialProperty';
import {SearchLand} from '@src/components/post/search_post/search_form/categories_forms/estate/search_land/SearchLand';
import {SearchParkingLotsBoxes} from '@src/components/post/search_post/search_form/categories_forms/estate/search_parking_lots_boxes/SearchParkingLotsBoxes';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';
import {Grid} from '@material-ui/core';

type SearchEstatePropsType = {
    subcategoryName: string,
    isRent: boolean,
    onSubmit,
    filters,
    handleReset: () => void,
    urlParams
};

export const SearchEstate: FC<SearchEstatePropsType> = (props) => {
    const {
        subcategoryName,
        isRent,
        onSubmit,
        filters,
        handleReset,
        urlParams
    } = props;

    const getFiltersByCtgr = (): ReactNode => {
        switch (subcategoryName) {
            case 'apartments':
                return <SearchApartments
                    isRent={isRent}
                    onSubmit={onSubmit}
                    filters={filters}
                    urlParams={urlParams}
                />;
            case 'housesCottages':
                return <SearchHousesCottages
                    isRent={isRent}
                    onSubmit={onSubmit}
                    filters={filters}
                    urlParams={urlParams}
                />;
            case 'commercialProperty':
                return <SearchCommercialProperty
                    isRent={isRent}
                    onSubmit={onSubmit}
                    filters={filters}
                    urlParams={urlParams}
                />;
            case 'land':
                return <SearchLand
                    onSubmit={onSubmit}
                    filters={filters}
                    urlParams={urlParams}
                />;
            case 'parkingLotsAndBoxes':
                return <SearchParkingLotsBoxes
                    onSubmit={onSubmit}
                    filters={filters}
                    urlParams={urlParams}
                />;
        }
    };

    return (
        <>
            {getFiltersByCtgr()}
            <Grid item container xs={12}>
                <ActionButtons handleReset={handleReset} />
            </Grid>
        </>
    );
};
