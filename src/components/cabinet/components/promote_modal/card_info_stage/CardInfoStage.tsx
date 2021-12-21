import {FC} from 'react';
import {Card, Grid, TextField, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {getErrorMsg} from '@src/helpers';
import ReactInputMask from 'react-input-mask';
import {useStyles} from './useStyles';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

type CardInfoProps = {
    isSmsConfirm: boolean;
    formik;
};

export const CardInfoStage: FC<CardInfoProps> = props => {
    const {formik, isSmsConfirm} = props;

    const {t} = useTranslation('cabinet');

    const {values, setValues, errors, touched} = formik;

    const {cardNumber, expireDate, code} = values;

    const {handleNumericInput, handleInput} = useHandlers(values, setValues);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Card className={classes.paymentCard}>
                    <Grid container spacing={1} alignContent="space-around">
                        {isSmsConfirm ? (
                            <Grid item sm={6} xs={12}>
                                <FormikField
                                    t={t}
                                    name="code"
                                    autoFocus
                                    value={code}
                                    placeholder={t('type_sms_code')}
                                    onChange={handleNumericInput}
                                    errorMsg={getErrorMsg(
                                        errors.code,
                                        touched.code,
                                        t
                                    )}
                                />
                            </Grid>
                        ) : (
                            <>
                                <Grid container item xs={12}>
                                    <Grid item xs={12} sm={6} md={5} lg={5}>
                                        <label htmlFor="cardNumber">
                                            <Typography
                                                variant="subtitle2"
                                                gutterBottom
                                            >
                                                {t('card_number')}:
                                            </Typography>
                                        </label>
                                        <ReactInputMask
                                            alwaysShowMask
                                            value={cardNumber}
                                            mask="9999 9999 9999 9999"
                                            onChange={handleInput}
                                        >
                                            {() => (
                                                <TextField
                                                    id="cardNumber"
                                                    fullWidth
                                                    focused={false}
                                                    size="small"
                                                    name="cardNumber"
                                                    variant="outlined"
                                                    className={
                                                        errors.cardNumber &&
                                                        touched.cardNumber
                                                            ? 'error-border'
                                                            : ''
                                                    }
                                                />
                                            )}
                                        </ReactInputMask>
                                        {errors.cardNumber &&
                                            touched.cardNumber && (
                                                <Typography
                                                    variant="subtitle2"
                                                    className="error-text"
                                                >
                                                    {t(
                                                        `errors:${errors.cardNumber}`
                                                    )}
                                                </Typography>
                                            )}
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={6} sm={4} md={3} lg={3}>
                                        <label htmlFor="expireDate">
                                            <Typography
                                                variant="subtitle2"
                                                gutterBottom
                                            >
                                                {t('expiration_date')}:
                                            </Typography>
                                        </label>
                                        <ReactInputMask
                                            mask="99/99"
                                            alwaysShowMask
                                            value={expireDate}
                                            onChange={handleInput}
                                        >
                                            {() => (
                                                <TextField
                                                    fullWidth
                                                    id="expireDate"
                                                    focused={false}
                                                    name="expireDate"
                                                    variant="outlined"
                                                    className={
                                                        errors.expireDate &&
                                                        touched.expireDate
                                                            ? 'error-border'
                                                            : ''
                                                    }
                                                />
                                            )}
                                        </ReactInputMask>
                                        {errors.expireDate &&
                                            touched.expireDate && (
                                                <Typography
                                                    variant="subtitle2"
                                                    className="error-text"
                                                >
                                                    {t(
                                                        `errors:${errors.expireDate}`
                                                    )}
                                                </Typography>
                                            )}
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Card>
            </Grid>
            <CustomButton className="next-btn" type="submit">
                {t(`common:${isSmsConfirm ? 'send' : 'apply'}`)}
            </CustomButton>
        </div>
    );
};
