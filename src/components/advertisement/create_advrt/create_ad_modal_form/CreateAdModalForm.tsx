import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Tabs, Typography, InputBase, List, ListItem, Grid} from "@material-ui/core";
import {RootState} from "@src/redux/rootReducer";
import {CustomTab} from "@src/components/elements/custom_tab/CustomTab";
import {fetchAdDataForCreate, createAdvrtDataAction, resetCreateAdvrtDataAction} from "@src/redux/slices/createAdvrtSlice";
import {i18n, Router} from "@root/i18n";
import {useStyles} from './useStyles';


const adTypes = [
    {
        id: 1,
        name: 'Объявление'
    },
    {
        id: 2,
        name: 'Торг'
    }
];


export const CreateAdModalForm: FC<any> = (props) => {
    const {handleCloseModal} = props;

    const lang = i18n.language;

    const dispatch = useDispatch();
    const categoriesList = useSelector(({categories}: RootState) => categories.list);

    const [tabValue, setTabValue] = useState(0);

    const [adType, setAdType] = useState(adTypes[0]);

    const [subCtgry, setSubCtgry] = useState({
        parentID: null,
        parentName: '',
        childs: []
    });

    const handleTab = (_, newValue) => {
        setTabValue(newValue);
        tabValue
            ? setAdType(adTypes[0])
            : setAdType(adTypes[1])
    };

    const handleCtgr = (parentID, parentName, list) => () => {
        if (list.length) {
            setSubCtgry({parentID, parentName, childs: list});
        } else {
            dispatch(resetCreateAdvrtDataAction());
            dispatch(createAdvrtDataAction({
                adType,
                category: {
                    id: parentID,
                    name: parentName
                }
            }));
            Router.push('/advertisement/create');
            handleCloseModal();
        }
    };

    const handleSubCtgr = (ctgryID, subCtgryID) => () => {
        dispatch(
            fetchAdDataForCreate({
                lang,
                ctgryID,
                subCtgryID
            })
        );
        dispatch(createAdvrtDataAction({
            adType,
            category: {
                id: subCtgry.parentID,
                name: subCtgry.parentName
            }
        }));
        Router.push('/advertisement/create');
        handleCloseModal();
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tabs
                value={tabValue}
                onChange={handleTab}
                centered
            >
                <CustomTab
                    label={
                        <Typography variant="subtitle1">
                            Объявления
                        </Typography>
                    }
                    id={0}
                />
                <CustomTab
                    label={
                        <Typography variant="subtitle1">
                            Торги
                        </Typography>
                    }
                    id={1}
                />
            </Tabs>
            <Grid container className={classes.tabsContent}>
                <Grid item xs={3} className='categories-block'>
                    <div className='header'>
                        <Typography>Выберите категорию</Typography>
                    </div>
                    <List className='categories-list'>
                        {
                            categoriesList.map((ctgr) => (
                                <ListItem key={ctgr.id} onClick={handleCtgr(ctgr.id, ctgr.name, ctgr.childs)}>
                                    <div>
                                        <img src={ctgr.icons.url} alt='category'/>
                                        {ctgr.name}
                                    </div>
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
                <Grid item xs={9} className='sub-categories-block'>
                    <div className='search-block'>
                        <InputBase style={{border: '1px solid'}} placeholder='Поиск по категориям'/>
                    </div>
                    <List className='categories-list'>
                        {
                            subCtgry.childs.map(({id, name}) => (
                                <ListItem key={id} onClick={handleSubCtgr(subCtgry.parentID, id)}>
                                    <div>
                                        {name}
                                    </div>
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            </Grid>
        </div>
    )
};