import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {uzCardAPI} from '@src/api/api';
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    Card, Typography
} from '@material-ui/core';
import {Form, FormikProvider, useFormik} from 'formik';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {phonePrepare} from '@src/helpers';
import {RootState} from '@src/redux/rootReducer';
import {resetUserCardAction, setUserCardAction} from '@root/src/redux/slices/userCardSlice';
import {useModal} from '@src/hooks/useModal';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useStyles} from './useStyles';


export const SafetyDeal: FC = () => {
    const {t} = useTranslation('cabinet');
    const title = t('filters:safe_deal');

    const dispatch = useDispatch();
    const {user, userCard} = useSelector((store: RootState) => store);
    const userId = user.info.id;

    const hasCard = !!userCard.cardId;

    const [isFetch, setIsFetch] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
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

    const handleEditable = () => {
        setIsEditable(!isEditable);
    };

    const setCard = async ({cardNumber, expireDate, phone}) => {
        try {
            const cardLastSix = cardNumber.slice(10);
            const phoneLastNine = phonePrepare(phone).slice(3);

            const cardData = JSON.stringify({
                userId,
                expireDate,
                cardLastSix,
                phoneLastNine
            });

            setIsFetch(true);

            const {session} = await uzCardAPI.createCard(cardData);

            setValues({...values, session});
            setIsSmsConfirm(true);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
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

            const {card} = (await uzCardAPI.confirmSmsCode(data)).result;

            dispatch(setUserCardAction({
                cardName: card.cardName,
                owner: card.owner,
                balance: card.balance,
                cardId: card.cardId,
                expireDate: card.expireDate,
                number: card.number
            }));

            setIsFetch(false);
            setIsEditable(false);
            setIsSmsConfirm(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const removeCard = async () => {
        try {
            setIsFetch(true);

            await uzCardAPI.removeUserCard(userCard.cardId);

            handleModalClose();
            dispatch(resetUserCardAction());
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            handleModalClose();
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        hasCard && setValues({
            ...values,
            cardNumber: userCard.number,
            expireDate: userCard.expireDate,
            cardName: userCard.cardName
        });
    }, [hasCard]);

    console.log(values);
    console.log('userCard', userCard);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                <div className="wrapper">
                    <FormikProvider value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormControl component="div">
                                <FormGroup aria-label="position">
                                    <FormControlLabel
                                        labelPlacement="start"
                                        label={t('turn_on_editable')}
                                        control={
                                            <Switch
                                                color='primary'
                                                value={isEditable}
                                                onChange={handleEditable}
                                            />
                                        }
                                    />
                                </FormGroup>
                            </FormControl>
                            <div>
                                <Card className={classes.creditCard}>
                                    <Grid container spacing={1} className='card-info'>
                                        {isSmsConfirm
                                         ? <>
                                             <Grid
                                                 item
                                                 xs={4}
                                                 lg={3}
                                             >
                                                 <FormikField
                                                     t={t}
                                                     disabled={!isEditable}
                                                     name="confirm_code"
                                                     value={confirm_code}
                                                     labelText={t('confirm_code')}
                                                     placeholder={t('type_sms_code')}
                                                     onChange={handleNumericInput}
                                                 />
                                             </Grid>
                                         </>
                                         : <>
                                             <Grid
                                                 item
                                                 xs={12}
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
                                                      disabled={!isEditable}
                                                      placeholder={t('cardName')}
                                                      labelText={t('cardName')}
                                                      onChange={handleInput}
                                                  />}
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={12}
                                                 lg={5}
                                                 className='card-number-input'
                                             >
                                                 <FormikField
                                                     t={t}
                                                     value={cardNumber}
                                                     disabled={!isEditable || hasCard}
                                                     name="cardNumber"
                                                     placeholder="XXXX  XXXX  XXXX  XXXX"
                                                     labelText={t('card_number')}
                                                     onChange={handleNumericInput}
                                                 />
                                             </Grid>
                                             <Grid
                                                 item
                                                 xs={4}
                                                 lg={2}
                                                 className='expire-date-input'
                                             >
                                                 <FormikField
                                                     t={t}
                                                     value={expireDate}
                                                     disabled={!isEditable || hasCard}
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
                                                 container
                                                 spacing={1}
                                             >
                                                 <Grid
                                                     item
                                                     xs={6}
                                                     lg={hasCard ? 6 : 5}
                                                 >
                                                     {hasCard
                                                      ? <Typography>{userCard.owner}</Typography>
                                                      : <FormikField
                                                          t={t}
                                                          type='tel'
                                                          name="phone"
                                                          value={expireDate}
                                                          labelText={t('phone')}
                                                          onChange={handleNumericInput}
                                                          disabled={!isEditable || hasCard}
                                                      />}
                                                 </Grid>
                                             </Grid>
                                         </>}
                                    </Grid>
                                    <div className='save-btn-wrapper'>
                                        <CustomButton
                                            type='submit'
                                            disabled={!isEditable || isFetch}
                                        >
                                            {t(`common:${hasCard ? 'remove' : isSmsConfirm ? 'send' : 'save'}`)}
                                        </CustomButton>
                                    </div>
                                </Card>
                            </div>
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
            </CabinetWrapper>
        </div>
    );
};
