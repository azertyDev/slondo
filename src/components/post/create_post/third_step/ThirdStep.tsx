import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {useRouter} from 'next/router';
import {CircularProgress, Hidden, Typography} from '@material-ui/core';
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
    manufacturersDataNormalize,
    clearWhiteSpaces
} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ParamsForm} from './params_form/ParamsForm';
import {CategoriesCtx, ErrorCtx, ExitPromptCtx} from "@src/context";
import {numericFields} from "@src/common_data/fields_keys";
import {useStyles} from './useStyles';

export const ThirdStep: FC<{ backURL: string }> = ({backURL}) => {
    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [_, setShowExitPrompt] = useContext(ExitPromptCtx);
    const siteCategories = useContext(CategoriesCtx);

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

    const params = {
        categoryName,
        subcategoryName,
        typeName
    } as CategoriesParamsType;

    const {category, subcategory, type} = getCategoriesByParams(params, siteCategories);

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
    const [post, setPost] = useState<any>(initPost);
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
        !isPreview && setShowExitPrompt(false);
        await push(backURL, undefined, {shallow: true});
    };

    const handleSubmit = async (values) => {
        const postData = {...post, ...values};
        setPost(postData);

        if (currentFormIndex === 3) {
            Object.keys(postData.params).forEach(k => {
                const isNumeric = numericFields.some(f => f === k);
                if (isNumeric) {
                    postData.params[k] = +clearWhiteSpaces(postData.params[k]);
                }
            });
        }

        if (currentFormIndex === 1) {
            const {
                commonParams,
                params: {
                    title,
                    ...params
                },
                appearance: {color_id}
            } = postData;

            const {price, auction} = commonParams;


            commonParams.price = +clearWhiteSpaces(price);

            if (auction) {
                const {reserve_price, price_buy_now} = auction;

                if (reserve_price) auction.reserve_price = +clearWhiteSpaces(reserve_price);
                if (price_buy_now) auction.price_buy_now = +clearWhiteSpaces(price_buy_now);

                commonParams.auction = auction;
            }

            const postParams = {
                ...commonParams,
                title,
                model: params
            };

            if (color_id) postParams.model.color = {id: color_id};

            await push(
                `${formURL}${urlByParams(postParams)}${post_id ? `&post_id=${post_id}` : ''}&preview=1`,
                undefined,
                {shallow: true}
            );
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
            const {region, city, ...otherCommonParams} = commonParams;

            const data = {
                title,
                ...postData,
                ...otherCommonParams,
                region_id: region.id,
                [categoryName]: {
                    sub_category_id: subcategory.id,
                    ...otherParams
                }
            };

            if (city) data.city_id = city.id;
            if (type) data[categoryName].type_id = type.id;
            if (color_id) data[categoryName].color_id = color_id;

            setIsFetch(true);

            form.append('data', JSON.stringify(data));

            photos.forEach(({id, file}) => {
                if (id) {
                    form.append('images_id[]', id);
                } else {
                    form.append('files[]', file);
                }
            });

            post_id
                ? await userAPI.editPost(form, post_id)
                : await userAPI.createPost(form);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                push(`${formURL}&success=1`, undefined, {shallow: true});
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [asPath, post]);

    useEffect(() => {
        unstable_batchedUpdates(() => {
            !isCtgrAnimalFishes
            && !!category
            && fetchFilters();
            setShowExitPrompt(true);
        });
        return () => {
            setShowExitPrompt(false);
        };
    }, []);

    const classes = useStyles();
    return (
        <>
            <Hidden smDown>
                <StepsProgress
                    title={title}
                    handleBack={handleBack}
                    activeStep={isPreview ? 3 : 2}
                />
            </Hidden>
            <div className={classes.root}>
                <ParamsForm
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
                            {isFetch
                                ? <CircularProgress size={24} color='secondary'/>
                                : <Typography variant='subtitle1' component='p'>
                                    {t(post_id ? 'to_edit' : 'publish')}
                                </Typography>}
                        </CustomButton>
                    </div>
                )}
            </div>
        </>
    );
};