import {FC} from 'react';
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';

type ContactsPropsType = {
    isAuction,
    values,
    handleInput,
    handleCheckboxChange,
} & WithT;

export const Contacts: FC<ContactsPropsType> = (props) => {
    const {
        t,
        isAuction,
        values,
        handleInput,
        handleCheckboxChange
    } = props;

    const classes = useStyles();
    return (
        <Grid item xs={12} sm={8} md={8} className={classes.root}>
            {isAuction && (
                <div className='display-phone'>
                    <Checkbox
                        color='primary'
                        checked={values.auction.display_phone}
                        onChange={handleCheckboxChange('display_phone')}
                    />
                    <Typography variant="subtitle1">
                        {t('filters:display_phone')}
                    </Typography>
                </div>
            )}
            <div>
                <Typography variant="subtitle1" className='add-num'>
                    <strong>
                        {t('filters:additional_phone')}:
                    </strong>
                </Typography>
                <FormikField
                    t={t}
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleInput}
                />
            </div>
        </Grid>
    );
};