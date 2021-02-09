import React, {FC} from 'react';
import {WithT} from 'i18next';
import {CategoryType, SubLvlCtgrsType} from '@root/interfaces/Categories';
import {Typography, InputBase, List, ListItem, Grid} from '@material-ui/core';
import {PostType, CreatePostState} from '@root/interfaces/Post';
import {BackspaceIcon, Search_icon} from '@src/components/elements/icons';
import {ButtonComponent} from '../../elements/button/Button';
import {useStyles} from './useStyles';


type CreatePostProps = {
    isFetch: boolean;
    categoriesList: CategoryType[];
    subLvlCtgrs: SubLvlCtgrsType[];
    postType: PostType;
    handleBackCtgr: () => void;
    handleCategory: (c) => () => void;
    createPost: CreatePostState;
    isThirdLvlCtgr: boolean;
    handleSearch: (v) => void;
    searchTxt: string;
};

export const CreatePost: FC<CreatePostProps & WithT> = (props) => {
    const {
        t,
        postType,
        createPost,
        isFetch,
        categoriesList,
        handleCategory,
        handleBackCtgr,
        subLvlCtgrs,
        isThirdLvlCtgr,
        handleSearch,
        searchTxt
    } = props;

    const {category, error} = createPost;

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3} className="categories-menu">
                <List disablePadding>
                    {
                        categoriesList.map((ctgr, i) =>
                            (postType.name === 'post' || ctgr.has_auction)
                            && <ListItem
                                key={i}
                                disableGutters
                                onClick={handleCategory(ctgr)}
                                className={
                                    category.id === ctgr.id
                                        ? 'selected-category'
                                        : ''
                                }
                            >
                                {ctgr.smallIcon}
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                >
                                    {ctgr.name}
                                </Typography>
                            </ListItem>)
                    }
                </List>
            </Grid>
            <Grid item xs={9} className="sub-categories-menu">
                <div className="search-block">
                    <InputBase
                        fullWidth
                        spellCheck={false}
                        value={searchTxt}
                        onChange={handleSearch}
                        placeholder={t(`categories:searchCategory`)}
                        startAdornment={<Search_icon/>}
                    />
                </div>
                {isFetch
                    ? <div style={{height: '800px'}}>
                        <Typography>...Loading</Typography>
                    </div>
                    : error
                        ? <Typography className="error-text">{error}</Typography>
                        : !!subLvlCtgrs.length
                            ? <List disablePadding>
                                {isThirdLvlCtgr
                                && <ListItem onClick={handleBackCtgr}>
                                    <ButtonComponent className="back-btn">
                                        <BackspaceIcon/>
                                        <Typography variant="subtitle1">
                                            {subLvlCtgrs[0].parents[1].name}
                                        </Typography>
                                    </ButtonComponent>
                                </ListItem>}
                                {subLvlCtgrs.map((ctgr, i) => (
                                    <ListItem key={i} onClick={handleCategory(ctgr)}>
                                        <div>
                                            <Typography variant="subtitle1">
                                                {ctgr.name}
                                            </Typography>
                                            {!!searchTxt
                                            && <Typography
                                                className="parent-category"
                                                variant="subtitle2"
                                            >
                                                {ctgr.parents[0].name}
                                                {ctgr.parents[1] && ` - ${ctgr.parents[1].name}`}
                                            </Typography>}
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                            : <div className="sub-category-bg">
                                <Typography variant="h2" color="initial">
                                    Выберите категорию
                                </Typography>
                            </div>}
            </Grid>
        </Grid>
    );
};
