import Cookies from 'universal-cookie';
import {TFunction} from 'next-i18next';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {CategoryType, SubCategoryType, TypeCategory} from '@root/interfaces/Categories';
import {fracFieldRegEx, punctuationMarksRegEx, searchTxtRegEx} from '@src/common_data/reg_exs';
import {siteCategories} from '@src/common_data/siteCategories';
import {fractionalFields, requireFields} from '@src/common_data/form_fields';
import {IdNameType} from '@root/interfaces/Post';


export const cookies = new Cookies();
export const cookieOpts = {path: '/'};

export const toUrlParams = (params) => {
    let url = '';

    Object.keys(params).forEach(key => {
        if (key !== 'location') {
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

            if (isObject) {
                url = url.concat(`&${key}=${params[key].id}`);
            }
        }
    });

    if (url !== '') url = `?${url}`;

    return url;
};

export const getSearchTxt = (data: string[] = []): string => (
    data?.find(txt => searchTxtRegEx.test(txt))?.replace(searchTxtRegEx, '') || ''
);

export const setRequireParamsVals = (values, setValues, filters, subCategoryName: string) => {
    const reqVals: any = {...values};
    const isHousesCottages = subCategoryName === 'housesCottages';

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

        if (data[key] !== undefined) {
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

export const transformCyrillic = (title: string, reverse?: boolean): string => {
    const transform = reverse ? new CyrillicToTranslit().reverse : new CyrillicToTranslit().transform;

    if (reverse) {
        return transform(title);
    }

    return transform(title)
        .toLowerCase()
        .replace(punctuationMarksRegEx, ' ')
        .replace(/\s+/g, '-');
};

export type CtgrsByCyrillicNameType = [CategoryType, SubCategoryType, TypeCategory?];

export const getCtgrsByCyrillicNames = (categories: string[] = []): CtgrsByCyrillicNameType | [] => {
    if (categories.length) {
        const [categoryName, subCtgrName, typeCtgrName] = categories;
        return siteCategories.reduce((acc: any, ctgr) => {
            if (transformCyrillic(ctgr.ru_name) === categoryName) {
                acc.push(ctgr);
                ctgr.subCategory.forEach(subCtgr => {
                    if (transformCyrillic(subCtgr.ru_name) === subCtgrName) {
                        acc.push(subCtgr);
                        if (typeCtgrName) {
                            subCtgr.type?.forEach(type => {
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
    return !!price
           ? price.toString()
               .replace(/\s/g, '')
               .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
           : '';
};

export const clearWhiteSpaces = (txt: string): string => {
    return txt.replace(/\s+/g, '');
};

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

export const categorySearchHelper = (txt: string, categoryList: CategoryType[], t: TFunction): SubCategoryType[] => {
    return categoryList
        .reduce((list, category) => {
            list = [...list, ...getMatchedCtgrs(txt, category.subCategory)];
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
    return siteCategories.reduce((acc, ctgry) => {
        if (postType === 'post' || ctgry.has_auction) {
            acc.push(ctgry);
        }
        return acc;
    }, []);
};

export type CategoriesParamsType = {
    categoryName: string,
    subCategoryName: string,
    typeName: string
};

export const getCategoriesByParams = (params: CategoriesParamsType) => {
    const {categoryName, subCategoryName, typeName} = params;
    return siteCategories.reduce((acc: any, ctgry) => {
        if (ctgry.name === categoryName) {
            acc.category = {id: ctgry.id, name: ctgry.name};
            if (subCategoryName && ctgry.subCategory) {
                const subCategory = ctgry.subCategory.find(({name}) => name === subCategoryName);
                if (subCategory) {
                    const {id, name, type} = subCategory;
                    acc.subCategory = {id, name};
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