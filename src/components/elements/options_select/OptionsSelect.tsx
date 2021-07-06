import {FC} from 'react';
import {WithT} from 'i18next';
import {Checkbox, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
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
            item
            container
            xs={12}
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
                            key={item.id}
                            xs={column ? 12 : isApratment ? 3 : 4}
                            alignItems='center'
                        >
                            <Checkbox
                                color='primary'
                                name={item.name}
                                checked={checked}
                                onChange={onClick(item)}
                            />
                            <Typography>
                                {t(`filters:${item.name}`)}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};