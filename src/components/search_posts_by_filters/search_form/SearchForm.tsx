import {FC, ReactNode} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {Form, FormikContextType, FormikProvider} from 'formik';
import {CategoriesDropdown} from '@src/components/elements/categories_dropdown/CategoriesDropdown';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {postTypes} from '@src/common_data/post_types';
import {PriceFromTo} from '@src/components/elements/price_from_to/PriceFromTo';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@src/components/post/create_post/form_page/common_form/site_services/SiteServices';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {useStyles} from './useStyles';


type SearchFormPropsType = {
    filters,
    categoryName: string,
    formik: FormikContextType<any>,
    handleInput: (e) => void,
    handleSelect: (name, value) => void
    handlePostType: (_, v) => void,
    handleReset: () => void,
    handleCheckbox: (name) => (e) => void,
    getFiltersByCtgr: () => ReactNode
} & WithT;

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        t,
        formik,
        filters,
        categoryName,
        handleInput,
        handleSelect,
        handleReset,
        handlePostType,
        handleCheckbox,
        getFiltersByCtgr
    } = props;

    const {values, handleBlur} = formik;
    const postTypesFilter = [postTypes[0], postTypes[1]];

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <Form className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <CategoriesDropdown
                            t={t}
                            name='category'
                            handleSelect={handleSelect}
                            filters={filters.categories}
                            category={values.category}
                        />
                    </Grid>
                    {!!values.category.type && (
                        <Grid item xs={4}>
                            <DropDownSelect
                                t={t}
                                name='type'
                                labelTxt='good_type'
                                values={values}
                                items={values.category.type}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <DeployedSelect
                            t={t}
                            formik={formik}
                            name='post_type'
                            options={postTypesFilter}
                            handleSelect={handlePostType}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PriceFromTo
                            t={t}
                            name='cost'
                            values={values}
                            disabled={values.free}
                            handleInput={handleInput}
                        />
                    </Grid>
                    <Grid item container alignItems='center' xs={2}>
                        <CheckboxSelect
                            t={t}
                            name='free'
                            checked={values.free}
                            onChange={handleCheckbox('free')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SiteServices
                            t={t}
                            iconMode
                            isAuction={false}
                            values={values}
                            categoryName={categoryName}
                            handleCheckbox={handleCheckbox}
                        />
                    </Grid>
                </Grid>
                {getFiltersByCtgr()}
                <div className='actions-btns'>
                    <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                    <CustomButton>{t('filters:apply')}</CustomButton>
                </div>
            </Form>
        </FormikProvider>
    );
};