import {FC, Fragment, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {userAPI} from '@src/api/api';
import {AuthCtx, ErrorCtx} from "@src/context";
import {unstable_batchedUpdates} from "react-dom";
import {useModal} from "@src/hooks";
import {Form, FormikProvider, useFormik} from "formik";
import {regularFormSchema} from "@root/validation_schemas/postSchemas";
import {useStyles} from "@src/components/cabinet/cabinet_pages/rating/useStyles";
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {Rating} from "@src/components/elements/rating/Rating";
import {months} from "@src/common_data/common";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {FormikTextarea} from "@src/components/elements/formik_textarea/FormikTextarea";
import {TEXT_LIMIT} from "@src/constants";
import {getErrorMsg} from "@src/helpers";

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
    const {user: {rating, observer: {number_of_ratings}}} = useContext(AuthCtx);

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
        <div className={classes.root}>
            <Grid item xs>
                <Box
                    mb={2}
                    component="div"
                    className='owner-rating'
                    borderColor="transparent"
                    display='inline-block'
                >
                    <Rating
                        name="rating"
                        ratingValue={rating}
                        ratingCount={number_of_ratings}
                    />
                </Box>
                <Divider variant='fullWidth' light/>
                <Box>
                    <Typography variant='subtitle1'>
                        Оценки и отзывы
                    </Typography>
                    {userRatings.map(({comments}) => {
                        return (
                            <Box key={comments.id}>
                                {comments.map((commentData, index) => {
                                    const {comment, creator, created_at, author} = commentData;
                                    const date = new Date(created_at);
                                    const formatted_date = `${date.getDate()} ${months[date.getMonth()]}`;
                                    return (
                                        <Fragment key={index}>
                                            <Box className='review-item'>
                                                {index === 0 && (
                                                    <UserAvatarComponent
                                                        avatar={author.avatar}
                                                        width='50px'
                                                        height='50px'
                                                    />
                                                )}
                                                <Box>
                                                    <Typography variant='subtitle1'>
                                                        {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                    </Typography>
                                                    <Typography variant='subtitle2'>
                                                        {formatted_date}
                                                    </Typography>
                                                </Box>
                                                {index === 0
                                                    ? <Typography variant='subtitle2'>
                                                        {comments[0].comment}
                                                    </Typography>
                                                    : <>
                                                        <Typography variant='subtitle2'>
                                                            {comment}
                                                        </Typography>
                                                    </>}
                                                {index === comments.length - 1 && !creator && (
                                                    <CustomButton
                                                        onClick={onReplyBtnClick(author, commentData)}
                                                    >
                                                        Ответить
                                                    </CustomButton>
                                                )}
                                            </Box>
                                        </Fragment>
                                    );
                                })}
                            </Box>
                        );
                    })}
                </Box>
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
                                    placeholder='Поделитесь впечатлениями'
                                    labelTxt={t('Оставьте коментарий')}
                                    errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                />
                                <CustomButton type='submit'>
                                    <Typography variant='subtitle1'>
                                        Ответить
                                    </Typography>
                                </CustomButton>
                            </Box>
                        </Form>
                    </FormikProvider>
                </Box>
            </ResponsiveModal>
        </div>
    );
};