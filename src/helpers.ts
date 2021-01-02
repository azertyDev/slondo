import {CategoryType} from "@root/interfaces/Categories";
import {IdNameType} from "@root/interfaces/Announcement";
import CyrillicToTranslit from 'cyrillic-to-translit-js';


const transform = new CyrillicToTranslit().transform;
const formatRegEx = /[\-\,\.\;\"\']+/g;

export const transformTitle = ( title ) => {
    transform(title)
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

export const categoryDataNormalization = (categoryList: CategoryType[]): CategoryType[] => (
    categoryList.map(category => {
        const childs = category.childs.map(child => ({
                ...child,
                parent: {
                    id: category.id,
                    name: category.name
                }
            })
        );
        return {...category, childs};
    })
);

export const categorySearchHelper = (text: string, categoryList: CategoryType[]): SearchType => {
    const searchRegExp = RegExp(text, 'i');
    return categoryList
        .reduce((list, category) => {
            category.childs.forEach(sub_ctgr => {
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
