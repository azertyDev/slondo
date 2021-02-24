import React, {FC, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {i18n, useTranslation} from "@root/i18n";
import {useDispatch} from "react-redux";
import {FileType} from "@root/interfaces/Post";
import {CameraIcon} from "@src/components/elements/icons";
import { postTypes } from '@src/common_data/post_types_list'
import { MainLayout } from '@src/components/MainLayout'
import { ParamsForm } from './params_form/ParamsForm'
import { AppearanceForm } from './appearance_form/AppearanceForm'
import { DefaultParamsForm } from './default_params_form/DefaultParamsForm'
import { setErrorMsgAction } from '@root/src/redux/slices/errorSlice'
import { getCategoriesByParams } from '@src/helpers'
import { CreatePostHeader } from '../create_post_header/CreatePostHeader'
import { categories_list } from '@src/common_data/categories_list'
import { useStyles } from './useStyles'
import { userAPI } from '@src/api/api'
import { CarForm } from '@src/components/post/create_post/form_page/car_form/CarForm'
import { EstateForm } from '@src/components/post/create_post/form_page/estate_form/EstateForm'


export const initPhoto: FileType = {
    url: (
        <div style={{ width: '100px', height: '100px', margin: 'auto' }}>
            <CameraIcon />
        </div>
    ),
}

export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

export const FormPage: FC = () => {
    const dispatch = useDispatch();

    const {t} = useTranslation(['post']);
    const lang = i18n.language;

    const {asPath, query} = useRouter();
    const {index, preview, ...params} = query;

    const {category, subCategory, type} = getCategoriesByParams(categories_list, params);
    const mark = category.name;
    const isCategoryFree = category.name !== 'free';

    const isPreview = !!Number(preview);
    const backUrl = isPreview ? asPath.replace(/1$/, '0') : `/create/type/${index}`;

    const title = `${t(`categories:${category.name}`)}
        ${subCategory ? ` - ${t(`categories:${subCategory.name}`)}` : ''}
        ${type ? ` - ${t(`categories:${type.name}`)}` : ''}`;

    const postType = postTypes.find(type => type.name === index);

    const initFilters: { isFetch: boolean, data: any } = {
        isFetch: false,
        data: {}
    };

    const initOpenStats = {
        carParamsOpen: true,
        paramsOpen: category.name !== 'car' || true,
        appearanceOpen: category.name === 'free' || true,
        defParamsOpen: true,
    };

    const [post, setPost] = useState({});

    const [filters, setFilters] = useState(initFilters);
    const {color, ...data} = filters.data;

    const [openStats, setOpenStats] = useState(initOpenStats);
    const {
        paramsOpen,
        appearanceOpen,
        defParamsOpen
    } = openStats;

    const handleSetPost = (value) => {
        setPost({...post, ...value})
    }

    const setFetchedFilters = async () => {
        try {
            const subCtgrId = subCategory ? subCategory.id : null;
            const typeId = type ? type.id : null;

            setFilters({
                ...filters,
                isFetch: true
            });

            const fetchedData = await userAPI.getDataForCreatePost(category.id, subCtgrId, typeId, lang);

            setFilters({
                isFetch: false,
                data: fetchedData
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const paramsFormByCategory = () => {
        switch (category.name) {
            case 'car':
                return <CarForm t={t} />
            case 'estate':
                return <EstateForm t={t} />
            default:
                return <ParamsForm
                    t={t}
                    mark={mark}
                    filters={data}
                    open={paramsOpen}
                    category={category}
                    subCategory={subCategory}
                    type={type}
                    handleSetPost={handleSetPost}
                />;
        }
    };

    useEffect(() => {
        isCategoryFree && setFetchedFilters();
    }, []);

    console.log(post)
    const classes = useStyles();
    return (
        <MainLayout>
            <CreatePostHeader
                activeStep={2}
                title={title}
                backUrl={backUrl}
            />
            <div className={classes.root}>
                {isCategoryFree && <div>
                    {paramsFormByCategory()}
                </div>}
                <div>
                    <AppearanceForm
                        t={t}
                        isPreview={isPreview}
                        open={appearanceOpen}
                        colors={color}
                        handleSetPost={handleSetPost}
                    />
                </div>
                <div>
                    <DefaultParamsForm
                        t={t}
                        mark={mark}
                        asPath={asPath}
                        open={defParamsOpen}
                        postType={postType}
                        handleSetPost={handleSetPost}
                    />
                </div>
            </div>
        </MainLayout>
    )
};

// const prepareValues = () => {
//     const {
//         price,
//         phone,
//         currency,
//         location,
//         avalTime: {
//             isActive,
//             start_time,
//             end_time,
//             available_days
//         },
//         ...defParams
//     } = defaultParams;
//
//     const valsForCrtPost: any = {
//         ...defParams,
//         ...location,
//         phone,
//         price: price.replace(whiteSpacesRegEx, ''),
//         currency_id: currency.id,
//         [category.name]: {
//             [`${category.name}_id`]: category.id
//         }
//     };
//
//     if (isActive) {
//         if (!!available_days.length) {
//             valsForCrtPost.available_days = available_days;
//         }
//         valsForCrtPost.start_time = start_time;
//         valsForCrtPost.end_time = end_time;
//     }
//
//     Object.keys(postParamsByMark).map(k => {
//         if (postParamsByMark[k]) {
//             if (Array.isArray(postParamsByMark[k]) && postParamsByMark[k].length) {
//                 valsForCrtPost[category.name][k] = postParamsByMark[k].map(val => ({id: val.id}));
//             } else if (postParamsByMark[k].id) {
//                 if (postParamsByMark[k].txt) {
//                     valsForCrtPost[category.name][k] = postParamsByMark[k].txt;
//                 }
//                 valsForCrtPost[category.name][`${k}_id`] = postParamsByMark[k].id;
//             } else if (!!postParamsByMark[k]) {
//                 valsForCrtPost[category.name][k] = postParamsByMark[k];
//             }
//         }
//     });
//
//     if (isAuction) {
//         const {
//             duration,
//             display_phone,
//             auto_renewal,
//             reserve_price,
//             offer_the_price,
//             price_by_now: {value}
//         } = auction;
//
//         valsForCrtPost.auction = {
//             display_phone,
//             offer_the_price,
//             auto_renewal,
//             duration_id: duration.id,
//             reserve_price: reserve_price.replace(whiteSpacesRegEx, ''),
//             price_by_now: value.replace(whiteSpacesRegEx, '')
//         };
//     }
//
//     return valsForCrtPost;
// };