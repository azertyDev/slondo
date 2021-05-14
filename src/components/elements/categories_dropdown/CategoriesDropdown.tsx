import {FC, useState} from 'react';
import {WithT} from 'i18next';
import {ArrowRight, ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import {Collapse, List, ListItem, ListItemText, Typography, ClickAwayListener} from '@material-ui/core';
import {useStyles} from './useStyles';


type NestedDropdownPropsType = {
    name: string,
    filters,
    category,
    handleSelect
} & WithT;

export const CategoriesDropdown: FC<NestedDropdownPropsType> = (props) => {
    const {
        t,
        name,
        filters,
        category,
        handleSelect
    } = props;

    const [mainCtgr] = category?.parents ?? [category];

    const [open, setOpen] = useState(false);
    const [subCtgrs, setSubCtgrs] = useState([]);

    const handleSwitchOpen = () => {
        setOpen(!open);
    };

    const handleOnMouse = item => () => {
        setSubCtgrs(item);
    };

    const handleClick = (name, value) => () => {
        handleClose();
        handleSelect(name, value);
    };

    const handleClose = () => {
        setOpen(false);
        setSubCtgrs([]);
    };

    const classes = useStyles({open});
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t(name)}
                </strong>
            </Typography>
            <ClickAwayListener onClickAway={handleClose}>
                <div>
                    <ListItem
                        button
                        className='selected-item'
                        onClick={handleSwitchOpen}
                    >
                        <ListItemText primary={t(`categories:${category.name}`)}/>
                        {open ? <ArrowDropUp/> : <ArrowDropDown/>}
                    </ListItem>
                    <div className='filters-wrapper'>
                        <List className='ctgrs'>
                            <Collapse in={open} timeout={0} unmountOnExit>
                                {filters.map(item => (
                                    <ListItem
                                        button
                                        key={item.id}
                                        onClick={handleClick(name, item)}
                                        onMouseEnter={handleOnMouse(item.subCategory)}
                                        className={mainCtgr?.name === item.name ? classes.selected : ''}
                                    >
                                        <ListItemText primary={t(`categories:${item.name}`)}/>
                                        <ArrowRight/>
                                    </ListItem>
                                ))}
                            </Collapse>
                        </List>
                        {!!subCtgrs.length && (
                            <List className='sub-ctgrs'>
                                <Collapse in={open} timeout={0} unmountOnExit>
                                    {subCtgrs.map(item =>
                                        <ListItem
                                            button
                                            key={item.id}
                                            onClick={handleClick(name, item)}
                                            className={category?.name === item.name && category?.id === item.id ? classes.selected : ''}
                                        >
                                            <ListItemText primary={t(`categories:${item.name}`)}/>
                                        </ListItem>
                                    )}
                                </Collapse>
                            </List>
                        )}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};
