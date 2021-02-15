import {CategoryType, SubLvlCtgrsType} from "@root/interfaces/Categories";
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {excludedKeys} from "@src/common_data/form_fields_list";
import {pnctnMarksRegEx} from "@src/common_data/reg_ex";
import {TFunction} from "next-i18next";


export const transformTitle = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;

    return transform(title)
        .toLowerCase()
        .replace(pnctnMarksRegEx, ' ')
        .replace(/\s+/g, '-');
};

export const pricePrettier = (price: string): string => {
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

export const dataForCrtPostNormalize = (data: any) => {
    if (!!data) {
        data = Object.keys(data).reduce((acc: any, key) => {
            const isExcludedKey = excludedKeys.some(k => k === key);
            if (Array.isArray(data[key]) && !!data[key].length && key !== 'manufacturers') {
                if (key === 'type') {
                    acc = {
                        ...acc,
                        ...dataForCrtPostNormalize(data[key][0])
                    };
                } else {
                    acc[key] = data[key];
                    if (key === 'manufacturer' && data[key][0].models) {
                        acc.subCategory = [];
                    }
                }
            } else {
                if (key === 'furnished') {
                    acc[key] = false;
                } else if (key === 'default_param') {
                    acc = {
                        ...acc,
                        ...dataForCrtPostNormalize(data[key])
                    };
                } else if (Number.isInteger(data[key]) && !isExcludedKey) {
                    acc[key] = '';
                }
            }
            return acc;
        }, {});
    } else {
        data = {};
    }
    return data
};

export const categorySearchHelper = (txt: string, categoryList: CategoryType[], t: TFunction): SubLvlCtgrsType[] => {
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

export const categoriesByType = (ctgryList: CategoryType[], postType: string): CategoryType[] => {
    return ctgryList.reduce((acc, ctgry) => {
        if (postType === 'post' || ctgry.has_auction) {
            acc.push(ctgry);
        }
        return acc;
    }, []);
};