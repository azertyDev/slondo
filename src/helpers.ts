import {CategoryType, SubCtgrsType} from "@root/interfaces/Categories";
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {excludedKeys} from "@src/common_data/form_fields";
import {pnctnMarksRegEx} from "@src/common_data/reg_ex";
import {TFunction} from "next-i18next";
import {categories_list} from "@src/common_data/categories_list";
import Cookies from "universal-cookie";

const cookie = new Cookies()

export const authChecker = () => {
    return typeof cookie.get('token') === 'object' ? true : false
}

export const transformTitle = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;

    return transform(title)
        .toLowerCase()
        .replace(pnctnMarksRegEx, ' ')
        .replace(/\s+/g, '-');
};

export const numberPrettier = (price: string): string => {
    return !!price
        ? price.toString()
            .replace(/\s/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        : '';
}

const addParents = (list, parents) => (
    list.map(ctgry => {
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
            )
            return {
                ...ctgry,
                type,
                parents
            }
        } else {
            return {
                ...ctgry,
                parents
            }
        }
    })
);

export const categoriesListNormalize = (categoryList: CategoryType[]) => (
    categoryList.map(ctgry => {
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
    })
);

// export const dataForCrtPostNormalize = (data: any) => {
//     if (!!data) {
//         data = Object.keys(data).reduce((acc: any, ctgrName) => {
//             const isExcludedKey = excludedKeys.some(k => k === ctgrName);
//             if (Array.isArray(data[ctgrName]) && !!data[ctgrName].length && ctgrName !== 'manufacturers') {
//                 if (ctgrName === 'type') {
//                     acc = {
//                         ...acc,
//                         ...dataForCrtPostNormalize(data[ctgrName][0])
//                     };
//                 } else {
//                     acc[ctgrName] = data[ctgrName];
//                     if (ctgrName === 'manufacturer' && data[ctgrName][0].models) {
//                         acc.subCategory = [];
//                     }
//                 }
//             } else {
//                 if (ctgrName === 'furnished') {
//                     acc[ctgrName] = false;
//                 } else if (ctgrName === 'default_param') {
//                     acc = {
//                         ...acc,
//                         ...dataForCrtPostNormalize(data[ctgrName])
//                     };
//                 } else if (Number.isInteger(data[ctgrName]) && !isExcludedKey) {
//                     acc[ctgrName] = '';
//                 }
//             }
//             return acc;
//         }, {});
//     } else {
//         data = {};
//     }
//     return data
// };

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

export const weekDaysHelper = (days) => {
    const daysLen = days.length;
    let isInOrder: boolean;
    let result = '';

    if (daysLen > 3) {
        isInOrder = days.every(
            ({id}, i) => days[i + 1] ? (id + 1 - days[i + 1].id) === 0 : true
        );

        if (isInOrder) {
            result = `${days[0].name} - ${days[daysLen - 1].name}`;
        } else {
            result = days.map(day => day.name).join(', ');
        }

    } else {
        result = `${days[0].name}${days[1] ? `, ${days[1].name}` : ''}`;
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

export const getCategoriesByParams = (categories, params) => {
    const {categoryName, subCategoryName, typeName} = params;
    return categories.reduce((acc, ctgry) => {
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
}
