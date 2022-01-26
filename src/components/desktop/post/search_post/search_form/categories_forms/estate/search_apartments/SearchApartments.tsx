import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useHandlers} from '@src/hooks/useHandlers';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ShowHide} from '@src/components/elements/show_hide/ShowHide';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {SubcategoryFormTypes} from '../SearchEstate';

export const SearchApartments: FC<SubcategoryFormTypes> = props => {
    const {isRent, formik, filters} = props;

    const {values, setValues, handleBlur} = formik;

    const {handleSelect, handleNumericInput, handleCheckbox} = useHandlers(
        values,
        setValues
    );

    const {t} = useTranslation('filters');

    return (
        <>
            <Grid className="main-params" item container spacing={1}>
                <Grid item container sm={4} xs={12}>
                    <DropDownSelect
                        multiple
                        disableRequire
                        name="estate_type"
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.estate_type}
                        transKey="estate."
                        labelTxt={t('estate.estate_type.name')}
                    />
                </Grid>
                <Grid item container sm={4} xs={12}>
                    <DropDownSelect
                        multiple
                        name="room"
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.room}
                        transKey="estate."
                        handleSelect={handleSelect}
                        labelTxt={t('estate.room.name')}
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
                <Grid item container sm={4} xs={12}>
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('estate.floor.name')}
                        firstInputProps={{
                            value: values.floor_from,
                            name: 'floor_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.floor_to,
                            name: 'floor_to',
                            placeholder: t(`filters:to`)
                        }}
                    />
                </Grid>
            </Grid>
            <ShowHide
                className="add-params"
                showTxt={t('common:externalParams')}
            >
                <Grid item container spacing={1} xs={12}>
                    <Grid item container sm={4} xs={12}>
                        <FromToInputs
                            handleInput={handleNumericInput}
                            labelTxt={t('estate.number_of_floors.name')}
                            firstInputProps={{
                                value: values.number_of_floors_from,
                                name: 'number_of_floors_from',
                                placeholder: t(`filters:from`)
                            }}
                            secondInputProps={{
                                value: values.number_of_floors_to,
                                name: 'number_of_floors_to',
                                placeholder: t(`filters:to`)
                            }}
                        />
                    </Grid>
                    <Grid item container sm={4} xs={12}>
                        <DropDownSelect
                            multiple
                            disableRequire
                            name="material"
                            values={values}
                            onBlur={handleBlur}
                            items={filters.material}
                            handleSelect={handleSelect}
                            transKey="estate."
                            labelTxt={t('estate.material.name')}
                        />
                    </Grid>
                    <Grid item container sm={4} xs={12}>
                        <DropDownSelect
                            multiple
                            disableRequire
                            name="metro"
                            values={values}
                            onBlur={handleBlur}
                            items={filters.metro}
                            transKey="estate."
                            handleSelect={handleSelect}
                            labelTxt={t('estate.metro.name')}
                        />
                    </Grid>
                    <Grid item container sm={4} xs={12}>
                        <DropDownSelect
                            multiple
                            disableRequire
                            name="repair"
                            values={values}
                            onBlur={handleBlur}
                            items={filters.repair}
                            transKey="estate."
                            handleSelect={handleSelect}
                            labelTxt={t('estate.repair.name')}
                        />
                    </Grid>
                    <Grid item container xs={12} sm={8} spacing={1}>
                        {isRent && (
                            <Grid
                                item
                                container
                                xs={6}
                                md={4}
                                alignItems="flex-end"
                            >
                                <CheckboxSelect
                                    name="with_pledge"
                                    checked={values.with_pledge}
                                    handleCheckbox={handleCheckbox}
                                    labelTxt={t('estate.with_pledge.name')}
                                />
                            </Grid>
                        )}
                        <Grid
                            item
                            container
                            xs={6}
                            md={4}
                            alignItems="flex-end"
                        >
                            <CheckboxSelect
                                name="furnished"
                                checked={values.furnished}
                                handleCheckbox={handleCheckbox}
                                labelTxt={t('estate.furnished.name')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ShowHide>
        </>
    );
};
