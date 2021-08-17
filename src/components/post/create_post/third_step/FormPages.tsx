import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {useRouter} from 'next/router';
import {Hidden, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {StepsProgress} from '../steps_progress/StepsProgress';
import {postTypes} from '@src/common_data/post_types';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {CommonForm} from './common_form/CommonForm';
import {
    urlByParams,
    normalizeFiltersByCategory,
    getCategoriesByParams,
    CategoriesParamsType,
    manufacturersDataNormalize
} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SuccessPage} from '@src/components/post/create_post/third_step/success_page/SuccessPage';
import {ParamsFormContainer} from './params_form/ParamsFormContainer';
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

export const FormPages: FC<{ backURL: string }> = ({backURL}) => {
    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);

    const {asPath, query, push} = useRouter();
    const {
        post_type,
        main_ctgr,
        sub_ctgr,
        type_ctgr,
        post_id,
        preview
    } = query;

    const isPreview = +preview === 1;
    const postTypeName = post_type as string;
    const categoryName = main_ctgr as string;
    const subcategoryName = sub_ctgr as string;
    const typeName = type_ctgr as string;

    const {category, subcategory, type} = getCategoriesByParams({
        categoryName,
        subcategoryName,
        typeName
    } as CategoriesParamsType);

    const isCtgrAnimalFishes = category?.name === 'animal' && subcategory?.name === 'fishes';

    const title = `${t(`categories:${category.name}.name`)}
        ${subcategory ? ` - ${t(`categories:${category.name}.${subcategory.name}.name`)}` : ''}
        ${type ? ` - ${t(`categories:${category.name}.${subcategory.name}.${type.name}.name`)}` : ''}`;

    const postType = postTypes.find(type => type.name === postTypeName);

    const formURL = `/create?post_type=${postTypeName}&main_ctgr=${categoryName}&sub_ctgr=${subcategoryName}${typeName ? `&type_ctgr=${typeName}` : ''}`;

    const initPost = {
        ads_type_id: postType.id,
        category_id: category.id,
        sub_category_id: subcategory?.id,
        params: {title: ''},
        appearance: {
            color_id: null,
            photos: []
        },
        commonParams: {}
    };

    const [isFetch, setIsFetch] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [post, setPost] = useState(initPost);
    const [currentFormIndex, setCurrentFormIndex] = useState(3);
    const [filters, setFilters] = useState<any>({});
    const {colors, color, ...filtersData} = filters;

    const handleNextFormOpen = () => {
        setCurrentFormIndex(currentFormIndex - 1);
    };

    const handleFormOpen = (formIndex: number) => () => {
        setCurrentFormIndex(formIndex);
    };

    const fetchFilters = async () => {
        try {
            const subCtgrId = subcategory?.id;
            const typeId = type?.id;
            const params: any = {category_id: category.id};

            if (subCtgrId) params.sub_category_id = subCtgrId;
            if (typeId) params.type_id = typeId;

            setIsFetch(true);

            let fetchedData = await userAPI.getFiltersByCtgr(params);

            if (categoryName === 'car') {
                if (subcategoryName === 'made_uzbekistan') {
                    fetchedData = {
                        ...fetchedData.default_param,
                        manufacturer: manufacturersDataNormalize(fetchedData)
                    };
                } else {
                    fetchedData = {...fetchedData.default_param};
                }
            }

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setFilters(normalizeFiltersByCategory(fetchedData, type));
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleBack = async () => {
        await push(backURL, undefined, {shallow: true});
    };

    const handleSubmit = async (values) => {
        setPost({...post, ...values});
        if (currentFormIndex === 1) {
            const {title, ...params} = post.params;
            post_id
                ? await push(`${formURL}&preview=1`)
                : await push(`${formURL}${
                    urlByParams({
                        ...values.commonParams,
                        title,
                        model: params
                    })
                }&preview=1`);
        }
    };

    const toPublish = async () => {
        try {
            const form = new FormData();
            const {
                params,
                commonParams,
                appearance,
                ...postData
            } = post;

            const {title, ...otherParams} = params;
            const {photos, color_id} = appearance;

            const data = {
                title,
                ...postData,
                ...commonParams,
                [categoryName]: {
                    sub_category_id: subcategory.id,
                    ...otherParams
                }
            };

            if (type) data[categoryName].type_id = type.id;
            if (color_id) data[categoryName].color_id = color_id;

            setIsFetch(true);

            form.append('data', JSON.stringify(data));
            photos.forEach(photo => {
                if (typeof photo === 'number') {
                    form.append('images_id[]', photo.toString());
                } else {
                    form.append('files[]', photo);
                }
            });

            post_id ? await userAPI.editPost(form, post_id) : await userAPI.createPost(form);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setIsSuccess(true);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        !isCtgrAnimalFishes
        && !!category
        && fetchFilters();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath, post]);

    const classes = useStyles();
    return (
        isSuccess
            ? <SuccessPage/>
            : <>
                <Hidden smDown>
                    <StepsProgress
                        title={title}
                        handleBack={handleBack}
                        activeStep={isPreview ? 3 : 2}
                    />
                </Hidden>
                <div className={classes.root}>
                    <ParamsFormContainer
                        type={type}
                        filters={filtersData}
                        isPreview={isPreview}
                        category={category}
                        subcategory={subcategory}
                        currentFormIndex={currentFormIndex}
                        handleSubmit={handleSubmit}
                        handleFormOpen={handleFormOpen}
                        handleNextFormOpen={handleNextFormOpen}
                    />
                    <div>
                        <AppearanceForm
                            isPreview={isPreview}
                            colors={colors || color}
                            categoryName={categoryName}
                            currentFormIndex={currentFormIndex}
                            handleSubmit={handleSubmit}
                            handleFormOpen={handleFormOpen}
                            handleNextFormOpen={handleNextFormOpen}
                        />
                    </div>
                    <div>
                        <CommonForm
                            postType={postType}
                            handleSubmit={handleSubmit}
                            currentFormIndex={currentFormIndex}
                        />
                    </div>
                    {isPreview && (
                        <div className='publish-button-wrapper'>
                            <CustomButton disabled={isFetch} onClick={toPublish} color='secondary'>
                                <Typography variant='subtitle1' component='p'>
                                    {t('publish')}
                                </Typography>
                            </CustomButton>
                        </div>
                    )}
                </div>
            </>
    );
};