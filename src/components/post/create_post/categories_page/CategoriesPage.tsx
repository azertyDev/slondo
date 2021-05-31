import {FC, useEffect, useMemo, useState} from 'react';
import {Steps} from '../steps/Steps';
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {categorySearchHelper, categoriesByType} from '@src/helpers';
import {SubCategoryType} from '@root/interfaces/Categories';
import {Grid, InputBase, List, ListItem, Typography} from "@material-ui/core";
import {BackspaceIcon, Search_icon} from "@src/components/elements/icons";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {addParentsToCtgrs} from '@src/common_data/siteCategories';
import {IdNameType} from "@root/interfaces/Post";
import {useStyles} from "./useStyles";


type CategoryStateType = {
    subCategory: IdNameType
} & IdNameType;

export const CategoriesPage: FC = () => {
    const initCategory: CategoryStateType = {
        id: null,
        name: '',
        subCategory: {
            id: null,
            name: ''
        }
    };
    const {t} = useTranslation('post');

    const shallow = {shallow: true};
    const {locale, query, push} = useRouter();
    const [postTypeName, categoryName, subCategoryName] = query.slug as string[];

    const categories = useMemo(() => addParentsToCtgrs(categoriesByType(postTypeName as string)), [locale]);

    const [searchTxt, setSearchTxt] = useState('');
    const [category, setCategory] = useState(initCategory);
    const [subCtgrs, setSubCtgrs] = useState<SubCategoryType[]>([]);

    const handleCategory = (ctgr) => async () => {
        const url = `/create/type/${postTypeName}/${ctgr.name}`;
        await push(url, undefined, shallow);
        !!subCtgrs.length && setSubCtgrs([]);
        setSearchTxt('');
    };

    const handleSubCategory = (ctgr) => async () => {
        const {type, parents} = ctgr;
        const [mainCtgr, subCtgr] = parents;
        const url = `/create/${!type || subCtgr ? 'form' : 'type'}/${postTypeName}/${mainCtgr.name}`;

        if (subCtgr) {
            push(`${url}/${subCtgr.name}/${ctgr.name}`, undefined, shallow);
        } else {
            push(`${url}/${ctgr.name}`, undefined, shallow);
        }

        setSearchTxt('');
    };

    const setMatchedCtgrs = () => {
        const matchedCtgrs = searchTxt.length > 2 ? categorySearchHelper(searchTxt, categories, t) : [];
        setSubCtgrs(matchedCtgrs);
    };

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        category.id && setCategory(initCategory);
    };

    const setSubLvlCtgrs = () => {
        if (categoryName) {
            categories.forEach(({id, name, subCategory}) => {
                if (name === categoryName) {
                    if (subCategoryName) {
                        subCategory.forEach(({name, type}) => {
                            if (name === subCategoryName) {
                                type ? setSubCtgrs(type) : setSubCtgrs(subCategory);
                            }
                        });
                    } else {
                        setSubCtgrs(subCategory);
                    }
                    setCategory({...category, id, name});
                }
            });
        }
    };

    const handleBackSubCtgr = async () => {
        await push(`/create/type/${postTypeName}/${categoryName}`, undefined, shallow);
    };

    const handleBack = async () => {
        await push('/create/type/select', undefined, shallow);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        !!searchTxt && setMatchedCtgrs();
    }, [searchTxt]);

    useEffect(() => {
        setSubLvlCtgrs();
    }, [categoryName, subCategoryName, locale]);

    const classes = useStyles();
    return (
        <MainLayout>
            <div className={classes.root}>
                <Steps
                    activeStep={1}
                    handleBack={handleBack}
                    title={t(`common:${postTypeName}`)}
                />
                <Grid container>
                    <Grid item xs={3} className="categories-menu">
                        <List disablePadding>
                            {categories.map((ctgr, i) =>
                                <ListItem
                                    key={i}
                                    disableGutters
                                    onClick={handleCategory(ctgr)}
                                    className={category.id === ctgr.id ? 'selected-category' : ''}
                                >
                                    {ctgr.smallIcon}
                                    <Typography variant="subtitle1">
                                        {t(`categories:${ctgr.name}`)}
                                    </Typography>
                                </ListItem>)}
                        </List>
                    </Grid>
                    <Grid item xs={9} className="sub-categories-menu">
                        <div className="search-block">
                            <InputBase
                                fullWidth
                                spellCheck={false}
                                value={searchTxt}
                                onChange={handleSearch}
                                placeholder={t(`searchCategory`)}
                                startAdornment={<Search_icon/>}
                            />
                        </div>
                        {!!subCtgrs.length
                         ? <List disablePadding>
                             {subCtgrs[0].parents.length === 2 && subCategoryName && (
                                 <ListItem onClick={handleBackSubCtgr}>
                                     <CustomButton className="back-btn">
                                         <BackspaceIcon/>
                                         <Typography variant="subtitle1">
                                             {t(`categories:${subCategoryName}`)}
                                         </Typography>
                                     </CustomButton>
                                 </ListItem>
                             )}
                             {subCtgrs.map((ctgr, i) =>
                                 <ListItem key={i} onClick={handleSubCategory(ctgr)}>
                                     <div>
                                         <Typography variant="subtitle1">
                                             {t(`categories:${ctgr.name}`)}
                                         </Typography>
                                         {!!searchTxt && (
                                             <Typography
                                                 className="parent-category"
                                                 variant="subtitle2"
                                             >
                                                 {t(`categories:${ctgr.parents[0].name}`)}
                                                 {ctgr.parents[1] && ` - ${t(`categories:${ctgr.parents[1].name}`)}`}
                                             </Typography>
                                         )}
                                     </div>
                                 </ListItem>
                             )}
                         </List>
                         : <div className="sub-category-bg">
                             <Typography variant="h2">
                                 {t('selectCategory')}
                             </Typography>
                         </div>}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};