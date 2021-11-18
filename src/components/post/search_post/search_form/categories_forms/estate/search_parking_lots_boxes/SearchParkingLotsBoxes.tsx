import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useHandlers} from '@src/hooks/useHandlers';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {SubcategoryFormTypes} from '@src/components/post/search_post/search_form/categories_forms/estate/SearchEstate';

export const SearchParkingLotsBoxes: FC<SubcategoryFormTypes> = props => {
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
                    name="estate_type"
                    values={values}
                    transKey="estate."
                    onBlur={handleBlur}
                    handleSelect={handleSelect}
                    items={filters.estate_type}
                    labelTxt={t('estate.estate_type.name')}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <FromToInputs
                    handleInput={handleNumericInput}
                    labelTxt={t('estate.parking_spaces.name')}
                    firstInputProps={{
                        value: values.parking_spaces_from,
                        name: 'parking_spaces_from',
                        placeholder: t(`filters:from`)
                    }}
                    secondInputProps={{
                        value: values.parking_spaces_to,
                        name: 'parking_spaces_to',
                        placeholder: t(`filters:to`)
                    }}
                />
            </Grid>
            <Grid item container sm={4} xs={12}>
                <FromToInputs
                    handleInput={handleNumericInput}
                    labelTxt={t('estate.area.name')}
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
        </Grid>
    );
};
