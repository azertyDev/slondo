import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {StepsProgress} from '../steps_progress/StepsProgress';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {searchCategory, categoriesByType} from '@src/helpers';
import {SubcategoryType} from '@root/interfaces/Categories';
import {Grid, Hidden, InputBase, List, ListItem, Typography, useTheme, useMediaQuery} from '@material-ui/core';
import {BackspaceIcon, Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {IdNameType} from '@root/interfaces/Post';
import {useStyles} from './useStyles';

type CategoryStateType = {
    subcategory: IdNameType
} & IdNameType;

export const CategoriesPage: FC = () => {
    const {t} = useTranslation('categories');

    const initCategory: CategoryStateType = {
        id: null,
        name: '',
        subcategory: {
            id: null,
            name: ''
        }
    };

    const shallow = {shallow: true};
    const {locale, query, push} = useRouter();
    const [postTypeName, categoryName, subcategoryName] = query.slug as string[];

    const [searchTxt, setSearchTxt] = useState('');
    const [category, setCategory] = useState(initCategory);
    const [subctgrs, setSubctgrs] = useState<SubcategoryType[]>([]);

    const categories = categoriesByType(postTypeName);

    const handleCategory = (ctgr) => () => {
        setSearchTxt('');
        push(`/create/${postTypeName}/${ctgr.name}`, undefined, shallow);
    };

    const handleSubCategory = (ctgr) => async () => {
        const {type, parents} = ctgr;
        const [mainCtgr, subCtgr] = parents;
        const url = `/create${!type || subCtgr ? '/form' : ''}/${postTypeName}/${mainCtgr.name}`;

        setSearchTxt('');
        push(`${url}/${subCtgr ? `${subCtgr.name}/${ctgr.name}` : ctgr.name}`, undefined, shallow);
    };

    const setMatchedCtgrs = () => {
        const matchedCtgrs = searchTxt.length > 2 ? searchCategory(searchTxt, categories, t) : [];
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
        subcategoryName
            ? await push(`/create/${postTypeName}/${categoryName}`, undefined, shallow)
            : await push(`/create/${postTypeName}`, undefined, shallow);
    };

    const handleBack = async () => {
        await push('/create/type', undefined, shallow);
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

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Hidden mdDown>
                    <StepsProgress
                        activeStep={1}
                        handleBack={handleBack}
                        title={t(`common:${postTypeName}`)}
                    />
                </Hidden>
                <Grid container>
                    {!(categoryName && isSmDown) && (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            className="categories-menu"
                        >
                            <List disablePadding>
                                {categories.map((ctgr, i) =>
                                    <ListItem
                                        key={i}
                                        disableGutters
                                        onClick={handleCategory(ctgr)}
                                        className={categoryName === ctgr.name ? 'selected-category' : ''}
                                    >
                                        {ctgr.smallIcon}
                                        <Typography variant="subtitle1">
                                            {t(`${ctgr.name}.name`)}
                                        </Typography>
                                    </ListItem>
                                )}
                            </List>
                        </Grid>
                    )}
                    {((categoryName && isSmDown) || !isSmDown) && (
                        <Grid
                            item
                            xs={12}
                            md={8}
                            className="subcategories-menu"
                        >
                            <div className="search-block">
                                <InputBase
                                    fullWidth
                                    value={searchTxt}
                                    spellCheck={false}
                                    onChange={handleSearch}
                                    startAdornment={<Search_icon/>}
                                    placeholder={t(`post:searchCategory`)}
                                />
                            </div>
                            {!!subctgrs.length
                                ? <List disablePadding>
                                    {subcategoryName
                                        ? <ListItem onClick={handleBackSubCtgr}>
                                            <CustomButton className="back-btn">
                                                <BackspaceIcon/>
                                                <Typography variant="subtitle1">
                                                    {t(`${categoryName}.${subcategoryName}.name`)}
                                                </Typography>
                                            </CustomButton>
                                        </ListItem>
                                        : categoryName && isSmDown && (
                                        <ListItem onClick={handleBackSubCtgr}>
                                            <CustomButton className="back-btn">
                                                <BackspaceIcon/>
                                                <Typography variant="subtitle1">
                                                    {t('common:back')}
                                                </Typography>
                                            </CustomButton>
                                        </ListItem>
                                    )}
                                    {subctgrs.map((typeCtgr, i) => {
                                        const [ctgr, subctgr] = typeCtgr.parents;
                                        const transCtgrName = t(`${ctgr.name}${subctgr ? `.${subctgr.name}` : ''}.${typeCtgr.name}.name`);
                                        return (
                                            <ListItem key={i} onClick={handleSubCategory(typeCtgr)}>
                                                <div>
                                                    <Typography
                                                        noWrap
                                                        variant="subtitle1"
                                                        className='subcategories-list-item'
                                                    >
                                                        {transCtgrName}
                                                    </Typography>
                                                    {!!searchTxt && (
                                                        <Typography
                                                            variant="subtitle2"
                                                            className="parent-category"
                                                        >
                                                            {t(`categories:${typeCtgr.parents[0].name}.name`)}
                                                            {typeCtgr.parents[1] && ` - ${t(`categories:${typeCtgr.parents[0].name}.${typeCtgr.parents[1].name}.name`)}`}
                                                        </Typography>
                                                    )}
                                                </div>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                                : <div className="subcategory-bg">
                                    {!isMdDown && (
                                        <Typography variant="h2">
                                            {t('post:selectCategory')}
                                        </Typography>
                                    )}
                                </div>}
                        </Grid>
                    )}
                </Grid>
            </div>
        </>
    );
};