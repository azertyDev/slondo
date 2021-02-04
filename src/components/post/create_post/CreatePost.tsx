import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import { Typography, InputBase, List, ListItem, Grid } from '@material-ui/core';
import { CategoryType, SubLvlCtgrsType } from '@root/interfaces/Categories';
import { PostType, CreatePostState } from '@root/interfaces/Post';
import { Search_icon } from '@src/components/elements/icons';
import {
    CarIcon,
    SpecTechIcon,
    PartsIcon,
    ApartmentsIcon,
    JobIcon,
    ServicesIcon,
    HangerIcon,
    SofaIcon,
    ElectronicIcon,
    HobbyIcon,
    AnimalsIcon,
    ForFreeIcon,
} from '@src/components/elements/icons';
import { useStyles } from './useStyles';

type CreatePostProps = {
    isFetch: boolean;
    categoriesList: CategoryType[];
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

export const CreatePost: FC<CreatePostProps> = (props) => {
    const {
        postType,
        createPost,
        isFetch,
        setCreatePost,
        categoriesList,
        handleCategory,
        handleBackCtgr,
        setMatchedCtgrs,
        subLvlCtgrs,
        setSubLvlCtgrs,
        initCreatePostState,
    } = props;
    console.log(props);

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
                    {categoriesList.map(
                        (ctgr, i) =>
                            (postType.name === 'post' ||
                                ctgr.has_auction === 1) && (
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
                                    <CarIcon />
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        {ctgr.name}
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
                        placeholder="Поиск категорий"
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
                                <span>{'<-'}</span>
                            </ListItem>
                        )}
                        {subLvlCtgrs.map((ctgr, i) => (
                            <ListItem key={i} onClick={handleCategory(ctgr)}>
                                <div>
                                    <Typography variant="subtitle1">
                                        {ctgr.name}
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
