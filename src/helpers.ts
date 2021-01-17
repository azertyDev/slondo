import {CategoryType, ModelType} from "@root/interfaces/Categories";
import {IdNameType} from "@root/interfaces/Announcement";
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

type SearchType = (IdNameType & {
    parent: IdNameType,
    icons: [],
    image: { url: string }
})[];

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

export const categoryDataNormalization = (categoryList) => (
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

export const categorySearchHelper = (text: string, categoryList: CategoryType[]): SearchType => {
    const searchRegExp = RegExp(text, 'i');
    return categoryList
        .reduce((list, category) => {
            category.model.forEach(sub_ctgr => {
                if (searchRegExp.test(sub_ctgr.name)) {
                    list.push(sub_ctgr);
                }
            })
            return list;
        }, []);
};

export const prepareCreateAncmnt = (data: any, adParams?: any): any => (
    Object.keys(data).reduce((acc, key) => {
        if (Array.isArray(data[key]) || data[key] === '') {
            acc[key] = data[key];
        }
        if (
            Array.isArray(data[key])
            && data[key].length
            && adParams !== undefined && adParams[key]
        ) {
            acc = {
                ...acc,
                ...prepareCreateAncmnt(adParams[key])
            };
        }
        return acc;
    }, {})
);

export const pricePrettier = (price: number): string =>
    price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");