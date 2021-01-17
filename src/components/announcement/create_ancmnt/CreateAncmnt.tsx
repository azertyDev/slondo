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
import {AncmntType, CreateAncmntState} from "@root/interfaces/Announcement";


type CreateAncmntProps = {
    createAncmnt: CreateAncmntState;
    categoriesList: CategoryType[];
    subLvlCtgrs: SubLvlCtgrsType[];
    searchTxt: string;
    handleSearch: (t) => void;
    ancmntType: AncmntType;
    handleCategory: (c) => () => void;
    handleSubCategory: (parent, child_id?, name?) => () => void;
    handleBackCtgr: () => void;
};

export const CreateAncmnt: FC<CreateAncmntProps> = (props) => {
    const {
        ancmntType,
        searchTxt,
        subLvlCtgrs,
        handleSearch,
        createAncmnt,
        categoriesList,
        handleCategory,
        handleBackCtgr,
        handleSubCategory
    } = props;

    const {category, error, isFetch} = createAncmnt;
    console.log(createAncmnt)

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
                                {categoriesList.map((ctgr) => (
                                    (ancmntType.id === 1 || ctgr.has_auction === 1)
                                    && <ListItem
                                        key={ctgr.id}
                                        className={
                                            category.id === ctgr.id
                                                ? 'selected-category'
                                                : ''
                                        }
                                    >
                                        <div onClick={handleCategory(ctgr)}>
                                            <img src={ctgr.icon.url} alt={ctgr.name}/>
                                            {ctgr.name}
                                        </div>
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
                                />
                            </div>
                            {!!subLvlCtgrs.length && subLvlCtgrs[0].parents.length === 2
                            && <div>
                                <button onClick={handleBackCtgr}>{'<'}</button>
                            </div>}
                            {isFetch
                                ? <div style={{height: '800px'}}>
                                    <Typography>...Loading</Typography>
                                </div>
                                : error
                                    ? <Typography className='error-text'>{error}</Typography>
                                    : <List>
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
                                                        {parent.name}
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