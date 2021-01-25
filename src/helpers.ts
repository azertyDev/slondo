import {CategoryType, SubLvlCtgrsType} from "@root/interfaces/Categories";
import CyrillicToTranslit from 'cyrillic-to-translit-js';


export const transformTitle = (title: string): string => {
    const transform = new CyrillicToTranslit().transform;
    const formatRegEx = /[\-\,\.\;\"\']+/g;

    return transform(title)
        .toLowerCase()
        .replace(formatRegEx, ' ')
        .replace(/\s+/g, '-');
};


export const numberRegEx = /^[0-9]*$/;

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

export const categoryDataNormalization = (categoryList: CategoryType[]) => (
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

export const formatDataForCrtPost = (data: any) => {
    return data
        ? Object.keys(data).reduce((acc, key) => {
            if (key === 'type') {
                acc = {
                    ...acc,
                    ...formatDataForCrtPost(data[key][0])
                };
            } else {
                if (Array.isArray(data[key]) || data[key] === '') {
                    acc[key] = data[key];
                }
            }
            return acc;
        }, {})
        : {}
};

export const pricePrettier = (price: number): string =>
    price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");