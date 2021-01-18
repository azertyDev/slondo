import React, { FC, useState } from 'react';
import {
    TextField,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    InputAdornment,
    Grid,
} from '@material-ui/core';
import { Search_icon } from '@src/components/elements/icons/SearchIcon';
import { useStyles } from './useStyles';

export const HelpMenu: FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = () => {
        setActive(!isActive);
    };

    const classes = useStyles();
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
            <Grid container>
                <Grid item xs={3}>
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
                        <ListItem button>
                            <ListItemText primary="Истории на Slondo" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Безопасная сделка" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Действия со своими объявлениями" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Уведомления в браузере" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Взаимодействие пользователей" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Бонусная система" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Услуга «Продать быстрее»" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Услуга «Пакеты объявлений»" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Тариф" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Slondo для бизнеса" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Требования к Магазинам" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Нарушение интеллектуальных прав" />
                        </ListItem>
                    </List>
                    <List component="nav" className={classes.helpMenu + ' support'}>
                        <ListItem button>
                            <ListItemText primary="Обратная связь" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
};
