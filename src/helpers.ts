import {CategoryType, SubLvlCtgrsType} from "@root/interfaces/Categories";
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {excludedKeys} from "@src/common_data/form_fields_list";
import {pnctnMarksRegEx} from "@src/common_data/reg_ex";
import {TFunction} from "i18next";


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
    list.map(ctgr => {
        if (ctgr.type) {
            const type = addParents(
                ctgr.type,
                [
                    ...parents,
                    {
                        id: ctgr.id,
                        name: ctgr.name
                    }
                ]
            )
            return {
                ...ctgr,
                type,
                parents
            }
        } else {
            return {
                ...ctgr,
                parents
            }
        }
    })
);

export const categoriesListNormalize = (categoryList: CategoryType[]) => (
    categoryList.map(ctgr => {
        if (ctgr.model) {
            const model = addParents(
                ctgr.model,
                [{
                    id: ctgr.id,
                    name: ctgr.name
                }]
            );
            return {...ctgr, model};
        } else {
            return ctgr;
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
                        acc.model = [];
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

export const categorySearchHelper = (txt: string, categoryList: CategoryType[]): SubLvlCtgrsType[] => {
    return categoryList
        .reduce((list, category) => {
            list = [...list, ...getMatchedCtgrs(txt, category.model)];
            return list;
        }, []);

    function getMatchedCtgrs(txt, list) {
        const searchRegExp = RegExp(txt, 'i');
        let matchedCtgrs = [];

        if (list !== undefined) {
            list.forEach(ctgr => {
                if (searchRegExp.test(ctgr.name)) {
                    matchedCtgrs.push(ctgr);
                }
                matchedCtgrs = [
                    ...matchedCtgrs,
                    ...getMatchedCtgrs(txt, ctgr.type)
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

export const categoriesTrans = (ctgrList: any[], t: TFunction) => {
    return ctgrList.reduce((acc, ctgr) => {
        const cloneCtgr = {
            ...ctgr,
            name: t(`categories:${ctgr.name}`)
        };

        if (ctgr.model) {
            cloneCtgr.model = categoriesTrans(ctgr.model, t);
        }
        if (ctgr.type) {
            cloneCtgr.type = categoriesTrans(ctgr.type, t);
        }
        if (ctgr.parents) {
            cloneCtgr.parents = categoriesTrans(ctgr.parents, t);
        }

        acc.push(cloneCtgr);
        return acc;
    }, []);
};