import React, {useEffect, useState} from 'react';
import {CategoriesSlider} from "@src/components/header/sliders/categoriesSlider/CategoriesSlider";
import {Categories, SliderListType} from "@root/interfaces/Categories";
import {userAPI} from "@src/api/api";
import {i18n} from "@root/i18n";

const sliderDataList: SliderListType = {
    id: null,
    name: '',
    images: {id: null, url: ''},
    icons: {id: null, url: ''},
    childs: []
}

const initSliders: SliderListType[] = [];

for (let i = 1; i <= 12; i++) {
    initSliders.push(sliderDataList);
}

const initialState: Categories = {
    isFetch: false,
    error: null,
    list: initSliders,
};

export const CategoriesSliderContainer = (props) => {
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