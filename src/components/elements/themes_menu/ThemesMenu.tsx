import {FC, useState} from 'react';
import {Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

type ThemesMenuPropsType = {
    data: any[],
    handleClick: (term) => () => void,
};

export const ThemesMenu: FC<ThemesMenuPropsType> = ({data, handleClick}) => {
    const [open, setOpen] = useState(false);
    const [isActive, setActive] = useState(false);

    const {query: {term}} = useRouter();

    const handleToggle = () => {
        setActive(!isActive);
    };

    const classes = useStyles();
    return (
        <Grid item xs={3} className={classes.root}>
            <List component="nav" className={classes.helpMenu}>
                {
                    data.map((el) => {
                        return (
                            <ListItem
                                button
                                key={el.id}
                                onClick={handleClick(el.term)}
                                className={term === `${el.term}` ? classes.active : ''}
                            >
                                <ListItemText primary={el.title}/>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Grid>
    );
};
