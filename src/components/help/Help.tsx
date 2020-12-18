import React, { useState } from 'react';
import {
    TextField,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    InputAdornment,
} from '@material-ui/core';
import { useStyles } from './useStyles';
import { Search_icon } from '@src/components/elements/icons/SearchIcon';

export const Help = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h6" color="initial">
                Помощь
            </Typography>
            <TextField
                className={classes.searchInput}
                id="input-with-icon-textfield"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search_icon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                placeholder="Поиск категорий"
            />
            <List component="nav" className={classes.helpMenu}>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Заказ и предложение услуг" />
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Я хочу заказать услугу" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Я хочу предложить услугу" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleToggle}>
                    <ListItemText primary="Настройки аккаунта" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Доступ к Slondo" />
                </ListItem>
            </List>
        </div>
    );
};
