import {FC} from 'react';
import {Checkbox, FormControlLabel, Grid, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from "next-i18next";

export type HandleOptionCheckboxType = (name: string, value) => void;

type OptionsSectionPropsType = {
    name?: string,
    column?: boolean,
    isApratment: boolean,
    transKey: string,
    values,
    options: any[],
    handleOptionCheckbox: HandleOptionCheckboxType
};

export const OptionsSelect: FC<OptionsSectionPropsType> = (props) => {
    const {
        name,
        column,
        values,
        transKey,
        isApratment,
        options = [],
        handleOptionCheckbox
    } = props;

    const {t} = useTranslation('filters');

    const onClick = (item) => () => {
        handleOptionCheckbox(name, item);
    };

    const classes = useStyles();
    return (
        <Grid
            container
            item
            className={classes.root}
        >
            {name && (
                <Typography variant='subtitle1'>
                    <strong>
                        {t(`${transKey}${name}.name`)}
                    </strong>
                </Typography>
            )}
            <Grid item container>
                {options.map(item => {
                    const checked = !!values[name]?.some((id => id === item.id));
                    return (
                        <Grid
                            item
                            container
                            alignItems='center'
                            key={item.id}
                            xs={column ? 12 : isApratment ? 3 : 4}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='secondary'
                                        name={item.name}
                                        checked={checked}
                                        onChange={onClick(item)}
                                    />
                                }
                                label={
                                    <Typography variant='subtitle1' component='p'>
                                        {t(`${transKey}${item.name}.name`)}
                                    </Typography>
                                }
                            />
                        </Grid>
                    );
                })}
                    </Grid>
                    </Grid>
                    );
                    };