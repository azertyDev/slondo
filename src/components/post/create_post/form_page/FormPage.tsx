import React, {FC, useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {userAPI} from '@src/api/api';
import {Top} from '../top/Top';
import {i18n, Router, useTranslation} from "@root/i18n";
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/MainLayout';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {CommonParamsForm} from './common_params_form/CommonParamsForm';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {dataForCrtPostNormalize, getCategoriesByParams} from '@src/helpers';
import {categories_list} from '@src/common_data/categories_list';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {SuccessPage} from "@src/components/post/create_post/success_page/SuccessPage";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {ParamsFormContainer} from "./params_form/ParamsFormContainer";
import {useStyles} from './useStyles';


const extendSubCtgrs = [
    'apartments',
    'housesCottages'
];

export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

const FormPage: FC = () => {
    const dispatch = useDispatch();

    const {t} = useTranslation(['post']);
    const lang = i18n.language;

    const {asPath, query} = useRouter();
    const {index, preview, success, ...params} = query;

    const {category, subCategory, type} = getCategoriesByParams(categories_list, params);
    const mark = category.name;

    const isCtgrAnimalFishes = category.name === 'animal' && subCategory.name === 'fishes';

    const isPreview = !!Number(preview);
    const isSuccess = !!Number(success);
    const isExtendSubCtgr = extendSubCtgrs.some(ctgr => ctgr === subCategory.name);

    const backUrl = isPreview
        ? asPath.replace(/preview=1/, 'preview=0')
        : `/create/type/${index}`;

    const title = `${t(`categories:${category.name}`)}
        ${subCategory ? ` - ${t(`categories:${subCategory.name}`)}` : ''}
        ${type ? ` - ${t(`categories:${type.name}`)}` : ''}`;

    const postType = postTypes.find(type => type.name === index);

    const initPost = {
        ads_type_id: postType.id,
        category_id: category.id,
        sub_category_id: subCategory?.id,
        photos: []
    };

    if (isCtgrAnimalFishes) {
        initPost[mark] = {
            [`${mark}_id`]: subCategory.id
        }
    }

    const initFilters: { isFetch: boolean, data: any } = {
        isFetch: false,
        data: {}
    };

    const [currentFormIndex, setCurrentFormIndex] = useState(isExtendSubCtgr ? 4 : 3);

    const [post, setPost] = useState(initPost);

    const [filters, setFilters] = useState(initFilters);
    const {colors, ...filtersData} = filters.data;

    const handleNextFormOpen = () => {
        setCurrentFormIndex(currentFormIndex - 1);
    };

    const handleFormOpen = (index: number) => () => {
        setCurrentFormIndex(index);
    };

    const setFetchedFilters = async () => {
        try {
            const subCtgrId = subCategory?.id ?? '';
            const typeId = type?.id ?? '';

            setFilters({
                ...filters,
                isFetch: true
            });

            const fetchedData = await userAPI.getDataForCreatePost(category.id, subCtgrId, typeId, lang);

            setFilters({
                isFetch: false,
                data: dataForCrtPostNormalize(fetchedData, type)
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const toPublish = async () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath, post]);

    useEffect(() => {
        if (!isCtgrAnimalFishes) {
            setFetchedFilters();
        }
    }, []);

    // console.log('filters', filters)
    // console.log('post', post)

    const classes = useStyles();
    return (
        <MainLayout>
            {isSuccess
                ? <SuccessPage/>
                : <>
                    <Top
                        title={title}
                        backUrl={backUrl}
                        activeStep={isPreview ? 3 : 2}
                    />
                    <div className={classes.root}>
                        <ParamsFormContainer
                            t={t}
                            mark={mark}
                            type={type}
                            filters={filtersData}
                            post={post}
                            setPost={setPost}
                            isPreview={isPreview}
                            subCategory={subCategory}
                            isExtendSubCtgr={isExtendSubCtgr}
                            currentFormIndex={currentFormIndex}
                            handleFormOpen={handleFormOpen}
                            handleNextFormOpen={handleNextFormOpen}
                        />
                        <div>
                            <AppearanceForm
                                t={t}
                                mark={mark}
                                colors={colors}
                                post={post}
                                setPost={setPost}
                                isPreview={isPreview}
                                handleFormOpen={handleFormOpen}
                                handleNextFormOpen={handleNextFormOpen}
                                currentFormIndex={currentFormIndex}
                            />
                        </div>
                        <div>
                            <CommonParamsForm
                                t={t}
                                asPath={asPath}
                                postType={postType}
                                post={post}
                                setPost={setPost}
                                isPreview={isPreview}
                                currentFormIndex={currentFormIndex}
                            />
                        </div>
                        {isPreview && (
                            <div className='publish-button-wrapper'>
                                <ButtonComponent onClick={toPublish}>
                                    <Typography variant='subtitle1'>
                                        {t('publish')}
                                    </Typography>
                                </ButtonComponent>
                            </div>
                        )}
                    </div>
                </>}
        </MainLayout>
    )
};

export default withAuthRedirect(FormPage);