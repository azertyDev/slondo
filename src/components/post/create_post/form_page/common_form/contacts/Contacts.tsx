import {FC} from 'react';
import {Checkbox, Typography} from '@material-ui/core';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';


type ContactsPropsType = {
    isAuction,
    values,
    handleInput,
    handleCheckboxChange,
    ownerPhone: string
} & WithT;

export const Contacts: FC<ContactsPropsType> = (props) => {
    const {
        t,
        isAuction,
        values,
        handleInput,
        ownerPhone,
        handleCheckboxChange
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                <Typography variant="subtitle1">
                    <strong>{t('filters:own_phone')}:&nbsp;</strong>
                    <span>+{ownerPhone}</span>
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1">
                    <strong>
                        {t('filters:additional_phone')}:
                    </strong>
                </Typography>
                <CustomFormikField
                    t={t}
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleInput}
                />
            </div>
        </div>
    );
};