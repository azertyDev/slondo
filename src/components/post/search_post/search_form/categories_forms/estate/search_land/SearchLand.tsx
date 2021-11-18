import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useHandlers} from '@src/hooks/useHandlers';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {SubcategoryFormTypes} from '@src/components/post/search_post/search_form/categories_forms/estate/SearchEstate';

export const SearchLand: FC<SubcategoryFormTypes> = props => {
    const {formik, filters} = props;

    const {values, setValues, handleBlur} = formik;

    const {handleSelect, handleNumericInput} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    return (
        <Grid className="main-params" item container spacing={1}>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    disableRequire
                    values={values}
                    transKey="estate."
                    name="estate_type"
                    onBlur={handleBlur}
                    handleSelect={handleSelect}
                    items={filters.estate_type}
                    labelTxt={t('estate.estate_type.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    name="location"
                    disableRequire
                    transKey="estate."
                    values={values}
                    onBlur={handleBlur}
                    items={filters.location}
                    handleSelect={handleSelect}
                    labelTxt={t('estate.location.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <FromToInputs
                    handleInput={handleNumericInput}
                    labelTxt={t('estate.area_in_hundred.name')}
                    firstInputProps={{
                        value: values.area_from,
                        name: 'area_from',
                        placeholder: t(`filters:from`)
                    }}
                    secondInputProps={{
                        value: values.area_to,
                        name: 'area_to',
                        placeholder: t(`filters:to`)
                    }}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    disableRequire
                    name="electricity"
                    transKey="estate."
                    values={values}
                    onBlur={handleBlur}
                    handleSelect={handleSelect}
                    items={filters.electricity}
                    labelTxt={t('estate.electricity.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    disableRequire
                    name="sewerage"
                    transKey="estate."
                    values={values}
                    onBlur={handleBlur}
                    items={filters.sewerage}
                    handleSelect={handleSelect}
                    labelTxt={t('estate.sewerage.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    disableRequire
                    name="gas"
                    values={values}
                    onBlur={handleBlur}
                    transKey="estate."
                    items={filters.gas}
                    handleSelect={handleSelect}
                    labelTxt={t('estate.gas.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <DropDownSelect
                    multiple
                    disableRequire
                    name="water"
                    values={values}
                    onBlur={handleBlur}
                    transKey="estate."
                    items={filters.water}
                    handleSelect={handleSelect}
                    labelTxt={t('estate.water.name')}
                />
            </Grid>
        </Grid>
    );
};
