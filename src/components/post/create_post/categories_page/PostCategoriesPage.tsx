import React, {FC, useEffect, useMemo, useState} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next';
import {MainLayout} from '@src/components/MainLayout';
import {categorySearchHelper, categoriesByType, addParentsToCtgrs} from '@src/helpers';
import {Top} from '../top/Top';
import {SubCtgrsType} from '@root/interfaces/Categories';
import {Grid, InputBase, List, ListItem, Typography} from "@material-ui/core";
import {BackspaceIcon, Search_icon} from "@src/components/elements/icons";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {IdNameType} from "@root/interfaces/Post";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {useStyles} from "@src/components/post/create_post/categories_page/useStyles";


type CategoryStateType = IdNameType & {
    subCategory: IdNameType
};

const PostCategoriesPage: FC = () => {
    const initCategory: CategoryStateType = {
        id: null,
        name: '',
        subCategory: {
            id: null,
            name: ''
        }
    };

    const {t} = useTranslation(['post']);

    const {locale, query, push} = useRouter();
    const postType = query.type as string;

    const categories = useMemo(() => addParentsToCtgrs(categoriesByType(postType)), [locale]);

    const [category, setCategory] = useState(initCategory);

    const [searchTxt, setSearchTxt] = useState('');

    const [subCtgrs, setSubCtgrs] = useState<SubCtgrsType[]>([]);
    const isThirdLvlCtgr = !!subCtgrs.length
        && subCtgrs.every(subCtgr => subCtgr.parents.length === 2);

    const handleCategory = (ctgr) => () => {
        const {subCategory, type} = ctgr;
        const list = subCategory ?? type;

        const url = `/create/form/${postType}`;

        if (ctgr.parents) {
            const mainCtgr = ctgr.parents[0];

            if (ctgr.parents[1]) {
                const subCtgrId = ctgr.parents[1].name;
                push(`${url}?categoryName=${mainCtgr.name}&subCategoryName=${subCtgrId}&typeName=${ctgr.name}`);
            } else {
                if (!type) {
                    push(`${url}?categoryName=${mainCtgr.name}&subCategoryName=${ctgr.name}`);
                } else {
                    category.subCategory = {
                        ...category.subCategory,
                        id: ctgr.id,
                        name: ctgr.name
                    };
                    setCategory({
                        ...category,
                        ...mainCtgr
                    });
                }
            }
        } else {
            if (ctgr.name === 'free') {
                push(`${url}?categoryName=${ctgr.name}`);
            } else {
                setCategory({
                    ...category,
                    id: ctgr.id,
                    name: ctgr.name
                });
                !!setSubCtgrs.length && setSubCtgrs([]);
            }
        }

        list && setSubCtgrs(list);
        searchTxt && setSearchTxt('');
    };

    const setMatchedCtgrs = (txt: string) => {
        const matchedCtgrs = txt.length > 2
            ? categorySearchHelper(txt, categories, t)
            : [];
        setSubCtgrs(matchedCtgrs);
    };

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        setMatchedCtgrs(value);
        category.id && setCategory(initCategory);
    };

    const handleBackCtgr = () => {
        categories.forEach(({subCategory}) => (
            subCategory && subCategory.forEach(subCtgr => (
                subCtgr.name === category.subCategory.name && setSubCtgrs(subCategory))
            )
        ));
    };

    const setSubLvlCtgrByLang = () => {
        if (!!searchTxt) {
            setMatchedCtgrs(searchTxt);
        } else if (subCtgrs.length) {
            categories.forEach(({id, name, subCategory}) => {
                if (name === category.name) {
                    if (isThirdLvlCtgr) {
                        subCategory.forEach(thCtgr => {
                            if (subCtgrs.some(ctgr => ctgr.name === thCtgr.name)) {
                                setSubCtgrs(thCtgr.type);
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

    const handleBack = () => push('/create/type');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setSubLvlCtgrByLang();
    }, [locale]);

    const classes = useStyles();
    return (
        <MainLayout>
            <Top
                activeStep={1}
                handleBack={handleBack}
                title={t(`common:${postType}`)}
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
                    {!!subCtgrs.length
                        ? <List disablePadding>
                            {isThirdLvlCtgr && (
                                <ListItem onClick={handleBackCtgr}>
                                    <ButtonComponent className="back-btn">
                                        <BackspaceIcon/>
                                        <Typography variant="subtitle1">
                                            {t(`categories:${subCtgrs[0].parents[1].name}`)}
                                        </Typography>
                                    </ButtonComponent>
                                </ListItem>
                            )}
                            {subCtgrs.map((ctgr, i) =>
                                <ListItem key={i} onClick={handleCategory(ctgr)}>
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
        </MainLayout>
    );
};

export default withAuthRedirect(PostCategoriesPage);
