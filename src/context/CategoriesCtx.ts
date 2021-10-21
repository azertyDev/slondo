import {createContext} from 'react';
import {CategoryType} from "@root/interfaces/Categories";

export const CategoriesCtx = createContext<CategoryType[]>([]);