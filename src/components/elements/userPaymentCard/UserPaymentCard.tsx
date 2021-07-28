import {FC, useContext, useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Card, Grid, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useTranslation} from 'react-i18next';
import {useModal} from '@src/hooks/useModal';
import {useHandlers} from '@src/hooks/useHandlers';
import {phonePrepare} from '@src/helpers';
import {myUzCardAPI} from '@src/api/api';
import {useUserPaymentCard} from '@src/hooks/useUserPaymentCard';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ErrorCtx, UserCtx} from "@src/context";
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
        cardNumber: '',
        expireDate: '',
        phone: '',
        session: '',
        confirm_code: '',
        cardName: ''
    };

    const onSubmit = (values) => {
        isSmsConfirm
        ? confirmSmsCode(values)
        : hasCard ? handleModalOpen() : setCard(values);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals
    });

    const {values, setValues} = formik;
    const {
        cardName,
        cardNumber,
        expireDate,
        confirm_code
    } = values;

    const {handleNumericInput, handleInput} = useHandlers(values, setValues);

    const setCard = async ({cardNumber, expireDate, phone}) => {
        try {
            const phoneLastNine = phonePrepare(phone).slice(3);
            const cardData = JSON.stringify({
                userId: user.id,
                expireDate,
                cardNumber,
                phoneLastNine
            });

            setIsFetch(true);

            const {session} = await myUzCardAPI.createCard(cardData);

            await setValues({...values, session});
            setIsSmsConfirm(true);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const confirmSmsCode = async ({session, cardName, confirm_code}) => {
        try {
            const data = JSON.stringify({
                session,
                cardName,
                otp: confirm_code,
                isTrusted: 1
            });

            setIsFetch(true);

            await myUzCardAPI.confirmSmsCode(data);
            await fetchUserCard();

            setIsFetch(false);
            setIsSmsConfirm(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const removeCard = async () => {
        try {
            setIsFetch(true);

            await myUzCardAPI.removeUserCard(userCard.id);

            handleResetUserCard();
            handleModalClose();
            setValues(initVals);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            handleModalClose();
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchUserCard();
    }, []);

    useEffect(() => {
        hasCard && setValues({
            ...values,
            cardNumber: userCard.number,
            expireDate: userCard.expireDate,
            cardName: userCard.cardName
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
                                          xs={5}
                                      >
                                          <FormikField
                                              t={t}
                                              name="confirm_code"
                                              value={confirm_code}
                                              labelText={t('sms_code')}
                                              placeholder={t('type_sms_code')}
                                              onChange={handleNumericInput}
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
                                               />}
                                          </Grid>
                                      </Grid>
                                      <Grid
                                          item
                                          xs={12}
                                          lg={6}
                                          className='card-number-input'
                                      >
                                          <FormikField
                                              t={t}
                                              value={cardNumber}
                                              disabled={hasCard}
                                              name="cardNumber"
                                              placeholder="XXXX  XXXX  XXXX  XXXX"
                                              labelText={t('card_number')}
                                              onChange={handleNumericInput}
                                          />
                                      </Grid>
                                      <Grid
                                          item
                                          xs={3}
                                          lg={2}
                                          className='expire-date-input'
                                      >
                                          <FormikField
                                              t={t}
                                              value={expireDate}
                                              disabled={hasCard}
                                              name="expireDate"
                                              placeholder="xx/xx"
                                              labelText={t('expiration_date')}
                                              onChange={handleNumericInput}
                                          />
                                      </Grid>
                                      {hasCard && (
                                          <Grid
                                              item
                                              xs={4}
                                          >
                                              <Typography variant='subtitle1'>
                                                  {userCard.balance}&nbsp;
                                                  <span>{t('sum')}</span>
                                              </Typography>
                                          </Grid>
                                      )}
                                      <Grid
                                          item
                                          xs={hasCard ? 12 : 4}
                                      >
                                          {hasCard
                                           ? <Typography>{userCard.owner}</Typography>
                                           : <FormikField
                                               t={t}
                                               type='tel'
                                               name="phone"
                                               disabled={hasCard}
                                               value={expireDate}
                                               onChange={handleInput}
                                               labelText={t('auth_reg:enter_phone')}
                                           />}
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
