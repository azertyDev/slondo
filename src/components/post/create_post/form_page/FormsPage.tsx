import React, {FC, useEffect, useState} from 'react';
import {Top} from '../top/Top';
import {useRouter} from "next/router";
import {Typography} from "@material-ui/core";
import {i18n, Router, useTranslation} from "@root/i18n";
import {useDispatch} from "react-redux";
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/MainLayout';
import {ParamsForm} from './params_form/ParamsForm';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {DefaultParamsForm} from './default_params_form/DefaultParamsForm';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {dataForCrtPostNormalize, getCategoriesByParams} from '@src/helpers';
import {categories_list} from '@src/common_data/categories_list';
import {userAPI} from '@src/api/api';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {SuccessPage} from "@src/components/post/create_post/form_page/success_page/SuccessPage";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {useStyles} from './useStyles';


export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

const FormsPage: FC = () => {
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
        sub_category_id: subCategory ? subCategory.id : null,
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

    const [currentFormIndex, setCurrentFormIndex] = useState(1);

    const [post, setPost] = useState(initPost);

    const [filters, setFilters] = useState(initFilters);
    const {color, ...otherFilters} = filters.data;

    const handleFormOpen = (index: number) => () => {
        setCurrentFormIndex(index);
    };

    const setFetchedFilters = async () => {
        try {
            const subCtgrId = subCategory ? subCategory.id : '';
            const typeId = type ? type.id : '';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath]);

    useEffect(() => {
        if (!isCtgrAnimalFishes) {
            setFetchedFilters();
        }
    }, []);
    console.log('filters', filters)
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
                        {!isCtgrAnimalFishes && (
                            <div>
                                <ParamsForm
                                    t={t}
                                    mark={mark}
                                    filters={otherFilters}
                                    type={type}
                                    post={post}
                                    setPost={setPost}
                                    isPreview={isPreview}
                                    subCategory={subCategory}
                                    currentFormIndex={currentFormIndex}
                                    handleFormOpen={handleFormOpen}
                                />
                            </div>
                        )}
                        <div>
                            <AppearanceForm
                                t={t}
                                mark={mark}
                                colors={color}
                                post={post}
                                setPost={setPost}
                                isPreview={isPreview}
                                currentFormIndex={currentFormIndex}
                                handleFormOpen={handleFormOpen}
                            />
                        </div>
                        <div>
                            <DefaultParamsForm
                                t={t}
                                asPath={asPath}
                                postType={postType}
                                post={post}
                                setPost={setPost}
                                isPreview={isPreview}
                                currentFormIndex={currentFormIndex}
                                handleFormOpen={handleFormOpen}
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
                </>}
        </MainLayout>
    )
};

export default withAuthRedirect(FormsPage);