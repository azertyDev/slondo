import {CategoryType, SubLvlCtgrsType} from "@root/interfaces/Categories";
import CyrillicToTranslit from 'cyrillic-to-translit-js';


export const whiteSpacesRegEx = /\s/g;
export const numberRegEx = /^[0-9,\s]*$/;
export const timeRegEx = /^([0-1]?[0-9]|2[0-3])?:([0-5][0-9]?)?$/;

const excludedKeys = ['id', 'type_id', 'sub_type_id'];

export const numericFields = [
    'price',
    'reserve_price',
    'price_by_now',
    'year',
    'area',
    'floor',
    'general_area',
    'kitchen_area',
    'living_area',
    'number_of_floors'
];

export const optionKeys = [
    'safety',
    'multimedia',
    'assistant',
    'exterior',
    'car_climate',
    'airbags',
    'assistance',
    'other',
    'comfort',
    'view',
    'parking',
    'anti_theft'
];

export const transformTitle = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;
    const formatRegEx = /[\-\,\.\;\"\']+/g;

    return transform(title)
        .toLowerCase()
        .replace(formatRegEx, ' ')
        .replace(/\s+/g, '-');
};

export const pricePrettier = (price: string): string => {
    return !!price
        ? price.toString()
            .replace(/\s/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        : '';
}

export const noSelect = {id: null, name: 'Не выбрано'};

export const fieldKeysWithTxt = ['area'];

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