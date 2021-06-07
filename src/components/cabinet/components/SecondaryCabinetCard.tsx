import {FC, useState} from 'react';
import {Box, Divider, Tooltip, Typography} from '@material-ui/core';
import {CloseIcon, CrackerIcon, DoneAllIcon, LetterIcon} from '@src/components/elements/icons';
import {OffersStateType} from '@root/interfaces/Cabinet';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import StarIcon from '@material-ui/icons/Star';
import {WithT} from 'i18next';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {ResponsiveDialog} from '@src/components/elements/responsive_dialog/ResponsiveDialog';
import {useModal} from '@src/hooks/useModal';
import {Form, FormikProvider, useFormik} from 'formik';
import {regularFormSchema} from '@root/validation_schemas/createPostSchemas';
import {userAPI} from '@src/api/api';
import {FormikTextarea} from '../../elements/formik_textarea/FormikTextarea';
import {getErrorMsg} from '@src/helpers';
import {CustomSnackbar} from '@src/components/elements/snackbar/Snackbar';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    user?,
    offersData?: OffersStateType,
    handleOpenModal?: (id) => () => void,
    acceptOfferThePrice?: (offer_id, is_accepted) => () => void,
    fetchAllOffers?: (auction_id) => () => void,
} & WithT

export const SecondaryCabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {
        t,
        user,
        fetchAllOffers,
        acceptOfferThePrice
    } = props;

    const {modalOpen: ratingDialog, handleModalOpen: openRatingDialog, handleModalClose: closeRatingDialog} = useModal();
    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();
    const userId = useSelector((store: RootState) => store.user.info.id);
    const [showPhone, setShowOpen] = useState(false);
    const txtLimit = 3000;

    const onChangeRating = (event, rating) => {
        setValues({...values, rating});
    };
    const handleShowPhone = () => {
        setShowOpen(!showPhone);
    };
    const handleSubmitRating = async (values, {setSubmitting, setValues}) => {
        const {rating, comment} = values;
        try {
            setSubmitting(true);
            const {message} = await userAPI.setUserRating(rating, comment, user.author.id);
            await userAPI.getUserInfo();
            setSubmitting(false);
            setValues({...values, message});
            handleOpenSnackbar();
            closeRatingDialog();
        } catch ({message}) {
            setValues({...values, message});
        }
    };

    const formik = useFormik({
        onSubmit: handleSubmitRating,
        initialValues: {
            rating: '0',
            comment: '',
            message: ''
        },
        validationSchema: regularFormSchema
    });
    const {
        handleSubmit,
        values,
        handleChange,
        setValues,
        handleBlur,
        errors,
        touched
    } = formik;

    const canBeSubmitted = () => {
        const {rating} = values;
        return rating > 0;
    };

    const isEnabled = canBeSubmitted();

    const tooltipText = t('Доставка осуществляется за Ваш счет. В случае невыполнения доставки, Вы можете быть заблокированы. Ознакомиться с правилами «Есть доставка»');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <>
                {/*Продавец*/}
                {user.author && user.status === 'success' && (
                    <div className="profile-form">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Продавец
                            </Typography>
                            <Tooltip title={tooltipText} placement="left">
                                <div className='question-mark'>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        ?
                                    </Typography>
                                </div>
                            </Tooltip>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent avatar={user.author.avatar} />
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {user.author.name}
                            </Typography>
                            <Rating card readOnly ratingValue={user.author.rating?.slice(0, 3)} />
                            <CustomButton className='rate' onClick={openRatingDialog}>
                                <StarIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Оценить
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <Typography
                                variant="subtitle2"
                                color="initial"
                            >
                                <span>*</span> Оценка доступна в течении 90 календарных дней
                            </Typography>
                        </div>
                    </div>
                )}
                {/*Покупатель*/}
                {user.auction?.winner && (
                    <div className="profile-form">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Победитель
                            </Typography>
                            <Tooltip title={tooltipText} placement="left">
                                <div className='question-mark'>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        ?
                                    </Typography>
                                </div>
                            </Tooltip>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent avatar={user.auction.winner.avatar} />
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {user.auction.winner.name}
                            </Typography>
                            <Rating card />
                            <CustomButton className='write'>
                                <LetterIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Написать
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <CustomButton className="show-phone-btn" onClick={handleShowPhone}>
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    {showPhone
                                        ? user.auction.winner.phone
                                        : 'Показать номер'}
                                </Typography>
                            </CustomButton>
                            {/* <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    <span>*</span> Оценка доступна в течении 90
                                    календарных дней
                                </Typography> */}
                        </div>
                    </div>
                )}
                {/*Предложенная цена*/}
                {user.auction?.offer && !user.auction?.winner && (
                    <div className="offers-card">
                        <div className="extreme-rate">
                            <Typography variant="subtitle1" color="initial">
                                Предложенная цена ({user.auction.number_of_offers})
                            </Typography>
                            <Tooltip title={tooltipText} placement="left">
                                <div className='question-mark'>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        ?
                                    </Typography>
                                </div>
                            </Tooltip>
                        </div>
                        <div className="profile-user">
                            <UserAvatarComponent
                                avatar={user.auction.offer.user.avatar && user.auction.offer.user.avatar}
                            />
                            <Typography
                                variant="subtitle2"
                                color="initial"
                            >
                                {user.auction.offer.user.name}
                            </Typography>
                            <Rating card ratingValue={user.author?.rating} />
                            <Typography variant='h6'>{user.auction.offer.price} сум</Typography>
                            <CustomButton
                                className='accept'
                                onClick={acceptOfferThePrice(user.auction.offer.id, true)}
                            >
                                <DoneAllIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Принять
                                </Typography>
                            </CustomButton>
                            <CustomButton
                                className='decline'
                                onClick={acceptOfferThePrice(user.auction.offer.id, false)}
                            >
                                <CloseIcon />
                                <Typography
                                    variant="subtitle2"
                                    color="initial"
                                >
                                    Отказать
                                </Typography>
                            </CustomButton>
                        </div>
                        <div>
                            <Typography
                                variant='subtitle1'
                                onClick={fetchAllOffers(user.auction.id)}
                            >
                                Показать все предложения
                            </Typography>
                        </div>
                    </div>
                )}
                {/*Поздравляем! Вы победили в аукционе*/}
                {user.status === 'suspended' && user.auction.winner_id === userId && (
                    <Box className='profile-form'>
                        <Box display='flex' className='congrat'>
                            <div className='cracker-icon'>
                                <CrackerIcon />
                            </div>
                            <Typography variant='subtitle1'>
                                Поздравляем! Вы победили в аукционе № {user.auction.id}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1'>
                                Вы можете принять либо отказаться от победы в аукционе
                            </Typography>
                        </Box>
                    </Box>
                )}
            </>
            <ResponsiveDialog
                openDialog={ratingDialog ?? false}
                handleCloseDialog={closeRatingDialog}
                maxWidth='sm'
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    mb={1}
                >
                    <Typography variant='h6'>
                        Рейтинг
                    </Typography>
                </Box>
                <Box>
                    <UserInfoWithAvatar owner={user.author} isOwner={false} />
                </Box>
                <Divider className={classes.divider} />
                <Box
                    display='flex'
                    justifyContent='center'
                    mb={1}
                >
                    <Typography variant='h6'>
                        Оцените продавца
                    </Typography>
                </Box>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <Box
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Rating
                                card
                                readOnly={false}
                                name="rating"
                                className={classes.ratingComponent}
                                ratingValue={values.rating}
                                onChangeRating={onChangeRating}
                                ratingCount={user.author?.rating}
                            />
                            <FormikTextarea
                                placeholder='Поделитесь впечатлениями'
                                name='comment'
                                disableRequire={true}
                                onChange={handleChange}
                                rows={10}
                                value={values.comment}
                                onBlur={handleBlur}
                                labelTxt={t('Оставьте коментарий')}
                                errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                limit={txtLimit}
                            />
                            <CustomButton type='submit' disabled={!isEnabled}>
                                <Typography variant='subtitle1'>
                                    Оценить продавца
                                </Typography>
                            </CustomButton>
                        </Box>
                    </Form>
                </FormikProvider>
            </ResponsiveDialog>
            <CustomSnackbar
                message={t(values.message)}
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
                severity="success"
            />
        </div>
    );
};