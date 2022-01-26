import {FC} from 'react';
import {Grid, Hidden} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {SearchForm} from './search_form/SearchForm';
import {SearchFormProps} from '@root/interfaces/Post';

export const SearchPostDesktop: FC<SearchFormProps & {right}> = props => {
    const {
        formik,
        filtersState,
        handleReset,
        ctgrsByCyrName,
        handleSelectCategory
    } = props;

    return (
        <Grid item container xs={12}>
            <Grid item xs={9} zeroMinWidth>
                <SearchForm
                    formik={formik}
                    filters={filtersState}
                    handleReset={handleReset}
                    categories={ctgrsByCyrName}
                    handleSelectCategory={handleSelectCategory}
                />
            </Grid>
            <Hidden mdDown>
                <Grid
                    item
                    xs={3}
                    style={{paddingRight: 0, paddingLeft: '16px'}}
                >
                    <HomeSidebar />
                </Grid>
            </Hidden>
        </Grid>
    );
};
