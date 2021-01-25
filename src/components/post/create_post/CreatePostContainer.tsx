import React, {FC, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {userAPI} from '@src/api/api';
import {CreatePost} from "./CreatePost";
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {WithT} from "i18next";
import {i18n} from '@root/i18n';
import {
    CreatePostState,
    PostType
} from "@root/interfaces/Post";
import {PostFormContainer, SecLvlCtgrType} from "./post_form/PostFormContainer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {PostTypesPage} from "@src/components/post/post_types_page/PostTypesPage";
import {categoryDataNormalization, categorySearchHelper, formatDataForCrtPost} from "@src/helpers";
import {PostHeader} from './post_header/PostHeader';
import {SuccessPost} from "@src/components/post/create_post/post_form/success_post/SuccessPost";
import {SubLvlCtgrsType} from "@root/interfaces/Categories";


const steps = ['Тип объявления', 'Категория', 'Заполнение', 'Проверка'];

const initPostTypeStates: { isFetch: boolean, types: PostType[] } = {
    isFetch: false,
    types: [
        {
            id: 1,
            name: "post",
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
            }
        },
        {
            id: 2,
            name: "auc",
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
            }
        },
        {
            id: 3,
            name: "exauc",
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
            }
        }
    ]
};

export type createPostContainerType = CreatePostState & { dataForCrtPost: any };

export const CreatePostContainer: FC<WithT> = ({t}) => {
    const lang = i18n.language;

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
        }
    };

    const initCreatePostState: createPostContainerType = {
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
        },
        dataForCrtPost: {
            type: []
        }
    };

    const categoriesList = useSelector(({categories}: RootState) => {
        return categoryDataNormalization(categories.list);
    });

    const dispatch = useDispatch();

    const [postType, setPostType] = useState<PostType>(initPostTypeState);

    const [postTypes, setPostTypes] = useState<{ isFetch: boolean, types: PostType[] }>(initPostTypeStates);

    const [createPost, setCreatePost] = useState<createPostContainerType>(initCreatePostState);
    const {category, dataForCrtPost} = createPost;
    const {type: [typeData]} = dataForCrtPost;

    const secLvlCtgr: SecLvlCtgrType = {
        id: dataForCrtPost.id ?? null,
        name: dataForCrtPost.name ?? null,
        type: {
            id: !!typeData ? typeData.id : null,
            name: !!typeData ? typeData.name : null
        }
    };

    const [subLvlCtgrs, setSubLvlCtgrs] = useState<SubLvlCtgrsType[]>([]);

    const [activeStep, setActiveStep] = useState(0);

    const [searchTxt, setSearchTxt] = useState('');

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
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

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        setMatchedCtgrs(value);
        if (!!category.id) {
            setSubLvlCtgrs([]);
            setCreatePost(initCreatePostState);
        }
    };

    const handleCategory = ctgr => async () => {
        if ((ctgr.model && ctgr.model.length) || (ctgr.type && ctgr.type.length)) {
            const list = ctgr.model ?? ctgr.type;

            const mainCtgr = ctgr.model
                ? ctgr
                : categoriesList.filter(ctr => (!!ctr.id && ctr.id === ctgr.parents[0].id))[0];

            setSubLvlCtgrs(list);
            setSearchTxt('');
            setCreatePost({...createPost, category: mainCtgr});
        } else {
            try {
                if (ctgr.parents) {
                    const sLvlCtr = ctgr.parents[1];
                    const data = {
                        fstLvlCtgr: category.id,
                        secLvlCtgr: sLvlCtr ? sLvlCtr.id : ctgr.id,
                        trdLvlCtgr: sLvlCtr ? ctgr.id : null,
                        lang
                    };
                    setCreatePost({...createPost, isFetch: true});

                    const fetchedDataForCrtPost = await userAPI.getDataForCreatePost(data);

                    setCreatePost({
                        ...createPost,
                        isFetch: false,
                        dataForCrtPost: {
                            ...dataForCrtPost,
                            ...fetchedDataForCrtPost
                        }
                    });
                } else {
                    const {dataForCrtPost} = initCreatePostState;

                    setCreatePost({
                        ...createPost,
                        category: ctgr,
                        dataForCrtPost
                    });
                }
                handleNextStep();
            } catch (e) {
                dispatch(setErrorMsgAction(e.message));
                setCreatePost({...createPost, isFetch: false});
            }
        }
    };

    const handleBackCtgr = () => {
        setSubLvlCtgrs(category.model);
    };

    const handleResetCreateData = () => {
        setSearchTxt('');
        setSubLvlCtgrs([]);
        setCreatePost(initCreatePostState);
    };

    const handleResetPostType = () => {
        handleResetSteps();
        handleResetCreateData();
        setPostType(initPostTypeState);
    };

    const handleBackBtn = () => {
        switch (activeStep) {
            case 1:
                handleResetPostType();
                break;
            case 2:
                handleResetCreateData();
        }
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
            setCreatePost({...createPost, category: newLangCtgr});
        } else if (!!searchTxt) handleResetCreateData();
    };

    // useEffect(() => {
    //    setAncmntsTypes();
    // }, []);

    // useEffect(() => {
    //     setSubLvlCtgrsByLang();
    // }, [categoriesList[0].name]);
    // console.log(activeStep)
    return (
        <MainLayout>
            {activeStep !== 0 && activeStep !== 4
            && <PostHeader
                steps={steps}
                activeStep={activeStep}
                handleBackBtn={handleBackBtn}
            />}
            <>
                {activeStep === 0
                && <PostTypesPage
                    postTypes={postTypes.types}
                    handlePostType={handlePostType}
                />}
                {activeStep === 1
                && <CreatePost
                    postType={postType}
                    createPost={createPost}
                    categoriesList={categoriesList}
                    subLvlCtgrs={subLvlCtgrs}
                    searchTxt={searchTxt}
                    handleBackCtgr={handleBackCtgr}
                    handleSearch={handleSearch}
                    handleCategory={handleCategory}
                />}
                {(activeStep === 2 || activeStep === 3)
                && <PostFormContainer
                    t={t}
                    activeStep={activeStep}
                    postType={postType}
                    category={category}
                    secLvlCtgr={secLvlCtgr}
                    handleNextStep={handleNextStep}
                    dataForCrtPost={formatDataForCrtPost(dataForCrtPost)}
                />}
                {activeStep === 4
                && <SuccessPost handleCreateNewPost={handleResetPostType}/>}
            </>
        </MainLayout>
    )
}