import Cookies from 'universal-cookie';
import {TFunction} from 'next-i18next';
import {CategoryType, SubCtgrsType} from '@root/interfaces/Categories';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {punctuationMarksRegEx} from '@src/common_data/reg_exs';
import {categories_list} from '@src/common_data/categories_list';
import {requireFields} from '@src/common_data/form_fields';
import {IdNameType} from "@root/interfaces/Post";


export const cookies = new Cookies();
export const cookieOpts = {path: '/'};

export const isRequired = (field: string): boolean =>
    requireFields.some(reqField => reqField === field);

export const phoneFormat = (phone: string): string => phone.replace(/[\s+()]/g, "");

export const transformToCyrillic = (title: string, reverse?: boolean): string => {
    const transform = reverse ? new CyrillicToTranslit().reverse : new CyrillicToTranslit().transform;

    if (reverse) {
        return transform(title);
    }

    return transform(title)
        .toLowerCase()
        .replace(punctuationMarksRegEx, ' ')
        .replace(/\s+/g, '-');
};

export const getCtgrsByCyrillicNames = (subCtgrName: string, typeCtgrName?: string): any => {
    return categories_list.reduce((acc: any, ctgr) => {
        ctgr.subCategory.forEach(subCtgr => {
            if (transformToCyrillic(subCtgr.ru_name) === subCtgrName) {
                acc.push(subCtgr);
                if (typeCtgrName) {
                    subCtgr.type?.forEach(type => {
                        if (transformToCyrillic(type.ru_name) === typeCtgrName) {
                            acc.push(type);
                        }
                    });
                }
            }
        });
        return acc;
    }, []);
};

export const numberPrettier = (price: string): string => {
    return !!price
           ? price.toString()
               .replace(/\s/g, '')
               .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
           : '';
};

export const clearWhiteSpaces = (txt: string): string => {
    return txt.replace(/\s+/g, "");
};

export const addParentsToCtgrs = (categoriesList: CategoryType[]): CategoryType[] => {
    return categoriesList.map(ctgry => {
        if (ctgry.subCategory) {
            const subCategory = addParents(
                ctgry.subCategory,
                [{
                    id: ctgry.id,
                    name: ctgry.name
                }]
            );
            return {...ctgry, subCategory};
        } else {
            return ctgry;
        }
    });

    function addParents(list, parents) {
        return list.map(ctgry => {
            if (ctgry.type) {
                const type = addParents(
                    ctgry.type,
                    [
                        ...parents,
                        {
                            id: ctgry.id,
                            name: ctgry.name
                        }
                    ]
                );
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
};

export const prepareDataForCreate = data => (
    Object.keys(data).reduce<any>((acc, key) => {
        if (data[key] && key !== 'title') {
            if (typeof data[key] === 'string' || typeof data[key] === 'number' || Array.isArray(data[key]) && data[key].length) {
                if (Array.isArray(data[key])) {
                    acc[key] = data[key].map(({id}) => ({id}));
                } else {
                    acc[key] = data[key];
                }
            } else if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
                acc[`${key}_id`] = data[key].id;
            }
        }
        return acc;
    }, {})
);

export const dataForCrtPostNormalize = (data: any, type?) => {
    if (!!data) {
        data = Object.keys(data).reduce((acc: any, key) => {
            if (Array.isArray(data[key]) && !!data[key].length) {
                const isExcludeTypeKey = type && key === 'type';
                if (!isExcludeTypeKey) {
                    acc[key] = data[key];
                } else if (key === 'type') {
                    acc = {
                        ...acc,
                        ...dataForCrtPostNormalize(data[key][0])
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

export const categorySearchHelper = (txt: string, categoryList: CategoryType[], t: TFunction): SubCtgrsType[] => {
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
    return categories_list.reduce((acc, ctgry) => {
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
    return categories_list.reduce((acc: any, ctgry) => {
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

export const formatNumber = (number: number) => {
    if (number <= 9) {
        return `0${number}`;
    } else {
        return number;
    }
};

export const getErrorMsg = (errorMsg, touched, t: TFunction): string => {
    return errorMsg && touched ? t(`errors:${errorMsg}`) : '';
};