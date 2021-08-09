import {FC, useContext, useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Card, Grid, TextField, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from "@src/components/elements/confirm_modal/Confirm_modal";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {formatCardData, getErrorMsg, phonePrepare} from '@src/helpers';
import ReactInputMask from "react-input-mask";
import {paymentCardSchema} from "@root/validation_schemas/paymentCardSchema";
import {codeSchema} from "@root/validation_schemas/authRegSchema";
import {myUzCardAPI} from "@src/api/api";
import {unstable_batchedUpdates} from "react-dom";
import {AuthCtx, ErrorCtx} from "@src/context";
import {useModal} from "@src/hooks";
import {useStyles} from './useStyles';

type UserPaymentCardProps = {
    userCard,
    isFetchUserCard: boolean,
    hasPost?: boolean,
    onClose?: () => void,
    handleResetUserCard: () => void,
    fetchUserCard: () => Promise<void>
}

export const UserPaymentCard: FC<UserPaymentCardProps> = (props) => {
    const {
        hasPost,
        onClose,
        userCard,
        fetchUserCard,
        isFetchUserCard,
        handleResetUserCard
    } = props;

    const {user} = useContext(AuthCtx);
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [isSmsConfirm, setIsSmsConfirm] = useState(false);

    const {
        modalOpen: confirmModalOpen,
        handleModalClose: handleConfirmClose,
        handleModalOpen: handleConfirmOpen
    } = useModal();

    const hasCard = !!userCard.cardId;

    const initVals = {
        session: '',
        code: '',
        cardName: '',
        expireDate: 'гг/мм',
        phone: '+998(__) ___ __ __',
        cardNumber: '____ ____ ____ ____'
    };

    const addCard = async ({cardNumber, expireDate, phone}) => {
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
                !hasPost && onClose();
                setIsFetch(false);
                setIsSmsConfirm(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsFetch(false);
            });
        }
    };

    const handleReset = () => {
        setValues(initVals);
        handleResetUserCard();
    };

    const removeCard = async () => {
        try {
            setIsFetch(true);

            await myUzCardAPI.removeUserCard(userCard.id);

            unstable_batchedUpdates(() => {
                handleReset();
                fetchUserCard();
                handleConfirmClose();
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                handleConfirmClose();
                setErrorMsg(e.message);
                setIsFetch(false);
            });
        }
    };

    const onSubmit = (values) => {
        isSmsConfirm
            ? confirmSmsCode(values)
            : hasCard ? handleConfirmOpen() : addCard(values);
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

    useEffect(() => {
        hasCard && setValues({
            ...values,
            cardName: userCard.cardName,
            cardNumber: userCard.number,
            expireDate: `${userCard.expireDate.slice(2)}/${userCard.expireDate.slice(0, 2)}`
        });
    }, [userCard]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    {isFetchUserCard
                        ? <CustomCircularProgress />
                        : <Grid container spacing={3}>
                            {!hasCard && (
                                <Grid item xs={12}>
                                    <Typography variant='subtitle1' component='p' align='center'>
                                        {t('add_card_for_safe_deal')}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid container item xs={12}>
                                <Card className={classes.paymentCard}>
                                    <Grid container spacing={1} alignContent='space-between'>
                                        {isSmsConfirm
                                            ? <>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
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
                                                    <Grid item xs={12} sm={8}>
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
                                                            />
                                                        }
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={hasCard ? 12 : 5}
                                                >
                                                    {hasCard
                                                        ? <Typography variant='subtitle2' gutterBottom>
                                                            {t('card_number')}:&nbsp; {userCard.number}
                                                        </Typography>
                                                        : <>
                                                            <label htmlFor="cardNumber">
                                                                <Typography variant="subtitle2" gutterBottom>
                                                                    {t('card_number')}:
                                                                </Typography>
                                                            </label>
                                                            <ReactInputMask
                                                                alwaysShowMask
                                                                value={cardNumber}
                                                                mask='9999 9999 9999 9999'
                                                                onChange={handleInput}
                                                            >
                                                                {() => <TextField
                                                                    id='cardNumber'
                                                                    fullWidth
                                                                    focused={false}
                                                                    size='small'
                                                                    name="cardNumber"
                                                                    variant="outlined"
                                                                    className={errors.cardNumber && touched.cardNumber ? 'error-border' : ''}
                                                                />}
                                                            </ReactInputMask>
                                                            {errors.cardNumber && touched.cardNumber && (
                                                                <Typography variant="subtitle2"
                                                                            className='error-text'>
                                                                    {t(`errors:${errors.cardNumber}`)}
                                                                </Typography>
                                                            )}
                                                        </>
                                                    }
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={hasCard ? 12 : 6}
                                                    sm={hasCard ? 12 : 3}
                                                >
                                                    {hasCard
                                                        ? <Typography variant='subtitle2' gutterBottom>
                                                            {t('expiration_date')}:&nbsp; {expireDate}
                                                        </Typography>
                                                        : <>
                                                            <label htmlFor="expireDate">
                                                                <Typography variant='subtitle2' gutterBottom>
                                                                    {t('expiration_date')}:
                                                                </Typography>
                                                            </label>
                                                            <ReactInputMask
                                                                mask='99/99'
                                                                alwaysShowMask
                                                                value={expireDate}
                                                                onChange={handleInput}
                                                            >
                                                                {() => <TextField
                                                                    fullWidth
                                                                    id='expireDate'
                                                                    focused={false}
                                                                    name="expireDate"
                                                                    variant="outlined"
                                                                    className={errors.expireDate && touched.expireDate ? 'error-border' : ''}
                                                                />}
                                                            </ReactInputMask>
                                                            {errors.expireDate && touched.expireDate && (
                                                                <Typography variant="subtitle2" className='error-text'>
                                                                    {t(`errors:${errors.expireDate}`)}
                                                                </Typography>
                                                            )}
                                                        </>
                                                    }
                                                </Grid>
                                                {hasCard && (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={hasCard ? 12 : 4}
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
                                                    xs={12}
                                                    sm={hasCard ? 12 : 8}
                                                >
                                                    {hasCard
                                                        ? <Typography>{userCard.owner}</Typography>
                                                        : <>
                                                            <label htmlFor="phone">
                                                                <Typography variant='subtitle2' gutterBottom>
                                                                    {t('auth_reg:enter_phone')}
                                                                </Typography>
                                                            </label>
                                                            <FormikField
                                                                t={t}
                                                                id='phone'
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
                                        <Grid item xs={12} container justifyContent='flex-end'>
                                            <Grid item xs={4}>
                                                <CustomButton
                                                    type='submit'
                                                    disabled={isFetch}
                                                >
                                                    {t(`common:${hasCard
                                                        ? 'remove'
                                                        : isSmsConfirm ? 'send' : 'save'}`)}
                                                </CustomButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    }
                </Form>
            </FormikProvider>
            <ConfirmModal
                open={confirmModalOpen}
                title={t('card_remove_txt')}
                cancelTxt={t('common:cancel')}
                confirmTxt={t('common:yes')}
                handleConfirm={removeCard}
                handleClose={handleConfirmClose}
            />
        </div>
    );
};
