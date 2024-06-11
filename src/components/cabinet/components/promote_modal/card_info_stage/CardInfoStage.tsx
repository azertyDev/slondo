import {FC} from 'react';
import {useRouter} from 'next/router';
import {Box, Card, Grid, TextField, Typography} from '@material-ui/core';
import {Trans, useTranslation} from 'next-i18next';
import ReactInputMask from 'react-input-mask';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

type CardInfoProps = {
    isSmsConfirm: boolean;
    formik;
};

export const CardInfoStage: FC<CardInfoProps> = props => {
    const {formik, isSmsConfirm} = props;

    const {locale} = useRouter();
    const {t} = useTranslation('cabinet');

    const {values, setValues, errors, touched} = formik;

    const {cardNumber, expireDate, code} = values;

    const handleInput =
        name =>
        ({target}) => {
            setValues({...values, [name]: target.value});
        };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.paymentCard}>
                <Grid container spacing={1} className="card-data">
                    <Grid container item xs={12} sm={6}>
                        {isSmsConfirm ? (
                            <Grid item sm={8} xs={12}>
                                <label htmlFor="code">
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        {t('type_sms_code')}:
                                    </Typography>
                                </label>
                                <TextField
                                    fullWidth
                                    autoFocus
                                    focused={false}
                                    value={code}
                                    size="small"
                                    variant="outlined"
                                    onChange={handleInput('code')}
                                    className={
                                        errors.code && touched.code
                                            ? 'error-border'
                                            : ''
                                    }
                                />
                            </Grid>
                        ) : (
                            <>
                                <Box maxWidth="184px" mb="20px">
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
                                        onChange={handleInput('cardNumber')}
                                    >
                                        {() => (
                                            <TextField
                                                fullWidth
                                                autoFocus
                                                focused={false}
                                                size="small"
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
                                </Box>
                                <Box width="100%">
                                    <Box maxWidth="100px">
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
                                            onChange={handleInput('expireDate')}
                                        >
                                            {() => (
                                                <TextField
                                                    fullWidth
                                                    focused={false}
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
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Grid>
                </Grid>
                {!isSmsConfirm && (
                    <Box display="flex" className="card-data-term">
                        <Typography>{t('card_data_term')}</Typography>
                    </Box>
                )}
            </Card>
            <div className="submit-btn-wrapper">
                <CustomButton type="submit">
                    {t(isSmsConfirm ? 'common:send' : 'continue')}
                </CustomButton>
            </div>
            {!isSmsConfirm && (
                <div className="payme-term-wrapper">
                    <Typography>
                        <Trans
                            components={{
                                a: (
                                    <a
                                        target="_blank"
                                        href={`https://cdn.payme.uz/terms/${locale}/main.html`}
                                    />
                                )
                            }}
                            defaults={t('payme_offer', {
                                offer: `<a>${t('offer')}</a>`
                            })}
                        />
                    </Typography>
                </div>
            )}
        </div>
    );
};
