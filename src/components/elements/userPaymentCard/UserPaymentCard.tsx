import {FC, useContext, useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Card, Grid, TextField, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useTranslation} from 'react-i18next';
import {useModal} from '@src/hooks/useModal';
import {useHandlers} from '@src/hooks/useHandlers';
import {formatCardData, getErrorMsg, phonePrepare} from '@src/helpers';
import {myUzCardAPI} from '@src/api/api';
import ReactInputMask from "react-input-mask";
import {useUserPaymentCard} from '@src/hooks/useUserPaymentCard';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ErrorCtx, UserCtx} from "@src/context";
import {unstable_batchedUpdates} from "react-dom";
import {paymentCardSchema} from "@root/validation_schemas/paymentCardSchema";
import {codeSchema} from "@root/validation_schemas/authRegSchema";
import {useStyles} from './useStyles';

export const UserPaymentCard: FC = () => {
    const {t} = useTranslation('cabinet');

    const {user} = useContext(UserCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const {
        userCard,
        isFetchUserCard,
        fetchUserCard,
        handleResetUserCard
    } = useUserPaymentCard();

    const hasCard = !!userCard.cardId;

    const [isFetch, setIsFetch] = useState(false);
    const [isSmsConfirm, setIsSmsConfirm] = useState(false);
    const {modalOpen, handleModalClose, handleModalOpen} = useModal();

    const initVals = {
        session: '',
        code: '',
        cardName: '',
        expireDate: '__/__',
        phone: '+998(__) ___ __ __',
        cardNumber: '____ ____ ____ ____'
    };

    const onSubmit = (values) => {
        isSmsConfirm
            ? confirmSmsCode(values)
            : hasCard ? handleModalOpen() : setCard(values);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: hasCard ? null : isSmsConfirm ? codeSchema : paymentCardSchema
    });

    const {values, setValues, errors, touched} = formik;

    const {
        cardName,
        cardNumber,
        expireDate,
        code
    } = values;

    const {handleNumericInput, handleInput} = useHandlers(values, setValues);

    const setCard = async ({cardNumber, expireDate, phone}) => {
        try {
            const phoneLastNine = phonePrepare(phone).slice(3);
            cardNumber = formatCardData(cardNumber);
            expireDate = formatCardData(expireDate, true);

            const cardData = JSON.stringify({
                userId: user.id,
                expireDate,
                cardNumber,
                phoneLastNine
            });

            setIsFetch(true);

            const {session} = await myUzCardAPI.createCard(cardData);

            await setValues({...values, session});

            unstable_batchedUpdates(() => {
                setIsSmsConfirm(true);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const confirmSmsCode = async ({session, cardName, code}) => {
        try {
            const data = JSON.stringify({
                session,
                cardName,
                otp: code,
                isTrusted: 1
            });

            setIsFetch(true);

            await myUzCardAPI.confirmSmsCode(data);
            await fetchUserCard();

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setIsSmsConfirm(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const removeCard = async () => {
        try {
            setIsFetch(true);

            await myUzCardAPI.removeUserCard(userCard.id);

            unstable_batchedUpdates(() => {
                handleResetUserCard();
                handleModalClose();
                setValues(initVals);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                handleModalClose();
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        fetchUserCard();
    }, []);

    useEffect(() => {
        hasCard && setValues({
            ...values,
            cardName: userCard.cardName,
            cardNumber: userCard.number,
            expireDate: `${userCard.expireDate.slice(2)}/${userCard.expireDate.slice(0, 2)}`
        });
    }, [hasCard]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    {isFetchUserCard
                        ? <CustomCircularProgress/>
                        : <>
                            {!hasCard && (
                                <div className='safe-deal-title'>
                                    <Typography variant='subtitle1'>
                                        {t('add_card_for_safe_deal')}
                                    </Typography>
                                </div>
                            )}
                            <Card className={classes.paymentCard}>
                                <Grid container spacing={1} className='card-info'>
                                    {isSmsConfirm
                                        ? <>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <FormikField
                                                    t={t}
                                                    name="code"
                                                    value={code}
                                                    placeholder={t('type_sms_code')}
                                                    onChange={handleNumericInput}
                                                    errorMsg={getErrorMsg(errors.code, touched.code, t)}
                                                />
                                            </Grid>
                                        </>
                                        : <>
                                            <Grid item container xs={12}>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    lg={6}
                                                    className='card-name-wrapper'
                                                >
                                                    {hasCard
                                                        ? <Typography variant='subtitle1'>
                                                            {userCard.cardName}
                                                        </Typography>
                                                        : <FormikField
                                                            t={t}
                                                            name="cardName"
                                                            value={cardName}
                                                            disabled={hasCard}
                                                            placeholder={t('cardName')}
                                                            labelText={t('cardName')}
                                                            onChange={handleInput}
                                                            errorMsg={getErrorMsg(errors.cardName, touched.cardName, t)}
                                                        />}
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={9}
                                                sm={6}
                                                className='card-number-input'
                                            >
                                                <Typography variant='subtitle2' gutterBottom>
                                                    {t('card_number')}:&nbsp;
                                                    {hasCard
                                                        ? userCard.number
                                                        : <ReactInputMask
                                                            alwaysShowMask
                                                            value={cardNumber}
                                                            mask='9999 9999 9999 9999'
                                                            onChange={handleInput}
                                                        >
                                                            {() => <TextField
                                                                fullWidth
                                                                focused={false}
                                                                size='small'
                                                                name="cardNumber"
                                                                variant="outlined"
                                                                className={errors.cardNumber && touched.cardNumber ? 'error-border' : ''}
                                                            />}
                                                        </ReactInputMask>}
                                                </Typography>
                                                {errors.cardNumber && touched.cardNumber && (
                                                    <Typography variant="subtitle2" className='error-text'>
                                                        <span>
                                                            {t(`errors:${errors.cardNumber}`)}
                                                        </span>
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid
                                                item
                                                xs={5}
                                                sm={3}
                                                className='expire-date-input'
                                            >
                                                <Typography variant='subtitle2' gutterBottom>
                                                    {t('expiration_date')}:&nbsp;
                                                    {hasCard
                                                        ? expireDate
                                                        : <ReactInputMask
                                                            mask='99/99'
                                                            alwaysShowMask
                                                            value={expireDate}
                                                            onChange={handleInput}
                                                        >
                                                            {() => <TextField
                                                                fullWidth
                                                                focused={false}
                                                                size='small'
                                                                name="expireDate"
                                                                variant="outlined"
                                                                className={errors.expireDate && touched.expireDate ? 'error-border' : ''}
                                                            />}
                                                        </ReactInputMask>}
                                                </Typography>
                                                {errors.expireDate && touched.expireDate && (
                                                    <Typography variant="subtitle2" className='error-text'>
                                                        <span>
                                                            {t(`errors:${errors.expireDate}`)}
                                                        </span>
                                                    </Typography>
                                                )}
                                            </Grid>
                                            {hasCard && (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={4}
                                                >
                                                    <Typography variant='subtitle2' gutterBottom>
                                                        {t('balance')}:&nbsp;
                                                        {userCard.balance}&nbsp;
                                                        <span>{t('common:sum')}</span>
                                                    </Typography>
                                                </Grid>
                                            )}
                                            <Grid
                                                item
                                                xs={9}
                                            >
                                                {hasCard
                                                    ? <Typography>{userCard.owner}</Typography>
                                                    : <>
                                                        <Typography variant='subtitle2'>
                                                            {t('auth_reg:enter_phone')}
                                                        </Typography>
                                                        <FormikField
                                                            t={t}
                                                            type='tel'
                                                            name="phone"
                                                            disabled={hasCard}
                                                            value={expireDate}
                                                            onChange={handleInput}
                                                            errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                                                        />
                                                    </>}
                                            </Grid>
                                        </>}
                                </Grid>
                                <div className='save-btn-wrapper'>
                                    <CustomButton
                                        type='submit'
                                        disabled={isFetch}
                                    >
                                        {t(`common:${hasCard ? 'remove' : isSmsConfirm ? 'send' : 'save'}`)}
                                    </CustomButton>
                                </div>
                            </Card>
                        </>}
                </Form>
            </FormikProvider>
            <ConfirmModal
                open={modalOpen}
                title={t('card_remove_txt')}
                cancelTxt={t('common:cancel')}
                confirmTxt={t('common:yes')}
                handleConfirm={removeCard}
                handleClose={handleModalClose}
            />
        </div>
    );
};
