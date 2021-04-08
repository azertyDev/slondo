import React, {FC, useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {userAPI} from '@src/api/api';
import {Steps} from '../steps/Steps';
import {useTranslation} from "next-i18next";
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/MainLayout';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {CommonParamsForm} from './common_params_form/CommonParamsForm';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {dataForCrtPostNormalize, getCategoriesByParams, CategoriesParamsType} from '@src/helpers';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {SuccessPage} from "@src/components/post/create_post/form_page/success_page/SuccessPage";
import {ParamsFormContainer} from "./params_form/ParamsFormContainer";
import {RootState} from "@src/redux/rootReducer";
import {useStyles} from './useStyles';


const extendSubCtgrs = [
    'apartments',
    'housesCottages'
];

export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

export const FormPage: FC = () => {
    const dispatch = useDispatch();

    const {t} = useTranslation(['post', 'errors']);
    const {phone} = useSelector((store: RootState) => store.user.info);

    const {asPath, query, locale, push} = useRouter();
    const [postTypeName, categoryName, subCategoryName, typeName] = query.slug as string[];

    const {category, subCategory, type} = getCategoriesByParams(
        {
            categoryName,
            subCategoryName,
            typeName
        } as CategoriesParamsType
    );

    const mark = category.name;
    const isCtgrAnimalFishes = category.name === 'animal' && subCategory.name === 'fishes';
    const isExtendSubCtgr = extendSubCtgrs.some(ctgr => ctgr === subCategory.name);

    const title = `${t(`categories:${category.name}`)}
        ${subCategory ? ` - ${t(`categories:${subCategory.name}`)}` : ''}
        ${type ? ` - ${t(`categories:${type.name}`)}` : ''}`;

    const postType = postTypes.find(type => type.name === postTypeName);

    const initPost = {
        ads_type_id: postType.id,
        category_id: category.id,
        sub_category_id: subCategory?.id,
        photos: []
    };

    if (isCtgrAnimalFishes) {
        initPost[mark] = {
            [`${mark}_id`]: subCategory.id
        };
    }

    const initFilters: { isFetch: boolean, data: any } = {
        isFetch: false,
        data: {}
    };

    const [isSuccess, setIsSuccess] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    const [post, setPost] = useState(initPost);
    const [filters, setFilters] = useState(initFilters);
    const {colors, ...filtersData} = filters.data;
    const [currentFormIndex, setCurrentFormIndex] = useState(isExtendSubCtgr ? 4 : 3);

    const handleNextFormOpen = () => {
        setCurrentFormIndex(currentFormIndex - 1);
    };

    const handleFormOpen = (formIndex: number) => () => {
        setCurrentFormIndex(formIndex);
    };

    const setFetchedFilters = async () => {
        try {
            const subCtgrId = subCategory?.id ?? '';
            const typeId = type?.id ?? '';

            setFilters({
                ...filters,
                isFetch: true
            });

            const fetchedData = await userAPI.getDataForCreatePost(category.id, subCtgrId, typeId, locale);

            setFilters({
                isFetch: false,
                data: dataForCrtPostNormalize(fetchedData, type)
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleBack = () => {
        isPreview
        ? setIsPreview(false)
        : push(
            `/create/type/${postTypeName}/${categoryName}/${subCategoryName}`,
            undefined,
            {shallow: true}
        );
    };

    const toPublish = async () => {
        try {
            const form = new FormData();
            const {photos, ...data} = post;

            const postId = await userAPI.createPost(data);

            form.append('ads_id', postId);
            photos.forEach(photo => form.append('files[]', photo.file));

            await userAPI.uploadPhotos(form);

            setIsSuccess(true);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath, post]);

    useEffect(() => {
        if (!isCtgrAnimalFishes && !!category) {
            setFetchedFilters();
        }
    }, []);

    const classes = useStyles();
    return (
        <MainLayout>
            {isSuccess
             ? <SuccessPage/>
             : <>
                 <Steps
                     title={title}
                     handleBack={handleBack}
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
                             post={post}
                             ownerPhone={phone}
                             asPath={asPath}
                             postType={postType}
                             setPost={setPost}
                             isPreview={isPreview}
                             setIsPreview={setIsPreview}
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
    );
};