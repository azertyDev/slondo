import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {userAPI} from '@src/api/api';
import {CreatePost} from "./CreatePost";
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {WithT} from "i18next";
import {i18n} from '@root/i18n';
import {CreatePostState, IdNameType, PostType} from "@root/interfaces/Post";
import {PostFormContainer} from "./post_form/PostFormContainer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {PostTypesPage} from "@src/components/post/create_post/post_types_page/PostTypesPage";
import {
    dataForCrtPostNormalize,
    categoriesListNormalize,
    categorySearchHelper,
} from "@src/helpers";
import {PostHeader} from './post_header/PostHeader';
import {SuccessPost} from "@src/components/post/create_post/post_form/success_post/SuccessPost";
import {SubLvlCtgrsType} from "@root/interfaces/Categories";


const steps = ['Тип объявления', 'Категория', 'Заполнение', 'Проверка'];

export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
}

export const CreatePostContainer: FC<WithT> = ({t}) => {
    const lang = i18n.language;

    const initPostTypeStates: PostType[] = [
        {
            id: 1,
            name: "post",
            subtitle: 'Размещайте товары или услуги совершенно бесплатно',
            currency: [
                {
                    id: 1,
                    name: "уе"
                },
                {
                    id: 2,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 3,
                    expiration_at: '720'
                }
            ],
            image: {
                url: '/img/adv-background.png'
            },
            guide: 'Как создать объявление?'
        },
        {
            id: 2,
            name: "auc",
            subtitle: 'Торгуйте что бы получить более выгодную цену для Вас',
            currency: [
                {
                    id: 3,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 1,
                    expiration_at: '2'
                },
                {
                    id: 2,
                    expiration_at: '720'
                }
            ],
            image: {
                url: '/img/lot-background.png'
            },
            guide: 'Как создать аукцион?'
        },
        {
            id: 3,
            name: "exauc",
            subtitle: 'Используй максимальный функционал',
            currency: [
                {
                    id: 4,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 4,
                    expiration_at: '2'
                },
                {
                    id: 5,
                    expiration_at: '720'
                }
            ],
            image: {
                url: '/img/advanced-lot-background.png'
            },
            guide: 'Как создать продвинутый аукцион?'
        }
    ];

    const initPostTypeState = {
        id: null,
        name: '',
        currency: [{
            id: null,
            name: ''
        }],
        expired: [{
            id: null,
            expiration_at: null
        }],
        image: {
            url: ''
        },
        guide: '',
        subtitle: ''
    };

    const initCreatePostState: CreatePostState = {
        isFetch: false,
        error: null,
        category: {
            id: null,
            name: '',
            mark: '',
            image: {
                url: ''
            },
            icon: {
                url: ''
            },
            model: [],
            has_auction: null,
        }
    };

    const initDataForCrtPost: DataForCrtPostType = {
        isFetch: false,
        data: {}
    };

    const initSecCtgr = {
        id: null,
        name: null,
        type: {
            id: null,
            name: null
        }
    };

    const categoriesList = useSelector(({categories}: RootState) =>
        categoriesListNormalize(categories.list));

    const dispatch = useDispatch();

    const [postType, setPostType] = useState<PostType>(initPostTypeState);

    const [postTypes, setPostTypes] = useState<PostType[]>(initPostTypeStates);

    const [createPost, setCreatePost] = useState<CreatePostState>(initCreatePostState);
    const {category} = createPost;
    const [dataForCrtPost, setDataForCrtPost] = useState<DataForCrtPostType>(initDataForCrtPost);

    const [secCtgr, setSecCtgr] = useState<IdNameType & { type: IdNameType }>(initSecCtgr);

    const [subLvlCtgrs, setSubLvlCtgrs] = useState<SubLvlCtgrsType[]>([]);
    const [activeStep, setActiveStep] = useState(0);

    const handleNextStep = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleResetSteps = () => {
        setActiveStep(0);
    };

    // const setAncmntsTypes = async () => {
    //     try {
    //         const types = userAPI.getAncmntsTypes(lang);
    //         await setFetchedData(
    //             postTypes,
    //             setPostTypes,
    //             {types},
    //         );
    //     } catch (e) {
    //         dispatch(setErrorMsgAction(e.message));
    //         setPostTypes({...postTypes, isFetch: false});
    //     }
    // };

    const handlePostType = (selectedAncmntType) => () => {
        handleNextStep();
        setPostType(selectedAncmntType);
    };

    const setMatchedCtgrs = (txt) => {
        const matchedCtgrs = txt.length > 2
            ? categorySearchHelper(txt, categoriesList)
            : [];
        setSubLvlCtgrs(matchedCtgrs);
    };

    const handleCategory = ctgr => async () => {
        if ((ctgr.model && ctgr.model.length) || (ctgr.type && ctgr.type.length)) {
            const list = ctgr.model ?? ctgr.type;

            const mainCtgr = ctgr.model
                ? ctgr
                : categoriesList.filter(ctr => (!!ctr.id && ctr.id === ctgr.parents[0].id))[0];

            setSubLvlCtgrs(list);
            setCreatePost({...createPost, category: mainCtgr});
        } else {
            try {
                if (ctgr.parents) {
                    const fstCtgr = ctgr.parents[0];
                    const secCtgr = ctgr.parents[1];
                    const secCtgrId = secCtgr ? secCtgr.id : ctgr.id;
                    const trdCtgrId = secCtgr ? ctgr.id : '';

                    setDataForCrtPost({...dataForCrtPost, isFetch: true});

                    const fetchedData = await userAPI.getDataForCreatePost(
                        fstCtgr.id,
                        secCtgrId,
                        trdCtgrId,
                        lang
                    );

                    setCreatePost({
                        ...createPost,
                        category: {
                            ...category,
                            ...fstCtgr
                        }
                    });

                    setSecCtgr({
                        id: secCtgrId,
                        name: secCtgr ? secCtgr.name : ctgr.name,
                        type: {
                            id: trdCtgrId,
                            name: secCtgr ? ctgr.name : ''
                        }
                    });

                    setDataForCrtPost({
                        isFetch: false,
                        data: dataForCrtPostNormalize(fetchedData)
                    });
                } else {
                    setDataForCrtPost(initDataForCrtPost);
                    setCreatePost({...createPost, category: ctgr});
                    !!secCtgr.id && setSecCtgr(initSecCtgr);
                    !!setSubLvlCtgrs.length && setSubLvlCtgrs([]);
                }
                handleNextStep();
            } catch (e) {
                dispatch(setErrorMsgAction(e.message));
                setDataForCrtPost({...dataForCrtPost, isFetch: false});
            }
        }
    };

    const handleBackCtgr = () => {
        setSubLvlCtgrs(category.model);
    };

    const handleResetCreateData = () => {
        !!category.id
        && setCreatePost(initCreatePostState);
        !!secCtgr.id
        && setSecCtgr(initSecCtgr);
        !!setSubLvlCtgrs.length && setSubLvlCtgrs([]);
    };

    const handleResetPostType = () => {
        handleResetSteps();
        handleResetCreateData();
        setPostType(initPostTypeState);
    };

    const handleBackBtn = () => {
        handlePrevStep();
    };

    const setSubLvlCtgrsByLang = () => {
        const [newLangCtgr] = categoriesList.filter(ctgr => (!!ctgr.id && ctgr.id === category.id));
        if (!!newLangCtgr) {
            const {parents} = subLvlCtgrs[0];
            if (parents[1]) {
                const [subCtgr] = newLangCtgr.model.filter(subCtgr => subCtgr.id === parents[1].id);
                setSubLvlCtgrs(subCtgr.type);
            } else if (parents[0]) {
                setSubLvlCtgrs(newLangCtgr.model);
            }
            createPost.category = newLangCtgr;
            setCreatePost({...createPost});
        }
        // else if (!!searchTxt) handleResetCreateData();
    };

    // useEffect(() => {
    //    setAncmntsTypes();
    // }, []);

    useEffect(() => {
        setSubLvlCtgrsByLang();
    }, [categoriesList[0].name]);

    return (
        <MainLayout>
            <>
                <PostHeader
                    steps={steps}
                    activeStep={activeStep}
                    handleBackBtn={handleBackBtn}
                />
                <>
                    {activeStep === 0
                    && <PostTypesPage
                        postTypes={postTypes}
                        handlePostType={handlePostType}
                        t={t}
                    />}
                    {activeStep === 1
                    && <CreatePost
                        postType={postType}
                        createPost={createPost}
                        isFetch={dataForCrtPost.isFetch}
                        setCreatePost={setCreatePost}
                        setSubLvlCtgrs={setSubLvlCtgrs}
                        categoriesList={categoriesList}
                        subLvlCtgrs={subLvlCtgrs}
                        setMatchedCtgrs={setMatchedCtgrs}
                        handleBackCtgr={handleBackCtgr}
                        handleCategory={handleCategory}
                        initCreatePostState={initCreatePostState}
                    />}
                    {(activeStep === 2 || activeStep === 3)
                    && <PostFormContainer
                        t={t}
                        activeStep={activeStep}
                        postType={postType}
                        category={category}
                        secCtgr={secCtgr}
                        handleNextStep={handleNextStep}
                        dataForCrtPost={dataForCrtPost}
                        setDataForCrtPost={setDataForCrtPost}
                    />}
                </>
                {activeStep === 4 && <SuccessPost handleCreateNewPost={handleResetPostType}/>}
            </>
        </MainLayout>
    )
}