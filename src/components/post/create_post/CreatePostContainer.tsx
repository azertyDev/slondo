import React, { FC, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAPI } from '@src/api/api'
import { CreatePost } from './CreatePost'
import { MainLayout } from '@src/components/MainLayout'
import { WithT } from 'i18next'
import { i18n } from '@root/i18n'
import { CreatePostState, IdNameType, PostType } from '@root/interfaces/Post'
import { PostFormContainer } from './post_form/PostFormContainer'
import { setErrorMsgAction } from '@root/src/redux/slices/errorSlice'
import { PostTypesPage } from './post_types_page/PostTypesPage'
import { dataForCrtPostNormalize, categorySearchHelper, categoriesTrans } from '@src/helpers'
import { PostHeader } from './post_header/PostHeader'
import { SuccessPost } from '@src/components/post/create_post/post_form/success_post/SuccessPost'
import { SubLvlCtgrsType } from '@root/interfaces/Categories'
import { categoriesList } from '@src/common_data/categoriesList'


export type DataForCrtPostType = {
    isFetch: boolean;
    data: any;
};

export const CreatePostContainer: FC<WithT> = ({ t }) => {
    const lang = i18n.language

    const steps = [
        t('categories:postType'),
        t('categories:category'),
        t('categories:fill'),
        t('categories:check'),
    ]

    const initPostTypeState = {
        id: null,
        name: '',
        currency: [
            {
                id: null,
                name: '',
            },
        ],
        expired: [
            {
                id: null,
                expiration_at: null,
            },
        ],
        image: {
            url: '',
        },
        guide: '',
        subtitle: '',
    }

    const initCreatePostState: CreatePostState = {
        isFetch: false,
        error: null,
        category: {
            id: null,
            name: '',
            icon: {
                url: '',
            },
            smallIcon: {
                url: '',
            },
            model: [],
            has_auction: null,
        },
    }

    const initDataForCrtPost: DataForCrtPostType = {
        isFetch: false,
        data: {},
    }

    const initSecCtgr = {
        id: null,
        name: null,
        type: {
            id: null,
            name: null,
        },
    }
    const dispatch = useDispatch()

    const categories = useMemo(() => categoriesTrans(categoriesList, t), [lang])

    const [postType, setPostType] = useState<PostType>(initPostTypeState)

    const [createPost, setCreatePost] = useState<CreatePostState>(initCreatePostState)
    const { category } = createPost

    const [dataForCrtPost, setDataForCrtPost] = useState<DataForCrtPostType>(initDataForCrtPost)

    const [secCtgr, setSecCtgr] = useState<IdNameType & { type: IdNameType }>(initSecCtgr)

    const [subLvlCtgrs, setSubLvlCtgrs] = useState<SubLvlCtgrsType[]>([])
    const isThirdLvlCtgr = !!subLvlCtgrs.length && subLvlCtgrs.every(subCtgr => subCtgr.parents.length === 2)

    const [activeStep, setActiveStep] = useState(0)
    const isPostTypeStep = activeStep === 0
    const isCategoriesStep = activeStep === 1
    const isFormStep = activeStep === 2 || activeStep === 3
    const isSuccessStep = activeStep === 4

    const [searchTxt, setSearchTxt] = useState('')

    const setMatchedCtgrs = (txt) => {
        const matchedCtgrs = txt.length > 2 ? categorySearchHelper(txt, categories) : []
        setSubLvlCtgrs(matchedCtgrs)
    }

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1)
    }

    const handlePrevStep = () => {
        setActiveStep((prevStep) => prevStep - 1)
    }

    const handleResetSteps = () => {
        setActiveStep(0)
    }

    const handlePostType = (selectedAncmntType) => () => {
        handleNextStep()
        setPostType(selectedAncmntType)
    }

    const handleCategory = (ctgr) => async () => {
        if ((ctgr.model && ctgr.model.length) || (ctgr.type && ctgr.type.length)) {
            const list = ctgr.model ?? ctgr.type

            const mainCtgr = ctgr.model
                ? ctgr
                : categories.filter(ctr => !!ctr.id && ctr.id === ctgr.parents[0].id)[0]

            setSubLvlCtgrs(list)
            setCreatePost({ ...createPost, category: mainCtgr })
        } else {
            try {
                handleNextStep()
                if (ctgr.parents) {
                    const fstCtgr = ctgr.parents[0]
                    const secCtgr = ctgr.parents[1]
                    const secCtgrId = secCtgr ? secCtgr.id : ctgr.id
                    const trdCtgrId = secCtgr ? ctgr.id : ''

                    setDataForCrtPost({ ...dataForCrtPost, isFetch: true })

                    const fetchedData = await userAPI.getDataForCreatePost(
                        fstCtgr.id,
                        secCtgrId,
                        trdCtgrId,
                        lang,
                    )

                    setCreatePost({
                        ...createPost,
                        category: {
                            ...category,
                            ...fstCtgr,
                        },
                    })

                    setSecCtgr({
                        id: secCtgrId,
                        name: secCtgr ? secCtgr.name : ctgr.name,
                        type: {
                            id: trdCtgrId,
                            name: secCtgr ? ctgr.name : '',
                        },
                    })

                    setDataForCrtPost({
                        isFetch: false,
                        data: dataForCrtPostNormalize(fetchedData),
                    })
                } else {
                    setDataForCrtPost(initDataForCrtPost)
                    setCreatePost({ ...createPost, category: ctgr })
                    !!secCtgr.id && setSecCtgr(initSecCtgr)
                    !!setSubLvlCtgrs.length && setSubLvlCtgrs([])
                }
            } catch (e) {
                dispatch(setErrorMsgAction(e.message))
                setDataForCrtPost({ ...dataForCrtPost, isFetch: false })
            }
        }
    }

    const handleSearch = ({ target: { value } }) => {
        setSearchTxt(value)
        setMatchedCtgrs(value)
        if (!!category.id) {
            setSubLvlCtgrs([])
            setCreatePost(initCreatePostState)
        }
    }

    const handleBackCtgr = () => {
        setSubLvlCtgrs(category.model)
    }

    const handleResetCreateData = () => {
        !!category.id && setCreatePost(initCreatePostState)
        !!secCtgr.id && setSecCtgr(initSecCtgr)
        !!setSubLvlCtgrs.length && setSubLvlCtgrs([])
    }

    const handleResetPostType = () => {
        handleResetSteps()
        handleResetCreateData()
        setPostType(initPostTypeState)
    }

    const handleBackBtn = () => {
        handlePrevStep()
        isCategoriesStep && handleResetPostType()
    }

    const setSubLvlCtgrByLang = () => {
        if (!!searchTxt) {
            setMatchedCtgrs(searchTxt)
        } else if (subLvlCtgrs.length) {
            categories.forEach(ctgr => {
                if (ctgr.id === category.id) {
                    if (isThirdLvlCtgr) {
                        ctgr.model.forEach(thCtgr => {
                            if (subLvlCtgrs.some(ctgr => ctgr.id === thCtgr.id)) {
                                setSubLvlCtgrs(thCtgr.type)
                            }
                        })
                    } else {
                        setSubLvlCtgrs(ctgr.model)
                    }
                    createPost.category = ctgr
                    setCreatePost({ ...createPost })
                }
            })
        }
    }

    useEffect(() => {
        setSubLvlCtgrByLang()
    }, [lang])

    return (
        <MainLayout>
            <>
                {!isSuccessStep
                && <PostHeader
                    t={t}
                    steps={steps}
                    postType={postType}
                    activeStep={activeStep}
                    handleBackBtn={handleBackBtn}
                    isSuccessStep={isSuccessStep}
                    isPostTypeStep={isPostTypeStep}
                />}
                <>
                    {isPostTypeStep
                    && <PostTypesPage
                        t={t}
                        handlePostType={handlePostType}
                    />}
                    {isCategoriesStep
                    && <CreatePost
                        t={t}
                        searchTxt={searchTxt}
                        handleSearch={handleSearch}
                        postType={postType}
                        createPost={createPost}
                        isFetch={dataForCrtPost.isFetch}
                        isThirdLvlCtgr={isThirdLvlCtgr}
                        categoriesList={categories}
                        subLvlCtgrs={subLvlCtgrs}
                        handleBackCtgr={handleBackCtgr}
                        handleCategory={handleCategory}
                    />}
                    {isFormStep
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
                {isSuccessStep && <SuccessPost handleCreateNewPost={handleResetPostType} />}
            </>
        </MainLayout>
    )
}
