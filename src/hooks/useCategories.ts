import {useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";
import {CategoryType} from "@root/interfaces/Categories";
import {categoriesNormalize} from "@src/helpers";

export type UseCategoriesType = {
    categories: CategoryType[],
    isFetchCategories: boolean
}

export const useCategories = (): UseCategoriesType => {
    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetchCategories, setIsFetchCategories] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const fetchCategories = async () => {
        try {
            setIsFetchCategories(true);
            const categories = categoriesNormalize(await userAPI.getCategories());

            unstable_batchedUpdates(() => {
                setCategories(categories);
                setIsFetchCategories(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsFetchCategories(false);
            });
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return {
        categories,
        isFetchCategories
    };
};