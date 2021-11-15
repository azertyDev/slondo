import {Fragment} from 'react';
import {WithT} from 'i18next';
import Cookies from 'universal-cookie';
import {TFunction} from 'next-i18next';
import {Grid} from '@material-ui/core';
import {GetServerSidePropsContext} from 'next';
import {IdNameType} from '@root/interfaces/Post';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {categoryIcons} from '@src/common_data/categories_icons';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {
    CategoryType,
    SubcategoryType,
    TypeCategory
} from '@root/interfaces/Categories';
import {
    cardDataRegEx,
    searchTxtRegEx,
    URLReservedMarks
} from '@src/common_data/reg_exs';
import {
    excludeFields,
    optionFields,
    requireFields,
    singleFields
} from '@src/common_data/fields_keys';
import {CityType, RegionType} from '@root/interfaces/Locations';

export const cookies = new Cookies();
export const cookieOpts: {
    path: string;
    sameSite: boolean | 'none' | 'lax' | 'strict';
} = {
    path: '/',
    sameSite: 'strict'
};

export function getCtgrsByCyrillicNames(
    urlCategories: string[] = [],
    siteCategories
): CtgrsByCyrillicNameType | [] {
    if (urlCategories.length) {
        const [categoryName, subCtgrName, typeCtgrName] = urlCategories;

        return siteCategories.reduce((acc: any, ctgr) => {
            if (transformCyrillic(ctgr.ru_name) === categoryName) {
                acc.push(ctgr);
                ctgr.subcategory.forEach(subctgr => {
                    if (transformCyrillic(subctgr.ru_name) === subCtgrName) {
                        acc.push(subctgr);
                        if (typeCtgrName) {
                            subctgr.type?.forEach(type => {
                                if (
                                    transformCyrillic(type.ru_name) ===
                                    typeCtgrName
                                ) {
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
}

export const categoriesNormalize = (categories: any[]): CategoryType[] => {
    const normalizedCategories = [];

    categories.forEach(ctgr => {
        const {mark, ...other} = ctgr;

        // remove empty type categories
        if (other.subcategory.some(s => !!s.type)) {
            other.subcategory = other.subcategory.map(({type, ...other}) => {
                const subCtgr = {...other};

                if (type.length) subCtgr.type = type;

                return subCtgr;
            });
        }

        normalizedCategories.push({
            ...other,
            name: mark,
            iconUrl: categoryIcons[mark].iconUrl,
            smallIcon: categoryIcons[mark].smallIcon
        });
    }, []);

    return addParentsToCtgrs(normalizedCategories);

    function addParentsToCtgrs(categoriesList: CategoryType[]): CategoryType[] {
        return categoriesList.map(ctgry => {
            if (ctgry.subcategory) {
                const subcategory = addParents(ctgry.subcategory, [
                    {
                        id: ctgry.id,
                        name: ctgry.name
                    }
                ]);
                return {...ctgry, subcategory};
            } else {
                return ctgry;
            }
        });

        function addParents(list, parents) {
            return list.map(ctgry => {
                if (ctgry.type) {
                    const type = addParents(ctgry.type, [
                        ...parents,
                        {
                            id: ctgry.id,
                            name: ctgry.name
                        }
                    ]);
                    return {
                        ...ctgry,
                        type,
                        parents
                    };
                } else {
                    return {
                        ...ctgry,
                        parents
                    };
                }
            });
        }
    }
};

export const getTime = (sec: number) => {
    const date = new Date(sec * 1000);

    const days = Math.round(sec / 3600 / 24);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
        days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds
    };
};

export const priceTransform = (price, jobOrService = false): string => {
    return price === 0
        ? jobOrService
            ? 'negotiated'
            : 'for_free'
        : numberPrettier(price);
};

export const getLocationByURL = (
    locName,
    regions: RegionType[]
): {region: RegionType; city?: CityType} => {
    return regions.reduce((loc: any, {id, name, ru_name, cities}) => {
        const region = {id, name, ru_name};

        if (ru_name === locName) {
            loc = {region};
        } else {
            cities.forEach(city => {
                if (city.ru_name === locName) loc = {region, city};
            });
        }

        return loc;
    }, {});
};

export const getSitemap = (ctx: GetServerSidePropsContext, fields) => {
    const {res} = ctx;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
            ${fields
                .map(({loc, alternateRefs}) => {
                    return `<url>
                    <loc>${loc}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    ${alternateRefs
                        .map(
                            obj =>
                                `<xhtml:link rel="alternate" href="${obj.href}" hreflang="${obj.hreflang}" />`,
                            ''
                        )
                        .join('')}
                </url>`;
                })
                .join('')}
        </urlset>
    `
        .replace(/(\r?\n|\r|\t)/gm, '')
        .replace(/>\s+</gm, '><')
        .trim();

    if (res) {
        res.setHeader('Content-Type', 'text/xml');
        res.write(xml);
        res.end();
    }

    return {
        props: {}
    };
};

type GetFieldsByFiltersProps = {
    filters;
    formik;
    handleSelect;
} & WithT;

export const getFieldsByFilters = (
    props: GetFieldsByFiltersProps,
    categoryName: string,
    multiple = false
) => {
    const {t, filters, formik, handleSelect} = props;

    const {values, handleBlur, errors, touched} = formik;

    return Object.keys(filters).map(key => {
        const isExcludeValue = excludeFields.some(k => k === key);
        const isNoEmptyArray =
            Array.isArray(filters[key]) && !!filters[key].length;
        const isOptionKey = optionFields.some(optKey => optKey === key);
        const isSingleField = singleFields.some(f => f === key);

        if (!isExcludeValue && isNoEmptyArray) {
            return (
                <Fragment key={key}>
                    <Grid item xs={12} sm={6} md={4} container>
                        <DropDownSelect
                            name={key}
                            values={values}
                            onBlur={handleBlur}
                            items={filters[key]}
                            disableRequire={multiple}
                            handleSelect={handleSelect}
                            transKey={`${categoryName}.`}
                            errorMsg={getErrorMsg(errors[key], touched[key], t)}
                            multiple={
                                !isSingleField && (isOptionKey || multiple)
                            }
                            labelTxt={t(`filters:${categoryName}.${key}.name`)}
                        />
                    </Grid>
                    {!!values[key] &&
                        !!Object.keys(values[key]).length &&
                        getFieldsByFilters(
                            {
                                t,
                                formik,
                                filters: values[key],
                                handleSelect
                            },
                            categoryName,
                            multiple
                        )}
                </Fragment>
            );
        }
    });
};

export const urlByParams = params => {
    let url = '';

    const postVals = [
        'title',
        'region',
        'city',
        'delivery',
        'exchange',
        'safe_deal',
        'auto_renewal',
        'price',
        'currency',
        'phone',
        'available_days',
        'available_start_time',
        'available_end_time',
        'description',
        'model',
        'images'
    ];

    function replacer(this, k: string, v) {
        if (k === 'hex_color_code') return;
        return v;
    }

    Object.keys(params).forEach(key => {
        if (!!params[key] && postVals.some(k => k === key)) {
            let value = params[key];
            if (key === 'model') {
                value = Object.keys(value).reduce((obj, ik) => {
                    const iValue = value[ik];
                    if (/_id$/.test(ik)) {
                        ik = ik.replace(/_id$/, '');
                        obj[ik] = {id: iValue};
                    } else if (Array.isArray(iValue)) {
                        obj[ik] = iValue.map(v => v.id);
                    } else {
                        obj[ik] = iValue;
                    }
                    return obj;
                }, {});
            }
            url = url.concat(
                `&${key}=${encodeURIComponent(JSON.stringify(value, replacer))}`
            );
        }
    });

    return url;
};

export const toUrlParams = (params, term?) => {
    if (params) {
        let url = '';

        if (term !== '') url = url.concat(`&q=${term}`);

        Object.keys(params).forEach(key => {
            const val = params[key];
            const isBoolTrue = val && typeof val === 'boolean';
            const isNoEmptyString = val && typeof val === 'string';
            const isNoEmptyArray = Array.isArray(val) && val.length;
            const isObject =
                val &&
                !Array.isArray(val) &&
                typeof val === 'object' &&
                !!Object.keys(val).length;

            if (isBoolTrue) {
                url = url.concat(`&${key}=${+params[key]}`);
            }
            if (isNoEmptyString) {
                url = url.concat(`&${key}=${params[key]}`);
            }
            if (isNoEmptyArray) {
                url = url.concat(
                    `&${key}=${params[key].map(p => p.id ?? p).join(',')}`
                );
            }
            if (isObject && !!params[key].id) {
                url = url.concat(`&${key}=${params[key].id}`);
            }
        });

        return url.replace(/^&/, '?');
    }
};

export const getSearchTxt = (queryData: string[] = []): string =>
    queryData
        ?.find(txt => searchTxtRegEx.test(txt))
        ?.replace(searchTxtRegEx, '') || '';

export const isRequired = (field: string): boolean =>
    requireFields.some(reqField => reqField === field);

export const phonePrepare = (phone: string): string =>
    phone.replace(/[\s+()]/g, '');

export const formatCardData = (data: string, isDate = false) => {
    data = data.replace(cardDataRegEx, '');
    if (isDate) {
        data = ''.concat(`${data[2]}${data[3]}`).concat(`${data[0]}${data[1]}`);
    }
    return data;
};

export const transformCyrillic = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;
    return transform(title)
        .toLowerCase()
        .replace(URLReservedMarks, '')
        .replace(/\s+/g, '-');
};

export type CtgrsByCyrillicNameType = [
    CategoryType,
    SubcategoryType,
    TypeCategory?
];

export const numberPrettier = (price: string | number): string => {
    return price !== '' && price !== undefined && price !== null
        ? price
              .toString()
              .replace(/\s/g, '')
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : '';
};

export const clearWhiteSpaces = (txt: string): string => {
    if (/\s+/g.test(txt)) {
        return txt.replace(/\s+/g, '');
    } else return txt;
};

export const manufacturersDataNormalize = data =>
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
    });

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

export const searchCategory = (
    txt: string,
    categoryList: CategoryType[],
    t: TFunction
): SubcategoryType[] => {
    return categoryList.reduce((list, category) => {
        list = [...list, ...getMatchedCtgrs(txt, category.subcategory)];
        return list;
    }, []);

    function getMatchedCtgrs(txt, list) {
        const searchRegExp = RegExp(txt, 'i');
        let matchedCtgrs = [];

        if (list !== undefined) {
            list.forEach(subctgr => {
                const ctgrName =
                    subctgr.parents.length === 2
                        ? t(
                              `categories:${subctgr.parents[0].name}.${subctgr.parents[1].name}.${subctgr.name}.name`
                          )
                        : t(
                              `categories:${subctgr.parents[0].name}.${subctgr.name}.name`
                          );

                if (searchRegExp.test(ctgrName)) matchedCtgrs.push(subctgr);

                matchedCtgrs = [
                    ...matchedCtgrs,
                    ...getMatchedCtgrs(txt, subctgr.type)
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
        isInOrder = days.every(({id}, i) =>
            days[i + 1] ? id + 1 - days[i + 1].id === 0 : true
        );

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

export type CategoriesParamsType = {
    categoryName: string;
    subcategoryName: string;
    typeName: string;
};

export const getCategoriesByParams = (
    params: CategoriesParamsType,
    siteCategories: CategoryType[]
) => {
    const {categoryName, subcategoryName, typeName} = params;
    return siteCategories.reduce((acc: any, ctgry) => {
        if (ctgry.name === categoryName) {
            acc.category = {id: ctgry.id, name: ctgry.name};
            if (subcategoryName && ctgry.subcategory) {
                const subcategory = ctgry.subcategory.find(
                    ({name}) => name === subcategoryName
                );
                if (subcategory) {
                    const {id, name, type} = subcategory;
                    acc.subcategory = {id, name};
                    if (typeName && type) {
                        const typeCtgr = type.find(
                            ({name}) => name === typeName
                        );
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

export const timeFormat = time => {
    return time
        .split(':')
        .map(num => {
            if (num.length === 1 && +num < 10) num = `0${num}`;
            return num;
        })
        .join(':');
};

export const formatNumber = (number: number): string =>
    number <= 9 ? `0${number}` : number.toString();

export const getErrorMsg = (
    errorMsg,
    touched,
    t: TFunction,
    value?
): string => {
    return errorMsg && touched ? t(`errors:${errorMsg}`, {value}) : '';
};
