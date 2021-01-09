import React, {FC} from 'react';
import {WithT} from "i18next";
import {useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";
import {CategoriesSlider} from "@src/components/header/sliders/categoriesSlider/CategoriesSlider";


export const CategoriesSliderContainer: FC<WithT> = (props) => {
    const {categories} = useSelector((store: RootState) => store);
    return <CategoriesSlider {...props} categories={categories}/>
};