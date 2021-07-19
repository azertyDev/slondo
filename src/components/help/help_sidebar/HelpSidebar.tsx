import {FC, Fragment} from 'react';
import {
    // FormControl,
    // InputAdornment,
    // OutlinedInput,
    Grid,
    List
} from '@material-ui/core';
// import {Search_icon} from '@src/components/elements/icons';
import {MenuItem} from '@src/components/help/help_sidebar/MenuItem/MenuItem';
import {useStyles} from './useStyles';

type ThemesMenuPropsType = {
    menuStruct: any,
};

export const HelpSidebar: FC<ThemesMenuPropsType> = ({menuStruct}) => {
    const classes = useStyles();
    return (
        <Grid item xs={3} className={classes.root}>
            {/*<FormControl fullWidth className={classes.searchInput} variant="outlined">*/}
            {/*    <OutlinedInput*/}
            {/*        id="outlined-adornment-amount"*/}
            {/*        placeholder="Поиск"*/}
            {/*        startAdornment={*/}
            {/*            <InputAdornment position="start">*/}
            {/*                <Search_icon/>*/}
            {/*            </InputAdornment>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</FormControl>*/}
            {menuStruct.map((data, index) => {
                return (
                    <List
                        key={index}
                        component="nav"
                        className={classes.helpMenu}
                    >
                        {data.map(el => {
                            return (
                                <Fragment key={el.id}>
                                    <MenuItem data={el}/>
                                </Fragment>
                            );
                        })}
                    </List>
                );
            })}
        </Grid>
    );
};
