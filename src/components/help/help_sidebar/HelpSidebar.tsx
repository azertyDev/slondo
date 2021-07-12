import {FC, Fragment} from 'react';
import {
    FormControl,
    Grid,
    InputAdornment,
    List,
    OutlinedInput
} from '@material-ui/core';
import {useStyles} from './useStyles';
import {Search_icon} from '@src/components/elements/icons';
import {MenuItem} from '@src/components/help/help_sidebar/MenuItem/MenuItem';

type ThemesMenuPropsType = {
    menuData: any,
    handleClick: (term) => () => void,
};

export const HelpSidebar: FC<ThemesMenuPropsType> = ({menuData, handleClick}) => {

    const classes = useStyles();
    return (
        <Grid item xs={3} className={classes.root}>
            <FormControl fullWidth className={classes.searchInput} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-amount"
                    placeholder="Поиск"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search_icon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            {
                menuData.map((data) => {
                    return (
                        <List component="nav" className={classes.helpMenu}>
                            {
                                data.map((el) => {
                                    return (
                                        <Fragment key={el.id}>
                                            <MenuItem
                                                handleClick={handleClick}
                                                data={el}
                                            />
                                        </Fragment>
                                    );
                                })
                            }
                        </List>
                    );
                })
            }
        </Grid>
    );
};
