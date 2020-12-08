import React, {FC} from "react";
import {
    Tabs,
    Typography,
    InputBase,
    List,
    ListItem,
    Grid,
    Tab,
    Hidden
} from "@material-ui/core";
import {AdvrtFormContainer} from "./advrt_form/AdvrtFormContainer";
import {useStyles} from './useStyles';


export const CreateAdvrt: FC<any> = (props) => {
    const {
        isForm,
        adTypes,
        tabValue,
        handleTab,
        handleCategory,
        handleSubCategory,
        createAdvrt,
        categoriesList,
    } = props;

    const {adType, category, error, isFetch} = createAdvrt;

    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={9}>
                {isForm
                    ? <AdvrtFormContainer {...props}/>
                    : <div>
                        <Tabs
                            value={tabValue}
                            onChange={handleTab}
                            centered
                        >
                            {adTypes.map(type => (
                                <Tab
                                    key={type.id}
                                    value={type.id}
                                    label={
                                        <Typography variant="subtitle1">
                                            {type.name}
                                        </Typography>
                                    }
                                />
                            ))}
                        </Tabs>
                        <Grid container className={classes.tabsContent}>
                            <Grid item xs={3} className='categories-block'>
                                <div className='header'>
                                    <Typography>Выберите категорию</Typography>
                                </div>
                                <List className='categories-list'>
                                    {categoriesList.map((ctgr) => (
                                        (adType.id === 1 || ctgr.has_auction === 1) && (
                                            <ListItem
                                                key={ctgr.id}
                                                onClick={isFetch ? null : handleCategory(ctgr)}
                                            >
                                                <div>
                                                    <img src={ctgr.icons.url.original} alt={ctgr.name}/>
                                                    {ctgr.name}
                                                </div>
                                            </ListItem>
                                        )
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={9} className='sub-categories-block'>
                                <div className='search-block'>
                                    <InputBase style={{border: '1px solid'}} placeholder='Поиск по категориям'/>
                                </div>
                                {
                                    isFetch
                                        ? <div style={{height: '800px'}}>
                                            <Typography>...Loading</Typography>
                                        </div>
                                        : error
                                        ? <Typography className='error-text'>{error}</Typography>
                                        : <List className='categories-list'>
                                            {
                                                (adType.id !== 1 && !!category.has_auction || adType.id === 1)
                                                && <>
                                                    {
                                                        !!category.childs.length
                                                            ? category.childs.map(({id, name}) => (
                                                                <ListItem
                                                                    key={id}
                                                                    onClick={isFetch ? null : handleSubCategory(id, name)}
                                                                >
                                                                    <div>{name}</div>
                                                                </ListItem>
                                                            ))
                                                            : <ListItem
                                                                onClick={handleSubCategory()}
                                                            >
                                                                <div>{category.name}</div>
                                                            </ListItem>
                                                    }
                                                </>
                                            }
                                        </List>
                                }
                            </Grid>
                        </Grid>
                    </div>
                }
            </Grid>
            <Hidden smDown>
                <Grid item md={3} className='advrt-banner'>
                    <div/>
                </Grid>
            </Hidden>
        </Grid>
    )
};