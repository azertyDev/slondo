import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {i18n} from "@root/i18n";
import {userAPI} from '@src/api/api';
import {CreateAncmntCategory} from "./CreateAncmntCategory";
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {
    CreateAncmntState,
    AncmntStateTypes,
    AncmntType,
} from "@root/interfaces/Announcement";
import {AncmntFormContainer} from "./ancmnt_form/AncmntFormContainer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {AncmntTypesPage} from "@src/components/announcement/ancmnt_types_page/AncmntTypesPage";
import {WithT} from "i18next";
import {categoryDataNormalization, categorySearchHelper} from "@src/helpers";
import {AncmntHeader} from './ancmnt_header/AncmntHeader';
import {SuccessAncmnt} from "@src/components/announcement/create_ancmnt/ancmnt_form/success_ancmnt/SuccessAncmnt";


const steps = ['Тип объявления', 'Категория', 'Заполнение', 'Проверка'];

const initAncmntTypes = {
    isFetch: false,
    types: [
        {
            id: 1,
            name: "Обычный",
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
                    expiration_at: 720
                }
            ],
            image: {
                url: '/img/adv-background.png'
            }
        },
        {
            id: 2,
            name: "Аукцион",
            currency: [
                {
                    id: 3,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 1,
                    expiration_at: 2
                },
                {
                    id: 2,
                    expiration_at: 720
                }
            ],
            image: {
                url: '/img/lot-background.png'
            }
        },
        {
            id: 3,
            name: "Продвинутый аукцион",
            currency: [
                {
                    id: 4,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 4,
                    expiration_at: 2
                },
                {
                    id: 5,
                    expiration_at: 720
                }
            ],
            image: {
                url: '/img/advanced-lot-background.png'
            }
        }
    ]
};

export const CreateAncmntContainer: FC<WithT> = ({t}) => {
    const lang = i18n.language;

    const initAncmntType = {
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

    const initCreateAncmntState: CreateAncmntState = {
        isFetch: false,
        error: null,
        category: {
            id: null,
            name: '',
            images: {
                id: null,
                url: {
                    default: ''
                }
            },
            icons: {
                id: null,
                url: {
                    default: ''
                }
            },
            childs: [],
            has_auction: null,
        },
        subCategory: {
            id: null,
            name: '',
            data: {},
            parent: {
                id: null,
                name: ''
            }
        }
    };

    const categoriesList = useSelector(({categories}: RootState) => categoryDataNormalization(categories.list));
    const dispatch = useDispatch();

    const [ancmntTypes, setAncmntTypes] = useState<AncmntStateTypes>(initAncmntTypes);

    const [ancmntType, setAncmntType] = useState<AncmntType>(initAncmntType);

    const [createAncmnt, setCreateAncmnt] = useState<CreateAncmntState>(initCreateAncmntState);
    const {subCategory} = createAncmnt;

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
    //             ancmntTypes,
    //             setAncmntTypes,
    //             {types},
    //         );
    //     } catch (e) {
    //         dispatch(setErrorMsgAction(e.message));
    //         setAncmntTypes({...ancmntTypes, isFetch: false});
    //     }
    // };

    const handleAncmntType = (selectedAncmntType) => () => {
        handleNextStep();
        setAncmntType(selectedAncmntType);
    };

    const handleSearch = ({target}) => {
        setSearchTxt(target.value);
    };

    const setFoundCategoriesChilds = () => {
        const childs = !!searchTxt
            ? categorySearchHelper(searchTxt, categoriesList)
            : [];

        setCreateAncmnt({
            ...createAncmnt,
            category: {
                ...initCreateAncmntState.category,
                childs
            }
        });
    };

    const handleCategory = (category) => async () => {
        try {
            if (category.id === 11 || category.id === 12) {
                setCreateAncmnt({
                    ...createAncmnt,
                    subCategory: {
                        ...subCategory,
                        parent: {
                            id: category.id,
                            name: category.name
                        }
                    }
                });
                handleNextStep();
            } else {
                setCreateAncmnt({
                    ...createAncmnt,
                    category
                });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setCreateAncmnt({...createAncmnt, isFetch: false});
        }
    };

    const handleSubCategory = (parent, child_id, name) => async () => {
        try {
            setCreateAncmnt({
                ...createAncmnt,
                isFetch: true,
            });

            const data = await userAPI.getAdDataForCreateAncmnt(parent.id, child_id, lang);

            setCreateAncmnt({
                ...createAncmnt,
                isFetch: false,
                subCategory: {
                    id: child_id,
                    name,
                    data,
                    parent
                }
            });
            handleNextStep();
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setCreateAncmnt({...createAncmnt, isFetch: false});
        }
    };

    const handleResetCreateData = () => {
        setSearchTxt('');
        setCreateAncmnt(initCreateAncmntState);
    };

    const handleResetAncmntType = () => {
        handleResetSteps();
        handleResetCreateData();
        setAncmntType(initAncmntType);
    };

    const handleBackBtn = () => {
        handlePrevStep();
        switch (activeStep) {
            case 1:
                handleResetAncmntType();
                break;
            case 2:
                handleResetCreateData();
        }
    };

    const setCreateAncmntByLang = async () => {
        const [ctgrByLang] = categoriesList.filter(ctgr => ctgr.id === subCategory.parent.id);
        ctgrByLang && setCreateAncmnt({
            ...createAncmnt,
            category: ctgrByLang,
        });
        if (subCategory.id !== null) {
            const [subCtgrByLang] = ctgrByLang.childs.filter(subCtgr => subCtgr.id === subCategory.id);

            try {
                setCreateAncmnt({
                    ...createAncmnt,
                    isFetch: true
                });

                const data = await userAPI.getAdDataForCreateAncmnt(subCategory.parent.id, subCategory.id, lang);

                setCreateAncmnt({
                    ...createAncmnt,
                    isFetch: false,
                    subCategory: {
                        ...subCtgrByLang,
                        data
                    }
                });
            } catch (e) {
                dispatch(setErrorMsgAction(e.message));
                setCreateAncmnt({...createAncmnt, isFetch: false});
            }
        }
    };

    const renderPageByActiveStep = () => {
        switch (activeStep) {
            case 0:
                return <AncmntTypesPage
                    ancmntTypes={ancmntTypes}
                    handleAncmntType={handleAncmntType}
                />
            case 1:
                return <CreateAncmntCategory
                    ancmntType={ancmntType}
                    createAncmnt={createAncmnt}
                    categoriesList={categoriesList}
                    searchTxt={searchTxt}
                    handleSearch={handleSearch}
                    handleCategory={handleCategory}
                    handleSubCategory={handleSubCategory}
                />
            case 4:
                return <SuccessAncmnt
                    handleCreateNewAncmnt={handleResetAncmntType}
                />
            default:
                return <AncmntFormContainer
                    t={t}
                    activeStep={activeStep}
                    ancmntType={ancmntType}
                    createAncmnt={createAncmnt}
                    handleNextStep={handleNextStep}
                />
        }
    };

    // useEffect(() => {
    //    setAncmntsTypes();
    // }, []);

    useEffect(() => {
        setCreateAncmntByLang();
    }, [categoriesList[0].name]);

    useEffect(() => {
        setFoundCategoriesChilds();
    }, [searchTxt]);

    // console.log(createAncmnt)
    // console.log(categoriesList)
    return (
        <MainLayout>
            {activeStep !== 0 && activeStep !== 4
            && <AncmntHeader
                steps={steps}
                activeStep={activeStep}
                handleBackBtn={handleBackBtn}
            />}
            {renderPageByActiveStep()}
        </MainLayout>
    )
}