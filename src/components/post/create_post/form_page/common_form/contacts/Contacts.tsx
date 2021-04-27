import React, {FC} from "react";
import {Checkbox, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {WithT} from "i18next";
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
                        checked={values.display_phone}
                        onChange={handleCheckboxChange('display_phone')}
                    />
                    <Typography variant="subtitle1">
                        {t('displayPhone')}
                    </Typography>
                </div>
            )}
            <div>
                <Typography variant="subtitle1">
                    <strong>{t('ownPhone')}:&nbsp;</strong>
                    <span>+{ownerPhone}</span>
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1">
                    <strong>
                        {t('additionalPhone')}:
                    </strong>
                </Typography>
                <CustomFormikField
                    t={t}
                    type="tel"
                    name="phone"
                    placeholder="+998 (__) ___ __ __"
                    value={values.phone}
                    onChange={handleInput}
                />
            </div>
        </div>
    )
};