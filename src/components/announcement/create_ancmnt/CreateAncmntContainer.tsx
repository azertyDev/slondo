import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {i18n} from "@root/i18n";
import {userAPI} from '@src/api/api';
import {CreateAncmnt} from "./CreateAncmnt";
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {WithT} from "i18next";
import {
    CreateAncmntState,
    AncmntType
} from "@root/interfaces/Announcement";
import {AncmntFormContainer} from "./ancmnt_form/AncmntFormContainer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {AncmntTypesPage} from "@src/components/announcement/ancmnt_types_page/AncmntTypesPage";
import {categoryDataNormalization, categorySearchHelper} from "@src/helpers";
import {AncmntHeader} from './ancmnt_header/AncmntHeader';
import {SuccessAncmnt} from "@src/components/announcement/create_ancmnt/ancmnt_form/success_ancmnt/SuccessAncmnt";
import {SubLvlCtgrsType} from "@root/interfaces/Categories";


const steps = ['Тип объявления', 'Категория', 'Заполнение', 'Проверка'];

const initAncmntTypeStates = {
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

    const initAncmntTypeState = {
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

    const initCreateAncmntState = {
        isFetch: false,
        error: null,
        category: {
            id: null,
            name: '',
            image: {
                url: {
                    default: ''
                }
            },
            icon: {
                id: null,
                url: ''
            },
            model: [],
            has_auction: null,
        }
    };

    const categoriesList = useSelector(({categories}: RootState) => {
        return categoryDataNormalization(categories.list);
        // return categories.list;
    });

    const dispatch = useDispatch();

    const [ancmntType, setAncmntType] = useState<AncmntType>(initAncmntTypeState);

    const [ancmntTypes, setAncmntTypes] = useState<{ isFetch: boolean, types: AncmntType[] }>(initAncmntTypeStates);

    const [createAncmnt, setCreateAncmnt] = useState<CreateAncmntState>(initCreateAncmntState);

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

    // const setFoundCategoriesChilds = () => {
    //     const model = !!searchTxt
    //         ? categorySearchHelper(searchTxt, categoriesList)
    //         : [];
    //
    //     setCreateAncmnt({
    //         ...createAncmnt,
    //         category: {
    //             ...initCreateAncmntState.category,
    //             model
    //         }
    //     });
    // };

    const handleCategory = (category) => () => {
        try {
            let list = [];
            if (category.type) {
                list = category.type;
            } else if (category.model) {
                list = category.model;
                setCreateAncmnt(category)
            }
            setSubLvlCtgrs(list);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setCreateAncmnt({...createAncmnt, isFetch: false});
        }
    };

    const handleBackCtgr = () => {
        setSubLvlCtgrs(createAncmnt.category.model);
    };

    const handleSubCategory = (parent, child_id, name) => async () => {
        try {
            setCreateAncmnt({
                ...createAncmnt,
                isFetch: true,
            });

            const data = await userAPI.getDataForCreateAncmnt(parent.id, child_id, lang);

            setCreateAncmnt({
                ...createAncmnt,
                isFetch: false,
                // subCategory: {
                //     id: child_id,
                //     name,
                //     data,
                //     parent
                // }
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
        setAncmntType(initAncmntTypeState);
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
        // const [ctgrByLang] = categoriesList.filter(ctgr => ctgr.id === subCategory.parent.id);
        // ctgrByLang && setCreateAncmnt({
        //     ...createAncmnt,
        //     category: ctgrByLang,
        // });
        // if (subCategory.id !== null) {
        //     const [subCtgrByLang] = ctgrByLang.model.filter(subCtgr => subCtgr.id === subCategory.id);
        //
        //     try {
        //         setCreateAncmnt({
        //             ...createAncmnt,
        //             isFetch: true
        //         });
        //
        //         const data = await userAPI.getAdDataForCreateAncmnt(subCategory.parent.id, subCategory.id, lang);
        //
        //         setCreateAncmnt({
        //             ...createAncmnt,
        //             isFetch: false,
        //             subCategory: {
        //                 ...subCtgrByLang,
        //                 data
        //             }
        //         });
        //     } catch (e) {
        //         dispatch(setErrorMsgAction(e.message));
        //         setCreateAncmnt({...createAncmnt, isFetch: false});
        //     }
        // }
    };

    const renderPageByActiveStep = () => {
        switch (activeStep) {
            case 0:
                return <AncmntTypesPage
                    ancmntTypes={ancmntTypes.types}
                    handleAncmntType={handleAncmntType}
                />
            case 1:
                return <CreateAncmnt
                    ancmntType={ancmntType}
                    createAncmnt={createAncmnt}
                    categoriesList={categoriesList}
                    subLvlCtgrs={subLvlCtgrs}
                    searchTxt={searchTxt}
                    handleBackCtgr={handleBackCtgr}
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

    // useEffect(() => {
    //     setCreateAncmntByLang();
    // }, [categoriesList[0].name]);

    // useEffect(() => {
    //     setFoundCategoriesChilds();
    // }, [searchTxt]);

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