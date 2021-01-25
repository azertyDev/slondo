import React, {FC} from "react";
import {
    Typography,
    InputBase,
    List,
    ListItem,
    Grid,
    Hidden
} from "@material-ui/core";
import {useStyles} from './useStyles';
import {CategoryType, SubLvlCtgrsType} from "@root/interfaces/Categories";
import {PostType, CreatePostState} from "@root/interfaces/Post";


type CreateAncmntProps = {
    createPost: CreatePostState;
    categoriesList: CategoryType[];
    subLvlCtgrs: SubLvlCtgrsType[];
    searchTxt: string;
    handleSearch: (t) => void;
    postType: PostType;
    handleCategory: (c) => () => void;
    handleBackCtgr: () => void;
};

export const CreatePost: FC<CreateAncmntProps> = (props) => {
    const {
        postType,
        searchTxt,
        subLvlCtgrs,
        handleSearch,
        createPost,
        categoriesList,
        handleCategory,
        handleBackCtgr,
    } = props;

    const {category, error, isFetch} = createPost;

    const isThirdLvlCtgr = !searchTxt
        && !!subLvlCtgrs.length
        && subLvlCtgrs.every(ctgr => ctgr.parents.length === 2);

    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={9}>
                <div className='categories-block'>
                    <Grid container>
                        <Grid item xs={3} className='categories-menu'>
                            <div className='header'>
                                <Typography>Выберите категорию</Typography>
                            </div>
                            <List>
                                {categoriesList.map((ctgr, i) => (
                                    (postType.id === 1 || ctgr.has_auction === 1)
                                    && <ListItem
                                        key={i}
                                        onClick={handleCategory(ctgr)}
                                        className={
                                            category.id === ctgr.id
                                                ? 'selected-category'
                                                : ''
                                        }
                                    >
                                        <img src={ctgr.icon.url} alt={ctgr.name}/>
                                        {ctgr.name}
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid
                            item
                            xs={9}
                            className='sub-categories-menu'
                        >
                            <div className='search-block'>
                                <InputBase
                                    onChange={handleSearch}
                                    style={{border: '1px solid'}}
                                    placeholder='Поиск по категориям'
                                    value={searchTxt}
                                />
                            </div>
                            {isFetch
                                ? <div style={{height: '800px'}}>
                                    <Typography>...Loading</Typography>
                                </div>
                                : error
                                    ? <Typography className='error-text'>{error}</Typography>
                                    : <List>
                                        {isThirdLvlCtgr
                                        && <ListItem onClick={handleBackCtgr}>
                                            <span>{'<-'}</span>
                                        </ListItem>}
                                        {subLvlCtgrs.map((ctgr, i) => (
                                            <ListItem
                                                key={i}
                                                onClick={handleCategory(ctgr)}
                                            >
                                                <div>
                                                    <Typography variant='subtitle1'>
                                                        {ctgr.name}
                                                    </Typography>
                                                    {!!searchTxt && <Typography
                                                        className='parent-category'
                                                        variant='subtitle2'
                                                    >
                                                        {ctgr.parents[0].name}
                                                        {ctgr.parents[1] && ` - ${ctgr.parents[1].name}`}
                                                    </Typography>}
                                                </div>
                                            </ListItem>
                                        ))}
                                    </List>}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Hidden smDown>
                <Grid item md={3} className='advrt-banner'>
                    <div/>
                </Grid>
            </Hidden>
        </Grid>
    )
};