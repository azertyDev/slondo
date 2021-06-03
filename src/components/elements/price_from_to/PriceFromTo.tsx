import {FC} from 'react';
import {WithT} from 'i18next';
import {TextField, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type PriceFromToPropsType = {
    name: string,
    values,
    disabled: boolean,
    handleInput: (e) => void
} & WithT;

export const PriceFromTo: FC<PriceFromToPropsType> = (props) => {
    const {
        t,
        name,
        values,
        disabled,
        handleInput
    } = props;

    const {price_from, price_to} = values;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                <strong>
                    {t(`filters:${name}`)}
                </strong>
            </Typography>
            <div className='price-from-to'>
                <TextField
                    size='small'
                    name='price_from'
                    variant='outlined'
                    disabled={disabled}
                    value={price_from}
                    onChange={handleInput}
                    placeholder={t('filters:from')}
                />
                <TextField
                    size='small'
                    name='price_to'
                    variant='outlined'
                    disabled={disabled}
                    value={price_to}
                    onChange={handleInput}
                    placeholder={t('filters:to')}
                />
            </div>
        </div>
    );
};
