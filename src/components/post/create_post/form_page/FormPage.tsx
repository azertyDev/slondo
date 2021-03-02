import React, {FC, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {Typography} from "@material-ui/core";
import {i18n, Router, useTranslation} from "@root/i18n";
import {useDispatch} from "react-redux";
import {postTypes} from '@src/common_data/post_types_list';
import {MainLayout} from '@src/components/MainLayout';
import {ParamsForm} from './params_form/ParamsForm';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {DefaultParamsForm} from './default_params_form/DefaultParamsForm';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {dataForCrtPostNormalize, getCategoriesByParams} from '@src/helpers';
import {categories_list} from '@src/common_data/categories_list';
import {Top} from '../top/Top';
import {userAPI} from '@src/api/api';
import {CarForm} from '@src/components/post/create_post/form_page/car_form/CarForm';
import {EstateForm} from '@src/components/post/create_post/form_page/estate_form/EstateForm';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {SuccessPage} from "@src/components/post/create_post/success_page/SuccessPage";
import {useStyles} from './useStyles';


export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

export const FormPage: FC = () => {
    const dispatch = useDispatch();

    const {t} = useTranslation(['post']);
    const lang = i18n.language;

    const {asPath, query} = useRouter();
    const {index, preview, success, ...params} = query;

    const {category, subCategory, type} = getCategoriesByParams(categories_list, params);
    const mark = category.name;
    const isCategoryFree = category.name === 'free';

    const isPreview = !!Number(preview);
    const isSuccess = !!Number(success);

    const backUrl = isPreview ? asPath.replace(/preview=1$/, 'preview=0') : `/create/type/${index}`;

    const title = `${t(`categories:${category.name}`)}
        ${subCategory ? ` - ${t(`categories:${subCategory.name}`)}` : ''}
        ${type ? ` - ${t(`categories:${type.name}`)}` : ''}`;

    const postType = postTypes.find(type => type.name === index);

    const initPost = {
        ads_type_id: postType.id,
        category_id: category.id,
        sub_category_id: subCategory ? subCategory.id : null,
        photos: []
    };

    const initFilters: { isFetch: boolean, data: any } = {
        isFetch: false,
        data: {}
    };

    const initOpenKeys = {
        car: mark === 'car',
        estate: mark === 'estate',
        params: mark !== 'car' && mark !== 'estate',
        appearance: false,
        defParams: false
    };

    const [post, setPost] = useState(initPost);

    const [filters, setFilters] = useState(initFilters);
    const {color, ...data} = filters.data;

    const [openKeys, setOpenKeys] = useState(initOpenKeys);

    const handleFormOpen = (key, expanded) => {
        for (const k in openKeys) {
            if (k !== key) {
                openKeys[k] = false;
            } else {
                openKeys[key] = expanded;
            }
        }
        // openKeys[key] = expanded;
        setOpenKeys({...openKeys});
    };

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
                data: dataForCrtPostNormalize(fetchedData)
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const publishPost = async () => {
        try {
            const {photos, ...data} = post;
            const form = new FormData();

            const postId = await userAPI.createPost(data);

            form.append('ads_id', postId);
            photos.forEach(photo => form.append('files[]', photo.file));

            await userAPI.uploadPhotos(form);
            Router.push(asPath.replace(/success=0$/, 'success=1'));
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const paramsFormByCategory = () => {
        switch (category.name) {
            case 'car':
                return <CarForm t={t}/>;
            case 'estate':
                return <EstateForm t={t}/>;
            default:
                return <ParamsForm
                    t={t}
                    mark={mark}
                    filters={data}
                    type={type}
                    post={post}
                    setPost={setPost}
                    isPreview={isPreview}
                    subCategory={subCategory}
                    openKey={openKeys.params}
                    handleFormOpen={handleFormOpen}
                />;
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath]);

    useEffect(() => {
        !isCategoryFree && setFetchedFilters();
    }, []);

    // console.log(post, mark)
    // console.log('openKeys', openKeys)
    const classes = useStyles();
    return (
        <MainLayout>
            {
                isSuccess
                    ? <SuccessPage/>
                    : <>
                        <Top
                            activeStep={isPreview ? 3 : 2}
                            title={title}
                            backUrl={backUrl}
                        />
                        <div className={classes.root}>
                            {!isCategoryFree && (
                                <div>
                                    {paramsFormByCategory()}
                                </div>
                            )}
                            <div>
                                <AppearanceForm
                                    t={t}
                                    mark={mark}
                                    colors={color}
                                    isPreview={isPreview}
                                    post={post}
                                    setPost={setPost}
                                    openKey={openKeys.appearance}
                                    handleFormOpen={handleFormOpen}
                                />
                            </div>
                            <div>
                                <DefaultParamsForm
                                    t={t}
                                    mark={mark}
                                    asPath={asPath}
                                    postType={postType}
                                    post={post}
                                    setPost={setPost}
                                    isPreview={isPreview}
                                    openKey={openKeys.defParams}
                                    handleFormOpen={handleFormOpen}
                                    isCategoryFree={isCategoryFree}
                                />
                            </div>
                            {isPreview && (
                                <div className='publish-button-wrapper'>
                                    <ButtonComponent onClick={publishPost}>
                                        <Typography variant='subtitle1'>
                                            {t('publish')}
                                        </Typography>
                                    </ButtonComponent>
                                </div>
                            )}
                        </div>
                    </>
            }
        </MainLayout>
    )
};