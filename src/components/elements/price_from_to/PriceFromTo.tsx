import {FC} from 'react';
import {WithT} from 'i18next';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {useStyles} from './useStyles';
import {Typography} from '@material-ui/core';

type PriceFromToPropsType = {
    name: string,
    values,
    handleInput: (e) => void
} & WithT;

export const PriceFromTo: FC<PriceFromToPropsType> = (props) => {
    const {
        t,
        name,
        values,
        handleInput
    } = props;

    const {price} = values;

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
                    name='price_from'
                    placeholder={t('filters:from')}
                    value={price.from}
                    onChange={handleInput}
                    size='small'
                />
                <FormikField
                    t={t}
                    name='price_to'
                    placeholder={t('filters:to')}
                    value={price.to}
                    onChange={handleInput}
                    size='small'
                />
            </div>
        </div>
    );
};
