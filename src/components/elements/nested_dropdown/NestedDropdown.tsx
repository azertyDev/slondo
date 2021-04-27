import {FC, useState} from 'react';
import {Collapse, List, ListItem, ListItemText, Typography, ClickAwayListener} from '@material-ui/core';
import {ArrowRight, ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';


type NestedDropdownPropsType = {
    name: string,
    labelTxt: string,
    list,
    values,
    handleSelect
} & WithT;

export const NestedDropdown: FC<NestedDropdownPropsType> = (props) => {
    const {
        t,
        name,
        labelTxt,
        values,
        list,
        handleSelect
    } = props;

    const selectedCtgr = values[name];
    const [mainCtgr, subCtgr] = selectedCtgr.parents ?? [];

    const [open, setOpen] = useState(false);
    const [subCtgrs, setSubCtgrs] = useState([]);

    const handleSwitchOpen = () => {
        setOpen(!open);
    };

    const handleOnMouse = (item) => () => {
        setSubCtgrs(item);
    };

    const handleClose = () => {
        setOpen(false);
        setSubCtgrs([]);
    };

    const handleClick = (name, value) => () => {
        handleClose();
        handleSelect(name, value);
    };

    // console.log('list', list);
    // console.log('values', values);
    const classes = useStyles({open});
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t(labelTxt)}
                </strong>
            </Typography>
            <ClickAwayListener onClickAway={handleClose}>
                <div>
                    <ListItem
                        button
                        onClick={handleSwitchOpen}
                        className='selected-item'
                    >
                        <ListItemText primary={t(`categories:${selectedCtgr.name}`)}/>
                        {open ? <ArrowDropUp/> : <ArrowDropDown/>}
                    </ListItem>
                    <div className='lists-wrapper'>
                        <List className='ctgrs-list'>
                            <Collapse in={open} timeout={0} unmountOnExit>
                                {list.map(item =>
                                    <ListItem
                                        button
                                        key={item.id}
                                        onClick={handleClick(name, item)}
                                        onMouseEnter={handleOnMouse(item.subCategory)}
                                        className={(mainCtgr?.name || selectedCtgr.name) === item.name ? classes.selected : ''}
                                    >
                                        <ListItemText primary={t(`categories:${item.name}`)}/>
                                        <ArrowRight/>
                                    </ListItem>
                                )}
                            </Collapse>
                        </List>
                        {!!subCtgrs.length && (
                            <List className='sub-ctgrs-list'>
                                <Collapse in={open} timeout={0} unmountOnExit>
                                    {subCtgrs.map(item =>
                                        <ListItem
                                            button
                                            key={item.id}
                                            onClick={handleClick(name, item)}
                                            className={(subCtgr?.name || selectedCtgr.name) === item.name && (subCtgr?.id || selectedCtgr.id) === item.id ? classes.selected : ''}
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
