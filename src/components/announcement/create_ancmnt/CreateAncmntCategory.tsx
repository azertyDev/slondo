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
import {CategoryType} from "@root/interfaces/Categories";
import {AncmntType, CreateAncmntState} from "@root/interfaces/Announcement";


type CreateAncmntType = {
    createAncmnt: CreateAncmntState;
    categoriesList: CategoryType[];
    searchTxt: string;
    handleSearch: (t) => void;
    ancmntType: AncmntType;
    handleCategory: (c) => () => void;
    handleSubCategory: (parent, child_id?, name?) => () => void;
};

export const CreateAncmntCategory: FC<CreateAncmntType> = (props) => {
    const {
        ancmntType,
        searchTxt,
        handleSearch,
        createAncmnt,
        categoriesList,
        handleCategory,
        handleSubCategory,
    } = props;

    const {category, error, isFetch} = createAncmnt;

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
                                            <img src={ctgr.icons.url.default} alt={ctgr.name}/>
                                            {ctgr.name}
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={9} className='sub-categories-menu'>
                            <div className='search-block'>
                                <InputBase
                                    onChange={handleSearch}
                                    style={{border: '1px solid'}}
                                    placeholder='Поиск по категориям'
                                />
                            </div>
                            {isFetch
                                ? <div style={{height: '800px'}}>
                                    <Typography>...Loading</Typography>
                                </div>
                                : error
                                    ? <Typography className='error-text'>{error}</Typography>
                                    : ((ancmntType.id !== 1 && !!category.has_auction || ancmntType.id === 1)
                                    && !!category.childs.length)
                                    && <List>
                                        {category.childs.map(({parent, id, name}, i) => (
                                            <ListItem
                                                key={i}
                                                onClick={handleSubCategory(parent, id, name)}
                                            >
                                                <div>
                                                    <Typography variant='subtitle1'>
                                                        {name}
                                                    </Typography>
                                                    {!!searchTxt && (
                                                        <Typography className='parent-category' variant='subtitle2'>
                                                            {parent.name}
                                                        </Typography>
                                                    )}
                                                </div>
                                            </ListItem>
                                        ))}
                                    </List>
                            }
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