import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {CategoryType} from "@root/interfaces/Categories";
import {Dispatch, SetStateAction} from "react";
import {IdNameType} from "@root/interfaces/Announcement";

interface StateHelper {
    state: any,
    setState: Dispatch<SetStateAction<any>>,
    fetchedData: Promise<any>,
    dispatch: Dispatch<any>
}

type SearchType = (IdNameType & { parent: any, icons: [], image: { url: string } })[];

export const stateHelper = async ({state, setState, fetchedData, dispatch}: StateHelper): Promise<void> => {
    try {
        setState({...state, isFetch: true});

        const ancmnts = await fetchedData;

        setState({...state, ancmnts, isFetch: false});
    } catch (e) {
        dispatch(setErrorMsgAction(e.message));
        setState({...state, isFetch: false});
    }
};

export const categoryDataNormalization = (categoryList: CategoryType[]): CategoryType[] => (
    categoryList.map(category => {
        const childs = category.childs.map(child => (
            {...child, parent: category}
        ));
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