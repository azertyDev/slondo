import {FC, Fragment} from 'react';
import {List} from '@material-ui/core';
import {MenuItem} from '@src/components/help/help_sidebar/MenuItem/MenuItem';
import {useStyles} from './useStyles';

type ThemesMenuPropsType = {
    menuStruct: any,
};

export const HelpSidebar: FC<ThemesMenuPropsType> = ({menuStruct}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                                    <MenuItem data={el} />
                                </Fragment>
                            );
                        })}
                    </List>
                );
            })}
        </div>
    );
};
