import {FC} from 'react';
import {WithT} from 'i18next';
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../deployed_select/useStyles';

export type HandleOptionCheckboxType = (name: string, value) => void;

type OptionsSectionPropsType = {
    name?: string,
    row?: boolean,
    values,
    options: any[],
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const OptionsSelect: FC<OptionsSectionPropsType> = (props) => {
    const {
        t,
        name,
        row,
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
                        {t(`filters:${name}`)}
                    </strong>
                </Typography>
            )}
            <Grid container direction={row ? 'row' : 'column'}>
                {options.map(item => {
                    const checked = !!values[name]?.some(({id}) => id === item.id);
                    return (
                        <Grid
                            item
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
                                {t(`filters:${item.name}`)}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};