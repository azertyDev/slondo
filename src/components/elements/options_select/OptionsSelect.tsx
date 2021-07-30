import {FC} from 'react';
import {WithT} from 'i18next';
import {Checkbox, FormControlLabel, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../deployed_select/useStyles';

export type HandleOptionCheckboxType = (name: string, value) => void;

type OptionsSectionPropsType = {
    name?: string,
    column?: boolean,
    isApratment: boolean,
    values,
    options: any[],
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const OptionsSelect: FC<OptionsSectionPropsType> = (props) => {
    const {
        t,
        name,
        column,
        isApratment,
        values,
        options = [],
        handleOptionCheckbox
    } = props;

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
                        {t(`filters:${name}`)}
                    </strong>
                </Typography>
            )}
            <Grid item container>
                {options.map(item => {
                    const checked = !!values[name]?.some(({id}) => id === item.id);
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
                                        {t(`filters:${item.name}`)}
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