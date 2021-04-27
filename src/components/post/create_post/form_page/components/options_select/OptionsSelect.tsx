import React, {FC} from 'react';
import {WithT} from 'i18next';
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../deployed_select/useStyles';


export type HandleOptionCheckboxType = (name: string, value) => void;

type OptionsSectionPropsType = {
    name?: string,
    values,
    options: any[],
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const OptionsSelect: FC<OptionsSectionPropsType> = (props) => {
    const {
        t,
        name,
        values,
        options = [],
        handleOptionCheckbox
    } = props;

    const onClick = (item) => () => {
        handleOptionCheckbox(name, item);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {name && (
                <Typography variant='subtitle1'>
                    <strong>
                        {t(name)}
                    </strong>
                </Typography>
            )}
            <Grid container>
                {options.map(item => {
                    const checked = !!values[name]?.some(({id}) => id === item.id);
                    return (
                        <Grid
                            item
                            sm={4}
                            xs={12}
                            container
                            key={item.id}
                            alignItems='center'
                        >
                            <Checkbox
                                color='primary'
                                name={item.name}
                                checked={checked}
                                onChange={onClick(item)}
                            />
                            <Typography>
                                {t(item.name)}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};