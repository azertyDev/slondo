import React, {FC, useEffect, useMemo, useState} from 'react';
import {i18n, useTranslation, Router} from '@root/i18n';
import {MainLayout} from '@src/components/MainLayout';
import {categorySearchHelper, categoriesByType} from '@src/helpers';
import {PostHeader} from '../post_header/PostHeader';
import {SubLvlCtgrsType} from '@root/interfaces/Categories';
import {categories_list} from '@src/common_data/categories_list';
import {useRouter} from "next/router";
import {Grid, InputBase, List, ListItem, Typography} from "@material-ui/core";
import {BackspaceIcon, Search_icon} from "@src/components/elements/icons";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {IdNameType} from "@root/interfaces/Post";
import {useStyles} from "@src/components/post/create_post/post_categories/useStyles";


type CategoryStateType = IdNameType & {
    subCategory: IdNameType
};

export const PostCategories: FC = () => {
    const initCategory: CategoryStateType = {
        id: null,
        name: '',
        subCategory: {
            id: null,
            name: '',
        }
    };

    const lang = i18n.language;
    const {t} = useTranslation(['post']);

    const postType = useRouter().query.type as string;

    const categories = useMemo(() => categoriesByType(categories_list, postType), [lang]);

    const [category, setCategory] = useState(initCategory);

    const [searchTxt, setSearchTxt] = useState('');

    const [subLvlCtgrs, setSubLvlCtgrs] = useState<SubLvlCtgrsType[]>([]);
    const isThirdLvlCtgr = !!subLvlCtgrs.length
        && subLvlCtgrs.every(subCtgr => subCtgr.parents.length === 2);

    const handleCategory = (ctgr) => () => {
        const {id, name, subCategory, type} = ctgr;
        const list = subCategory ?? type;

        const url = `/create/form/${postType}`;

        if (ctgr.parents) {
            const mainCtgr = ctgr.parents[0];
            const mainCtgrName = mainCtgr.name;

            if (ctgr.parents[1]) {
                const subCtgrName = ctgr.parents[1].name;
                const typeName = ctgr.name;

                Router.push(`${url}-${mainCtgrName}-${subCtgrName}-${typeName}`);
            } else {
                category.subCategory = {...category.subCategory, id, name};
                setCategory({...category, ...mainCtgr});

                const subCtgrName = ctgr.name;
                type && Router.push(`${url}-${mainCtgrName}-${subCtgrName}`);
            }
        } else {
            setCategory({...category, id, name});
            !!setSubLvlCtgrs.length && setSubLvlCtgrs([]);
        }

        list && setSubLvlCtgrs(list);
        searchTxt && setSearchTxt('');
    };

    const setMatchedCtgrs = (txt: string) => {
        const matchedCtgrs = txt.length > 2
            ? categorySearchHelper(txt, categories, t)
            : [];
        setSubLvlCtgrs(matchedCtgrs);
    };

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        setMatchedCtgrs(value);
        category.id && setCategory(initCategory);
    };

    const handleBackCtgr = () => {
        categories.forEach(({subCategory}) => (
            subCategory && subCategory.forEach(subCtgr => (
                subCtgr.name === category.subCategory.name && setSubLvlCtgrs(subCategory))
            )
        ));
    };

    const setSubLvlCtgrByLang = () => {
        if (!!searchTxt) {
            setMatchedCtgrs(searchTxt);
        } else if (subLvlCtgrs.length) {
            categories.forEach(({id, name, subCategory}) => {
                if (name === category.name) {
                    if (isThirdLvlCtgr) {
                        subCategory.forEach(thCtgr => {
                            if (subLvlCtgrs.some(ctgr => ctgr.name === thCtgr.name)) {
                                setSubLvlCtgrs(thCtgr.type);
                            }
                        });
                    } else {
                        setSubLvlCtgrs(subCategory);
                    }
                    setCategory({...category, id, name});
                }
            });
        }
    };
    console.log(`main:`, category)
    useEffect(() => {
        setSubLvlCtgrByLang();
    }, [lang]);

    const classes = useStyles();
    return (
        <MainLayout>
            <PostHeader
                activeStep={1}
                postType={postType}
                backUrl='/create/type'
            />
            <Grid container className={classes.root}>
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
                    {!!subLvlCtgrs.length
                        ? <List disablePadding>
                            {isThirdLvlCtgr
                            && <ListItem onClick={handleBackCtgr}>
                                <ButtonComponent className="back-btn">
                                    <BackspaceIcon/>
                                    <Typography variant="subtitle1">
                                        {t(`categories:${subLvlCtgrs[0].parents[1].name}`)}
                                    </Typography>
                                </ButtonComponent>
                            </ListItem>}
                            {subLvlCtgrs.map((ctgr, i) =>
                                <ListItem key={i} onClick={handleCategory(ctgr)}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            {t(`categories:${ctgr.name}`)}
                                        </Typography>
                                        {!!searchTxt
                                        && <Typography
                                            className="parent-category"
                                            variant="subtitle2"
                                        >
                                            {t(`categories:${ctgr.parents[0].name}`)}
                                            {ctgr.parents[1] && ` - ${t(`categories:${ctgr.parents[1].name}`)}`}
                                        </Typography>}
                                    </div>
                                </ListItem>
                            )}
                        </List>
                        : <div className="sub-category-bg">
                            <Typography variant="h2">
                                {t('selectCategory')}
                            </Typography>
                        </div>
                    }
                </Grid>
            </Grid>
        </MainLayout>
    );
};
