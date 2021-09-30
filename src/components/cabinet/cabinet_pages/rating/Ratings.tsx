import {FC, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {userAPI} from '@src/api/api';
import {AuthCtx, ErrorCtx} from '@src/context';
import {useDate, useModal} from '@src/hooks';
import {Form, FormikProvider, useFormik} from 'formik';
import {unstable_batchedUpdates} from 'react-dom';
import {regularFormSchema} from '@root/validation_schemas/postSchemas';
import {useStyles} from '@src/components/cabinet/cabinet_pages/rating/useStyles';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {TEXT_LIMIT} from '@src/constants';
import {getErrorMsg} from '@src/helpers';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';

export const Ratings: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initCommentData = {
        author: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: '',
            created_at: '',
            available_days: []
        },
        comment: {
            id: null,
            comment: ''
        }
    };

    const [isFetch, setIsFetch] = useState(false);
    const [userRatings, setUserRatings] = useState([]);
    const [commentData, setCommentData] = useState(initCommentData);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const {user: {id, rating, observer: {number_of_ratings}}} = useContext(AuthCtx);
    const {getDate} = useDate();

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const fetchUserRatings = async () => {
        try {
            setIsFetch(true);
            const {data} = await userAPI.getAllUserRating();
            unstable_batchedUpdates(() => {
                setUserRatings(data);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsFetch(false);
            });
        }
    };

    const onReplyBtnClick = (author, comment) => () => {
        unstable_batchedUpdates(() => {
            handleModalOpen();
            setCommentData({author, comment});
        });
    };

    const onSubmit = async (values, {setSubmitting, setValues}) => {
        const {comment} = values;
        try {
            setSubmitting(true);
            await userAPI.setReplyComment(commentData.comment.id, comment);
            await fetchUserRatings();
            unstable_batchedUpdates(() => {
                handleModalClose();
                setSubmitting(false);
                setValues({...values, comment});
            });
        } catch ({message}) {
            setValues({...values, message});
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {
            comment: ''
        },
        validationSchema: regularFormSchema
    });

    const {
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched
    } = formik;

    const handleReply = (comment_id: number, comment: string) => async () => {
        try {
            await userAPI.setReplyComment(comment_id, comment);
            fetchUserRatings();
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchUserRatings();
    }, []);

    const classes = useStyles();
    return (
        <>
            <Grid container spacing={isXsDown ? 0 : 2} className={classes.root}>
                <Grid item xs={12} container>
                    <Rating
                        readOnly
                        name="rating"
                        ratingValue={rating}
                        ratingCount={number_of_ratings}
                        className='mainRating'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box width={1} my={2} p='5px 30px' className='ratingHeader'>
                        <Typography variant='h6'>
                            {t('reviews_rating')}
                        </Typography>
                    </Box>
                    {userRatings.map(({comments, rating}, index) => {
                        const [mainComment, ...replyComments] = comments;
                        const {time} = getDate(mainComment?.created_at);
                        return (
                            <Box key={index} className='review' pb={2} mb={2}>
                                <Box mb={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={10} container justifyContent='center'>
                                            <Grid item xs={2} container justifyContent='center'>
                                                <UserAvatarComponent
                                                    userId={id}
                                                    width={isXsDown ? '30px' : '50px'}
                                                    height={isXsDown ? '30px' : '50px'}
                                                    avatar={mainComment?.author?.avatar}
                                                />
                                            </Grid>
                                            <Grid item xs={10} container alignItems='center'>
                                                <Grid item xs={12} sm={8}>
                                                    <Typography variant='subtitle1' gutterBottom>
                                                        <strong>
                                                            {`${mainComment?.author?.name ?? ''} ${mainComment?.author?.surname ?? ''}`}
                                                        </strong>
                                                    </Typography>
                                                    <Typography variant='caption' component='p' gutterBottom>
                                                        {time}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <Rating ratingValue={rating} readOnly/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={10} container justifyContent='flex-end'>
                                            <Grid item xs={12} sm={10}>
                                                <ReadMore id={mainComment?.id} threshold={55}>
                                                    <Typography variant='subtitle2'>
                                                        {mainComment?.comment}
                                                    </Typography>
                                                </ReadMore>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid item xs={12} md={10} container justifyContent='flex-end' spacing={2}>
                                    {replyComments.map((commentData, index) => {
                                        const {id, comment, creator, created_at, author, reply} = commentData;
                                        const {time} = getDate(created_at);
                                        if (index % 2) {
                                            return (
                                                <Grid item xs={12} sm={10} key={index}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography variant='subtitle1' gutterBottom>
                                                                <strong>
                                                                    {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                                </strong>
                                                            </Typography>
                                                            <Typography variant='caption' component='p'>
                                                                {time}
                                                            </Typography>
                                                        </Box>
                                                        <ReadMore id={id} threshold={55}>
                                                            <Typography variant='subtitle2'>
                                                                {comment}
                                                            </Typography>
                                                        </ReadMore>
                                                        {index === comments.length - 1 && !creator && !reply && (
                                                            <CustomButton
                                                                onClick={onReplyBtnClick(author, commentData)}
                                                                color='secondary'
                                                            >
                                                                <Typography variant='subtitle1' component='p'>
                                                                    {t('common:answer')}
                                                                </Typography>
                                                            </CustomButton>
                                                        )}
                                                    </Box>
                                                </Grid>
                                            );
                                        }
                                        return (
                                            <Grid item xs={12} sm={10} key={index}>
                                                <Box className='review-answer'>
                                                    <Box mb={2}>
                                                        <Typography variant='subtitle1' gutterBottom>
                                                            <strong>
                                                                {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                            </strong>
                                                        </Typography>
                                                        <Typography variant='caption' component='p'>
                                                            {time}
                                                        </Typography>
                                                    </Box>
                                                    <ReadMore id={id} threshold={55}>
                                                        <Typography variant='subtitle2'>
                                                            {comment}
                                                        </Typography>
                                                    </ReadMore>
                                                    {index === comments.length - 1 && !creator && !reply && (
                                                        <CustomButton
                                                            onClick={onReplyBtnClick(author, commentData)}
                                                            color='secondary'
                                                        >
                                                            <Typography variant='subtitle1' component='p'>
                                                                {t('common:answer')}
                                                            </Typography>
                                                        </CustomButton>
                                                    )}
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                                </Grid>

                            </Box>
                        );
                    })}
                </Grid>
            </Grid>
            <ResponsiveModal
                openDialog={modalOpen}
                handleCloseDialog={handleModalClose}
            >
                <Box p='30px 15px'>
                    <Box>
                        <UserInfoWithAvatar user={commentData.author}/>
                    </Box>
                    <Box>
                        <Typography variant='subtitle2'>
                            {commentData.comment.comment}
                        </Typography>
                    </Box>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <Box
                                display='flex'
                                alignItems='center'
                                flexDirection='column'
                            >
                                <FormikTextarea
                                    rows={10}
                                    name='comment'
                                    limit={TEXT_LIMIT}
                                    onBlur={handleBlur}
                                    disableRequire={true}
                                    value={values.comment}
                                    onChange={handleChange}
                                    placeholder={t('shareYourImpression')}
                                    labelTxt={t('giveComment')}
                                    errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                />
                                <CustomButton type='submit' color='secondary'>
                                    <Typography variant='subtitle1' component='p'>
                                        {t('common:send')}
                                    </Typography>
                                </CustomButton>
                            </Box>
                        </Form>
                    </FormikProvider>
                </Box>
            </ResponsiveModal>
        </>
    );
};
