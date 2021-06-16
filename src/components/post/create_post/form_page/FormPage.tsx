import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {userAPI} from '@src/api/api';
import {Steps} from '../steps/Steps';
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {AppearanceForm} from './appearance_form/AppearanceForm';
import {CommonForm} from './common_form/CommonForm';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {
    normalizeFiltersByCategory,
    getCategoriesByParams,
    CategoriesParamsType,
    manufacturersDataNormalize
} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SuccessPage} from '@src/components/post/create_post/form_page/success_page/SuccessPage';
import {ParamsFormContainer} from './params_form/ParamsFormContainer';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';


export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

export const FormPage: FC = () => {
    const dispatch = useDispatch();

    const {t} = useTranslation('post');
    const {phone} = useSelector((store: RootState) => store.user.info);

    const {asPath, query, push} = useRouter();
    const [postTypeName, categoryName, subcategoryName, typeName] = query.slug as string[];

    const {category, subcategory, type} = getCategoriesByParams(
        {
            categoryName,
            subcategoryName,
            typeName
        } as CategoriesParamsType
    );

    const isCtgrAnimalFishes = category.name === 'animal' && subcategory.name === 'fishes';

    const title = `${t(`categories:${category.name}`)}
        ${subcategory ? ` - ${t(`categories:${subcategory.name}`)}` : ''}
        ${type ? ` - ${t(`categories:${type.name}`)}` : ''}`;

    const postType = postTypes.find(type => type.name === postTypeName);

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
    const [isPreview, setIsPreview] = useState(false);
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
            const subCtgrId = subcategory?.id ?? '';
            const typeId = type?.id ?? '';

            setIsFetch(true);

            let fetchedData = await userAPI.getFiltersByCtgr(category.id, subCtgrId, typeId);

            if (categoryName === 'car') {
                if (subcategoryName === 'madeInUzb') {
                    fetchedData = {
                        ...fetchedData.default_param,
                        manufacturer: manufacturersDataNormalize(fetchedData)
                    };
                } else {
                    fetchedData = {...fetchedData.default_param};
                }
            }

            setIsFetch(false);
            setFilters(normalizeFiltersByCategory(fetchedData, type));
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleBack = () => {
        isPreview
        ? setIsPreview(false)
        : push(
            `/create/type/${postTypeName}/${categoryName}/${subcategoryName}`,
            undefined,
            {shallow: true}
        );
    };

    const handleSubmit = (values) => {
        setPost({...post, ...values});
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
            photos.forEach(photo => form.append('files[]', photo.file));

            await userAPI.createPost(form);

            setIsSuccess(true);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
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
                             colors={colors || color}
                             isPreview={isPreview}
                             currentFormIndex={currentFormIndex}
                             handleSubmit={handleSubmit}
                             handleFormOpen={handleFormOpen}
                             handleNextFormOpen={handleNextFormOpen}
                         />
                     </div>
                     <div>
                         <CommonForm
                             ownerPhone={phone}
                             asPath={asPath}
                             postType={postType}
                             isPreview={isPreview}
                             setIsPreview={setIsPreview}
                             categoryName={categoryName}
                             handleSubmit={handleSubmit}
                             currentFormIndex={currentFormIndex}
                         />
                     </div>
                     {isPreview && (
                         <div className='publish-button-wrapper'>
                             <CustomButton disabled={isFetch} onClick={toPublish}>
                                 <Typography variant='subtitle1'>
                                     {t('publish')}
                                 </Typography>
                             </CustomButton>
                         </div>
                     )}
                 </div>
             </>}
        </MainLayout>
    );
};