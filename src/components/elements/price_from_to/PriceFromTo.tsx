import {FC} from 'react';
import {WithT} from 'i18next';
import {Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
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
                <FormikField
                    t={t}
                    size='small'
                    name='price_from'
                    disabled={disabled}
                    value={price_from}
                    onChange={handleInput}
                    placeholder={t('filters:from')}
                />
                <FormikField
                    t={t}
                    size='small'
                    name='price_to'
                    disabled={disabled}
                    value={price_to}
                    onChange={handleInput}
                    placeholder={t('filters:to')}
                />
            </div>
        </div>
    );
};
