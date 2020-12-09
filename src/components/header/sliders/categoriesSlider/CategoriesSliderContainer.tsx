import React, {FC, useEffect, useState} from 'react';
import {CategoriesSlider} from "@src/components/header/sliders/categoriesSlider/CategoriesSlider";
import {Categories, CategoryType} from "@root/interfaces/Categories";
import {userAPI} from "@src/api/api";
import {i18n} from "@root/i18n";

const sliderDataList: CategoryType = {
    id: null,
    name: '',
    images: {id: null, url: {default: ''}},
    icons: {id: null, url: {default: ''}},
    childs: [],
    has_auction: false
}

const initSliders: CategoryType[] = [];

for (let i = 1; i <= 12; i++) {
    initSliders.push(sliderDataList);
}

const initialState: Categories = {
    isFetch: false,
    error: null,
    list: initSliders,
};

export const CategoriesSliderContainer: FC<any> = (props) => {
    const lang = i18n.language;
    const [sliderData, setSliderData] = useState(initialState);

    const setSlidersData = async (state, setState, lang) => {
        try {
            setState({
                ...state,
                isFetch: true
            })

            const newData = await userAPI.getCategories(lang);

            setState({
                ...state,
                isFetch: false
            });

            setState({
                ...state,
                list: [
                    ...newData
                ]
            });
        } catch (e) {
            setState({
                ...state,
                error: e.message
            });
        }
    }

    useEffect(() => {
        setSlidersData(sliderData, setSliderData, lang);
    }, [])

    return <CategoriesSlider t={props.t} sliderData={sliderData}/>
};
