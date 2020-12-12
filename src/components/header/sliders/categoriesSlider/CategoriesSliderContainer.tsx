import React, {FC} from 'react';
import {CategoriesSlider} from "@src/components/header/sliders/categoriesSlider/CategoriesSlider";
import {useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";


export const CategoriesSliderContainer: FC<any> = (props) => {
    const {categories} = useSelector((store: RootState) => store);

    return <CategoriesSlider t={props.t} categories={categories}/>
};