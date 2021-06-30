import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useHandlers} from '@src/hooks/useHandlers';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ShowHide} from '@src/components/elements/show_hide/ShowHide';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {SubcategoryFormTypes} from '@src/components/post/search_post/search_form/categories_forms/estate/SearchEstate';

export const SearchApartments: FC<SubcategoryFormTypes> = (props) => {
    const {
        isRent,
        formik,
        filters,
        urlParams,
        sameWithUrlCtgr
    } = props;

    const {
        values,
        setValues,
        handleBlur
    } = formik;

    const {handleSelect, handleNumericInput, setValsByParams, handleCheckbox} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    useEffect(() => {
        sameWithUrlCtgr && setValsByParams(urlParams, filters);
    }, [filters]);

    return (
        <>
            <Grid className='main-params' item container spacing={1}>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        multiple
                        disableRequire
                        name='estate_type'
                        values={values}
                        onBlur={handleBlur}
                        labelTxt={t('estate_type')}
                        handleSelect={handleSelect}
                        items={filters.estate_type}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        multiple
                        name='room'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.room}
                        labelTxt={t('room')}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('area')}
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
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('floor')}
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
                className='add-params'
                showTxt={t('common:externalParams')}
            >
                <Grid item container spacing={1} xs={12}>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <FromToInputs
                            handleInput={handleNumericInput}
                            labelTxt={t('number_of_floors')}
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
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='material'
                            values={values}
                            onBlur={handleBlur}
                            items={filters.material}
                            labelTxt={t('material')}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='metro'
                            values={values}
                            onBlur={handleBlur}
                            items={filters.metro}
                            labelTxt={t('metro')}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='repair'
                            values={values}
                            onBlur={handleBlur}
                            items={filters.repair}
                            labelTxt={t('repair')}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                    <Grid item container xs={12} sm={8} spacing={1}>
                        {isRent && (
                            <Grid item container xs={6} md={4} alignItems='flex-end'>
                                <CheckboxSelect
                                    name='with_pledge'
                                    labelTxt={t('filters:with_pledge')}
                                    checked={values.with_pledge}
                                    handleCheckbox={handleCheckbox}
                                />
                            </Grid>
                        )}
                        <Grid item container xs={6} md={4} alignItems='flex-end'>
                            <CheckboxSelect
                                name='furnished'
                                labelTxt={t('filters:furnished')}
                                checked={values.furnished}
                                handleCheckbox={handleCheckbox}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ShowHide>
        </>
    );
};
