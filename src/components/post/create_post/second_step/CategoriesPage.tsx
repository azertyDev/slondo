import {FC, useEffect, useState} from 'react';
import {StepsProgress} from '../steps_progress/StepsProgress';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {categorySearchHelper, categoriesByType} from '@src/helpers';
import {SubcategoryType} from '@root/interfaces/Categories';
import {Grid, Hidden, InputBase, List, ListItem, Typography} from '@material-ui/core';
import {BackspaceIcon, Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {IdNameType} from '@root/interfaces/Post';
import {useStyles} from './useStyles';


type CategoryStateType = {
    subcategory: IdNameType
} & IdNameType;

export const CategoriesPage: FC = () => {
    const initCategory: CategoryStateType = {
        id: null,
        name: '',
        subcategory: {
            id: null,
            name: ''
        }
    };
    const {t} = useTranslation('categories');

    const shallow = {shallow: true};
    const {locale, query, push} = useRouter();
    const [postTypeName, categoryName, subcategoryName] = query.slug as string[];

    const [searchTxt, setSearchTxt] = useState('');
    const [category, setCategory] = useState(initCategory);
    const [subctgrs, setSubctgrs] = useState<SubcategoryType[]>([]);

    const categories = categoriesByType(postTypeName);

    const handleCategory = (ctgr) => async () => {
        const url = `/create/type/${postTypeName}/${ctgr.name}`;
        await push(url, undefined, shallow);
        !!subctgrs.length && setSubctgrs([]);
        setSearchTxt('');
    };

    const handleSubCategory = (ctgr) => async () => {
        const {type, parents} = ctgr;
        const [mainCtgr, subCtgr] = parents;
        const url = `/create/${!type || subCtgr ? 'form' : 'type'}/${postTypeName}/${mainCtgr.name}`;

        push(`${url}/${subCtgr ? `${subCtgr.name}/${ctgr.name}` : ctgr.name}`, undefined, shallow);
        setSearchTxt('');
    };

    const setMatchedCtgrs = () => {
        const matchedCtgrs = searchTxt.length > 2
                             ? categorySearchHelper(searchTxt, categories, t)
                             : [];
        setSubctgrs(matchedCtgrs);
    };

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        category.id && setCategory(initCategory);
    };

    const setSubLvlCtgrs = () => {
        if (categoryName) {
            categories.forEach(({id, name, subcategory}) => {
                if (name === categoryName) {
                    if (subcategoryName) {
                        subcategory.forEach(({name, type}) => {
                            if (name === subcategoryName) {
                                type ? setSubctgrs(type) : setSubctgrs(subcategory);
                            }
                        });
                    } else {
                        setSubctgrs(subcategory);
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
    }, [categoryName, subcategoryName, locale]);

    const classes = useStyles();
    return (
        <MainLayout>
            <div className={classes.root}>
                <Hidden mdDown>
                    <StepsProgress
                        activeStep={1}
                        handleBack={handleBack}
                        title={t(`common:${postTypeName}`)}
                    />
                </Hidden>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3} className="categories-menu">
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
                                        {t(`${ctgr.name}.name`)}
                                    </Typography>
                                </ListItem>)}
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={9} className="sub-categories-menu">
                        <div className="search-block">
                            <InputBase
                                fullWidth
                                spellCheck={false}
                                value={searchTxt}
                                onChange={handleSearch}
                                placeholder={t(`post:searchCategory`)}
                                startAdornment={<Search_icon/>}
                            />
                        </div>
                        {!!subctgrs.length
                         ? <List disablePadding>
                             {subctgrs[0].parents.length === 2 && subcategoryName && (
                                 <ListItem onClick={handleBackSubCtgr}>
                                     <CustomButton className="back-btn">
                                         <BackspaceIcon/>
                                         <Typography variant="subtitle1">
                                             {t(`${categoryName}.${subcategoryName}.name`)}
                                         </Typography>
                                     </CustomButton>
                                 </ListItem>
                             )}
                             {subctgrs.map((typeCtgr, i) => {
                                 const transCtgrName = t(`${categoryName}${subcategoryName ? `.${subcategoryName}` : ''}.${typeCtgr.name}.name`);
                                 return (
                                     <ListItem key={i} onClick={handleSubCategory(typeCtgr)}>
                                         <div>
                                             <Typography variant="subtitle1">
                                                 {transCtgrName}
                                             </Typography>
                                             {!!searchTxt && (
                                                 <Typography
                                                     className="parent-category"
                                                     variant="subtitle2"
                                                 >
                                                     {t(`${typeCtgr.parents[0].name}`)}
                                                     {typeCtgr.parents[1] && ` - ${t(`${typeCtgr.parents[1].name}`)}`}
                                                 </Typography>
                                             )}
                                         </div>
                                     </ListItem>
                                 );
                             })}
                         </List>
                         : <div className="sub-category-bg">
                             <Typography variant="h2">
                                 {t('post:selectCategory')}
                             </Typography>
                         </div>}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};