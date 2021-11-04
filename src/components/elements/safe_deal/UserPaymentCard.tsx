import {FC, useContext, useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Card, Grid, TextField, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {Trans, useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {cookieOpts, cookies, formatCardData, getErrorMsg, phonePrepare} from '@src/helpers';
import ReactInputMask from 'react-input-mask';
import {paymentCardSchema} from '@root/validation_schemas/paymentCardSchema';
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {LinkText} from '@src/components/elements/safe_deal/PostInfo';
import {myUzCardAPI, userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from 'react-dom';
import {AuthCtx, ErrorCtx} from '@src/context';
import {useModal} from '@src/hooks';
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

    const {user, addUser} = useContext(AuthCtx);
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
        name: '',
        surname: '',
        session: '',
        code: '',
        cardName: '',
        expireDate: '__/__',
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

    const confirmSmsCode = async ({name, surname, session, cardName, code}) => {
        try {
            const data = JSON.stringify({
                session,
                cardName,
                otp: code,
                isTrusted: 1
            });

            const userInfo: any = {name};
            if (surname) userInfo.surname = surname;

            setIsFetch(true);

            await myUzCardAPI.confirmSmsCode(data);
            await fetchUserCard();
            const updatedUserInfo = await userAPI.changeUserInfo(userInfo);

            cookies.set('slondo_user', updatedUserInfo, cookieOpts);

            unstable_batchedUpdates(() => {
                !hasPost && onClose && onClose();
                addUser(updatedUserInfo);
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
        setTouched({});
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

    const {
        values,
        setValues,
        errors,
        touched,
        setTouched,
        handleChange
    } = formik;

    const {
        cardName,
        cardNumber,
        expireDate,
        code
    } = values;

    const {handleNumericInput, handleInput} = useHandlers(values, setValues);

    useEffect(() => {
        const userVals = {...values};

        if (user.id) {
            userVals.name = user.name;
            userVals.surname = user.surname ?? '';
        }

        if (hasCard) {
            userVals.cardName = userCard.cardName;
            userVals.cardNumber = userCard.number;
            userVals.expireDate = `${userCard.expireDate.slice(2)}/${userCard.expireDate.slice(0, 2)}`;
        }

        setValues(userVals);
    }, [user.id, userCard]);

    const classes = useStyles({hasCard});
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    {isFetchUserCard
                        ? <CustomCircularProgress/>
                        : <>
                            <Grid container spacing={3}>
                                {!hasCard && (
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' component='p'>
                                            {t('add_card_for_safe_deal')}
                                        </Typography>
                                    </Grid>
                                )}
                                <Grid container item  spacing={3}>
                                    <Grid item xs={12} lg={10}>
                                        {!hasCard && (
                                            <Typography variant='subtitle1' gutterBottom>
                                                {t('common:personalData')}
                                            </Typography>
                                        )}
                                        <FormikField
                                            t={t}
                                            name='name'
                                            disabled={hasCard}
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder={t('filters:user_name')}
                                            errorMsg={getErrorMsg(
                                                errors.name,
                                                touched.name,
                                                t,
                                                t('name_must')
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <FormikField
                                            t={t}
                                            name='surname'
                                            disabled={hasCard}
                                            value={values.surname}
                                            onChange={handleChange}
                                            placeholder={t('filters:user_surname')}
                                            errorMsg={getErrorMsg(
                                                errors.surname,
                                                touched.surname,
                                                t,
                                                t('surname_must')
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} lg={10}>
                                    {!hasCard && (
                                        <Typography variant='subtitle1' gutterBottom>
                                            Добавить карту
                                        </Typography>
                                    )}
                                    <Card className={classes.paymentCard}>
                                        <Grid container spacing={1} alignContent='space-between'>
                                            {isSmsConfirm
                                                ? <>
                                                    <Grid
                                                        item
                                                        sm={6}
                                                        xs={12}
                                                    >
                                                        <FormikField
                                                            t={t}
                                                            name="code"
                                                            autoFocus
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
                                                                    <Typography variant="subtitle2"
                                                                                className='error-text'>
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
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid container item xs={12} lg={10} justifyContent='center'>
                                    <CustomButton
                                        type='submit'
                                        disabled={isFetch}
                                        className='submit-btn'
                                    >
                                        {t(`common:${hasCard
                                            ? 'remove'
                                            : isSmsConfirm ? 'send' : 'save'}`)}
                                    </CustomButton>
                                    {!hasCard && (
                                        <>
                                            <Typography
                                                component='p'
                                                align='center'
                                                variant='subtitle1'
                                                color='textSecondary'
                                            >
                                                <Trans
                                                    t={t}
                                                    i18nKey="post:safeDealCondition"
                                                    components={[<LinkText href='/help/safe_deal_offer' />]}
                                                />
                                            </Typography>
                                            <LinkText href='/help/safe_shopping/concept'>
                                                <Typography
                                                    component='p'
                                                    align='center'
                                                    variant='subtitle1'
                                                >
                                                    {t('post:whySafeDealNeed')}
                                                </Typography>
                                            </LinkText>

                                        </>

                                    )}
                                </Grid>
                            </Grid>
                        </>
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
