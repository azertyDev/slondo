import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {StepsProgress} from '../steps_progress/StepsProgress';
import {searchCategory, categoriesByType} from '@src/helpers';
import {SubcategoryType} from '@root/interfaces/Categories';
import {Grid, InputBase, List, ListItem, Typography, useTheme, useMediaQuery, Hidden} from '@material-ui/core';
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
    const {post_type, main_ctgr, sub_ctgr} = query;

    const [searchTxt, setSearchTxt] = useState('');
    const [category, setCategory] = useState(initCategory);
    const [subctgrs, setSubctgrs] = useState<SubcategoryType[]>([]);

    const categories = categoriesByType(post_type as string);
    const baseURL = `/create?post_type=${post_type}`;

    const handleCategory = (ctgr) => async () => {
        !!searchTxt && setSearchTxt('');
        await push(`${baseURL}&main_ctgr=${ctgr.name}`, undefined, shallow);
    };

    const handleSubCategory = (selectedCtgr) => async () => {
        const {parents} = selectedCtgr;
        const [main, sub] = parents;
        const url = `${baseURL}&main_ctgr=${main.name}&sub_ctgr=${sub?.name ?? selectedCtgr.name}${sub ? `&type_ctgr=${selectedCtgr.name}` : ''}`;

        !!searchTxt && setSearchTxt('');
        await push(url, undefined, shallow);
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
        if (main_ctgr) {
            categories.forEach(({id, name, subcategory}) => {
                if (name === main_ctgr) {
                    if (sub_ctgr) {
                        subcategory.forEach(({name, type}) => {
                            if (name === sub_ctgr) {
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

    const handleBack = (main = false) => async () => {
        await push(main
            ? '/create'
            : `${baseURL}${sub_ctgr ? `&main_ctgr=${main_ctgr}` : ''}`, undefined, shallow);
        !main && !sub_ctgr && setSubctgrs([]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        !!searchTxt && setMatchedCtgrs();
    }, [searchTxt]);

    useEffect(() => {
        setSubLvlCtgrs();
    }, [main_ctgr, sub_ctgr, locale]);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <StepsProgress
                    activeStep={1}
                    handleBack={handleBack(true)}
                    title={t(`common:${post_type}`)}
                />
            </Hidden>
            <Hidden smUp>
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
            </Hidden>
            <Grid container>
                {!(subctgrs.length && isSmDown) && (
                    <Grid
                        item
                        xs={12}
                        md={4}
                        className="categories-menu"
                    >
                        <List disablePadding>
                            {categories.map((ctgr, i) =>
                                <ListItem
                                    key={i}
                                    disableGutters
                                    onClick={handleCategory(ctgr)}
                                    className={main_ctgr === ctgr.name ? 'selected-category' : ''}
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
                {((subctgrs.length && isSmDown) || !isSmDown) && (
                    <Grid
                        item
                        xs={12}
                        md={8}
                        className="subcategories-menu"
                    >
                        <Hidden xsDown>
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
                        </Hidden>
                        {!!subctgrs.length
                            ? <List disablePadding>
                                {sub_ctgr
                                    ? <ListItem onClick={handleBack()}>
                                        <CustomButton className="back-btn">
                                            <BackspaceIcon/>
                                            <Typography variant="subtitle1">
                                                {t(`${main_ctgr}.${sub_ctgr}.name`)}
                                            </Typography>
                                        </CustomButton>
                                    </ListItem>
                                    : main_ctgr && isSmDown && (
                                    <ListItem onClick={handleBack()}>
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
    );
};