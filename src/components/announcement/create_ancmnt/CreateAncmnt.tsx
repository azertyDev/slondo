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
import {ButtonComponent} from "@src/components/elements/button/Button";
import {CategoryType} from "@root/interfaces/Categories";
import {CreateAncmntState} from "@root/interfaces/Announcement";


type CreateAncmntType = {
    createAncmnt: CreateAncmntState;
    categoriesList: CategoryType[];
    handleSearch: (t) => void;
    handleCategory: (c) => () => void;
    handleSubCategory: (parent_id, child_id?, name?) => () => Promise<void>;
    handleResetCreateAncmnt: () => void;
};

export const CreateAncmnt: FC<CreateAncmntType> = (props) => {
    const {
        handleSearch,
        createAncmnt,
        categoriesList,
        handleCategory,
        handleSubCategory,
        handleResetCreateAncmnt
    } = props;

    const {adType, category, error, isFetch} = createAncmnt;

    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={9}>
                <ButtonComponent
                    className='back-btn'
                    onClick={handleResetCreateAncmnt}
                >
                    Назад
                </ButtonComponent>
                <div className='categories-block'>
                    <Grid container>
                        <Grid item xs={3} className='categories-list'>
                            <div className='header'>
                                <Typography>Выберите категорию</Typography>
                            </div>
                            <List>
                                {categoriesList.map((ctgr) => (
                                    (adType.id === 1 || ctgr.has_auction === 1) && (
                                        <ListItem key={ctgr.id}>
                                            <div onClick={handleCategory(ctgr)}>
                                                <img src={ctgr.icons.url.default} alt={ctgr.name}/>
                                                {ctgr.name}
                                            </div>
                                        </ListItem>
                                    )
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={9} className='sub-categories-list'>
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
                                    : <List>
                                        {(adType.id !== 1 && !!category.has_auction || adType.id === 1)
                                        && <>
                                            {!!category.childs.length
                                                ? category.childs.map(({parent, id, name}) => (
                                                    <ListItem key={id}>
                                                        <div
                                                            onClick={handleSubCategory(parent, id, name)}
                                                        >
                                                            {name}
                                                        </div>
                                                    </ListItem>
                                                ))
                                                : <ListItem onClick={handleSubCategory(category.id)}>
                                                    <div>{category.name}</div>
                                                </ListItem>}
                                        </>}
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