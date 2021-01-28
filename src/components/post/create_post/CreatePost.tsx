import React, {
    FC,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
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
import {createPostContainerType} from "@src/components/post/create_post/CreatePostContainer";


type CreateAncmntProps = {
    categoriesList: CategoryType[];
    subLvlCtgrs: SubLvlCtgrsType[];
    postType: PostType;
    handleBackCtgr: () => void;
    setMatchedCtgrs: (t) => void;
    handleCategory: (c) => () => void;
    createPost: CreatePostState;
    setCreatePost: Dispatch<SetStateAction<createPostContainerType>>;
    setSubLvlCtgrs: Dispatch<SetStateAction<SubLvlCtgrsType[]>>;
    initCreatePostState: createPostContainerType;
};

export const CreatePost: FC<CreateAncmntProps> = (props) => {
    const {
        postType,
        createPost,
        setCreatePost,
        categoriesList,
        handleCategory,
        handleBackCtgr,
        setMatchedCtgrs,
        subLvlCtgrs,
        setSubLvlCtgrs,
        initCreatePostState
    } = props;

    const {category, error, isFetch} = createPost;
    const [searchTxt, setSearchTxt] = useState('');

    const isThirdLvlCtgr = !!subLvlCtgrs.length
        && subLvlCtgrs.every(ctgr => ctgr.parents.length === 2);

    const handleSearch = ({target: {value}}) => {
        setSearchTxt(value);
        setMatchedCtgrs(value);
        if (!!category.id) {
            setSubLvlCtgrs([]);
            setCreatePost(initCreatePostState);
        }
    };

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
                                    (postType.name === 'post' || ctgr.has_auction === 1)
                                    && <ListItem
                                        key={i}
                                        onClick={handleCategory(ctgr)}
                                        className={
                                            category.id === ctgr.id
                                                ? 'selected-category'
                                                : ''}
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