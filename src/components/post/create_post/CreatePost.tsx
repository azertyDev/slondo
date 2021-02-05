import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import { Typography, InputBase, List, ListItem, Grid } from '@material-ui/core';
import { CategoryType, SubLvlCtgrsType } from '@root/interfaces/Categories';
import { PostType, CreatePostState } from '@root/interfaces/Post';
import { BackspaceIcon, Search_icon } from '@src/components/elements/icons';
import { ButtonComponent } from '../../elements/button/Button';
import { WithT } from 'i18next';
import { useStyles } from './useStyles';

type CreatePostProps = {
    isFetch: boolean;
    categories_list: CategoryType[];
    subLvlCtgrs: SubLvlCtgrsType[];
    postType: PostType;
    handleBackCtgr: () => void;
    setMatchedCtgrs: (t) => void;
    handleCategory: (c) => () => void;
    createPost: CreatePostState;
    setCreatePost: Dispatch<SetStateAction<CreatePostState>>;
    setSubLvlCtgrs: Dispatch<SetStateAction<SubLvlCtgrsType[]>>;
    initCreatePostState: CreatePostState;
};

export const CreatePost: FC<CreatePostProps & WithT> = (props) => {
    const {
        postType,
        createPost,
        isFetch,
        setCreatePost,
        categories_list,
        handleCategory,
        handleBackCtgr,
        setMatchedCtgrs,
        subLvlCtgrs,
        setSubLvlCtgrs,
        initCreatePostState,
        t,
    } = props;

    const { category, error } = createPost;
    const [searchTxt, setSearchTxt] = useState('');

    const isThirdLvlCtgr =
        !!subLvlCtgrs.length &&
        subLvlCtgrs.every((ctgr) => ctgr.parents.length === 2);

    const handleSearch = ({ target: { value } }) => {
        setSearchTxt(value);
        setMatchedCtgrs(value);
        if (!!category.id) {
            setSubLvlCtgrs([]);
            setCreatePost(initCreatePostState);
        }
    };

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3} className="categories-menu">
                <List disablePadding>
                    {categories_list.map(
                        (ctgr, i) =>
                            (postType.name === 'post' ||
                                ctgr.has_auction === true) && (
                                <ListItem
                                    key={i}
                                    onClick={handleCategory(ctgr)}
                                    disableGutters
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
                                        {t(`categories:${ctgr.name}`)}
                                    </Typography>
                                </ListItem>
                            ),
                    )}
                </List>
            </Grid>
            <Grid item xs={9} className="sub-categories-menu">
                <div className="search-block">
                    <InputBase
                        onChange={handleSearch}
                        placeholder={t(`categories:searchCategory`)}
                        value={searchTxt}
                        fullWidth
                        startAdornment={<Search_icon />}
                    />
                </div>
                {isFetch ? (
                    <div style={{ height: '800px' }}>
                        <Typography>...Loading</Typography>
                    </div>
                ) : error ? (
                    <Typography className="error-text">{error}</Typography>
                ) : subLvlCtgrs.length !== 0 ? (
                    <List disablePadding>
                        {isThirdLvlCtgr && (
                            <ListItem onClick={handleBackCtgr}>
                                <ButtonComponent className="back-btn">
                                    <BackspaceIcon />
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        Объявление
                                    </Typography>
                                </ButtonComponent>
                            </ListItem>
                        )}
                        {subLvlCtgrs.map((ctgr, i) => (
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
                                            {ctgr.parents[0].name}
                                            {ctgr.parents[1] &&
                                                ` - ${ctgr.parents[1].name}`}
                                        </Typography>
                                    )}
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <div className="sub-category-bg">
                        <Typography variant="h2" color="initial">
                            Выберите категорию
                        </Typography>
                    </div>
                )}
            </Grid>
        </Grid>
    );
};
