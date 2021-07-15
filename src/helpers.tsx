import {Fragment} from 'react';
import Cookies from 'universal-cookie';
import {TFunction} from 'next-i18next';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {CategoryType, SubcategoryType, TypeCategory} from '@root/interfaces/Categories';
import {fracFieldRegEx, punctuationMarksRegEx, searchTxtRegEx} from '@src/common_data/reg_exs';
import {HasAuction, site_categories} from '@src/common_data/site_categories';
import {excludeFields, fractionalFields, optionFields, requireFields, singleFields} from '@src/common_data/fields_keys';
import {IdNameType} from '@root/interfaces/Post';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {WithT} from 'i18next';

export const cookies = new Cookies();
export const cookieOpts: { path: string, sameSite: boolean | 'none' | 'lax' | 'strict' } = {path: '/', sameSite: 'lax'};

type GetFieldsByFiltersProps = {
    filters,
    formik,
    handleSelect,
} & WithT;

export const getFieldsByFilters = (props: GetFieldsByFiltersProps, categoryName: string, multiple = false) => {
    const {
        t,
        filters,
        formik,
        handleSelect
    } = props;

    const {
        values,
        handleBlur,
        errors,
        touched
    } = formik;

    return (
        Object.keys(filters).map(key => {
            const isExcludeValue = excludeFields.some(k => k === key);
            const isNoEmptyArray = Array.isArray(filters[key]) && !!filters[key].length;
            const isOptionKey = optionFields.some(optKey => optKey === key);
            const isSingleField = singleFields.some(f => f === key);

            if (!isExcludeValue && isNoEmptyArray) {
                return (
                    <Fragment key={key}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            container
                        >
                            <DropDownSelect
                                name={key}
                                values={values}
                                onBlur={handleBlur}
                                items={filters[key]}
                                disableRequire={multiple}
                                handleSelect={handleSelect}
                                transKey={`${categoryName}.`}
                                labelTxt={t(`filters:${categoryName}.${key}.name`)}
                                multiple={!isSingleField && (isOptionKey || multiple)}
                                errorMsg={getErrorMsg(errors[key], touched[key], t)}
                            />
                        </Grid>
                        {!!values[key]
                        && !!Object.keys(values[key]).length
                        && (getFieldsByFilters({
                                t,
                                formik,
                                filters: values[key],
                                handleSelect
                            },
                            categoryName,
                            multiple
                        ))}
                    </Fragment>
                );
            }
        })
    );
};

export const toUrlParams = (params) => {
    if (params) {
        let url = '';

        Object.keys(params).forEach(key => {
            const val = params[key];
            const isBoolTrue = val && typeof val === 'boolean';
            const isNoEmptyString = val && typeof val === 'string';
            const isNoEmptyArray = Array.isArray(val) && val.length;
            const isObject = val && !Array.isArray(val) && typeof val === 'object' && !!Object.keys(val).length;

            if (isBoolTrue) {
                url = url.concat(`&${key}=${+params[key]}`);
            }
            if (isNoEmptyString) {
                url = url.concat(`&${key}=${params[key]}`);
            }
            if (isNoEmptyArray) {
                url = url.concat(`&${key}=${params[key].map(p => p.id).join(',')}`);
            }
            if (isObject && !!params[key].id) {
                url = url.concat(`&${key}=${params[key].id}`);
            }
        });

        return url.replace(/^&/, '?');
    }
};

export const getSearchTxt = (queryData: string[] = []): string => (
    queryData?.find(txt => searchTxtRegEx.test(txt))?.replace(searchTxtRegEx, '') || ''
);

export const setRequireParamsVals = (values, setValues, filters, subcategoryName: string) => {
    const reqVals: any = {...values};
    const isHousesCottages = subcategoryName === 'housesCottages';

    Object.keys(filters).forEach(k => {
        if (!values[k]) {
            if (typeof values[k] !== 'string' && isRequired(k)) {
                if (k === 'area') {
                    if (!isHousesCottages) reqVals.area = null;
                    reqVals.area_id = filters[k][0].id || null;
                } else reqVals[k] = null;
            }
        }
    });

    setValues(reqVals);
};

export const prepareParamsData = (data) => {
    return Object.keys(data).reduce<any>((acc, key) => {
        const isArray = Array.isArray(data[key]);
        const isStrOrBoolTrue = typeof data[key] === 'string' || (typeof data[key] === 'boolean' && data[key]);
        const isZeroField = fractionalFields.some(val => val === key) && fracFieldRegEx.test(data[key]);

        if (data[key]) {
            if (isArray) {
                if (data[key].length) {
                    acc[key] = data[key].map(({id}) => ({id}));
                }
            } else if (isStrOrBoolTrue && !isZeroField) {
                acc[key] = data[key];
            } else if (typeof data[key] === 'object') {
                acc[`${key}_id`] = data[key].id;
            }
        }

        return acc;
    }, {});
};

export const isRequired = (field: string): boolean => requireFields.some(reqField => reqField === field);

export const phonePrepare = (phone: string): string => phone.replace(/[\s+()]/g, '');

export const transformCyrillic = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;

    return transform(title)
        .toLowerCase()
        .replace(punctuationMarksRegEx, ' ')
        .replace(/\s+/g, '-');
};

export type CtgrsByCyrillicNameType = [CategoryType, SubcategoryType, TypeCategory?];

export const getCtgrsByCyrillicNames = (categories: string[] = []): CtgrsByCyrillicNameType | [] => {
    if (categories.length) {
        const [categoryName, subCtgrName, typeCtgrName] = categories;
        return site_categories.reduce((acc: any, ctgr) => {
            if (transformCyrillic(ctgr.ru_name) === categoryName) {
                acc.push(ctgr);
                ctgr.subcategory.forEach(subctgr => {
                    if (transformCyrillic(subctgr.ru_name) === subCtgrName) {
                        acc.push(subctgr);
                        if (typeCtgrName) {
                            subctgr.type?.forEach(type => {
                                if (transformCyrillic(type.ru_name) === typeCtgrName) {
                                    acc.push(type);
                                }
                            });
                        }
                    }
                });
            }
            return acc;
        }, []);
    }
    return [];
};

export const numberPrettier = (price: string | number): string => {
    return (price !== '' && price !== undefined && price !== null)
        ? price.toString()
            .replace(/\s/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : '';
};

export const clearWhiteSpaces = (txt: string): string => {
    return txt.replace(/\s+/g, '');
};

export const manufacturersDataNormalize = data => (
    data.manufacturers.map(({manufacturer}) => {
        manufacturer = {
            id: manufacturer.id,
            name: manufacturer.name,
            models: manufacturer.separate_models.map(({model}) => {
                model = {
                    id: model.id,
                    name: model.name,
                    years: model.years.map(({year}) => year)
                };
                return model;
            })
        };
        return manufacturer;
    })
);

export const normalizeFiltersByCategory = (data: any, type?) => {
    if (!!data) {
        data = Object.keys(data).reduce((acc: any, key) => {
            if (Array.isArray(data[key]) && !!data[key].length) {
                const isExcludeTypeKey = type && key === 'type';
                if (!isExcludeTypeKey) {
                    acc[key] = data[key];
                } else if (key === 'type') {
                    acc = {
                        ...acc,
                        ...normalizeFiltersByCategory(data[key][0])
                    };
                }
            }
            return acc;
        }, {});
    } else {
        data = {};
    }
    return data;
};

export const categorySearchHelper = (txt: string, categoryList: CategoryType[], t: TFunction): SubcategoryType[] => {
    return categoryList
        .reduce((list, category) => {
            list = [...list, ...getMatchedCtgrs(txt, category.subcategory)];
            return list;
        }, []);

    function getMatchedCtgrs(txt, list) {
        const searchRegExp = RegExp(txt, 'i');
        let matchedCtgrs = [];

        if (list !== undefined) {
            list.forEach(ctgry => {
                if (searchRegExp.test(t(`categories:${ctgry.name}`))) {
                    matchedCtgrs.push(ctgry);
                }
                matchedCtgrs = [
                    ...matchedCtgrs,
                    ...getMatchedCtgrs(txt, ctgry.type)
                ];
            });
        }

        return matchedCtgrs;
    }
};

export const weekDaysHelper = (days: IdNameType[], t: TFunction): string => {
    const daysLen = days.length;
    let isInOrder: boolean;
    let result = '';

    if (daysLen > 3) {
        isInOrder = days.every(({id}, i) => days[i + 1] ? (id + 1 - days[i + 1].id) === 0 : true);

        if (isInOrder) {
            result = `${t(days[0].name)} - ${t(days[daysLen - 1].name)}`;
        } else {
            result = days.map(day => t(day.name)).join(', ');
        }

    } else {
        result = `${t(days[0].name)}${days[1] ? `, ${t(days[1].name)}` : ''}`;
    }

    return result;
};

export const categoriesByType = (postType: string): CategoryType[] => {
    return site_categories.reduce((acc, ctgry) => {
        if (postType === 'post' || !!HasAuction[ctgry.name]) {
            acc.push(ctgry);
        }
        return acc;
    }, []);
};

export type CategoriesParamsType = {
    categoryName: string,
    subcategoryName: string,
    typeName: string
};

export const getCategoriesByParams = (params: CategoriesParamsType) => {
    const {categoryName, subcategoryName, typeName} = params;
    return site_categories.reduce((acc: any, ctgry) => {
        if (ctgry.name === categoryName) {
            acc.category = {id: ctgry.id, name: ctgry.name};
            if (subcategoryName && ctgry.subcategory) {
                const subcategory = ctgry.subcategory.find(({name}) => name === subcategoryName);
                if (subcategory) {
                    const {id, name, type} = subcategory;
                    acc.subcategory = {id, name};
                    if (typeName && type) {
                        const typeCtgr = type.find(({name}) => name === typeName);
                        if (typeCtgr) {
                            const {id, name} = typeCtgr;
                            acc.type = {id, name};
                        }
                    }
                }
            }
        }
        return acc;
    }, {});
};

export const formatNumber = (number: number): string => (
    number <= 9 ? `0${number}` : number.toString()
);

export const getErrorMsg = (errorMsg, touched, t: TFunction): string => {
    return errorMsg && touched ? t(`errors:${errorMsg}`) : '';
};