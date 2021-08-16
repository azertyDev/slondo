import {FC, Fragment, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {userAPI} from '@src/api/api';
import {AuthCtx, ErrorCtx} from "@src/context";
import {useModal} from "@src/hooks";
import {Form, FormikProvider, useFormik} from "formik";
import {unstable_batchedUpdates} from "react-dom";
import {regularFormSchema} from "@root/validation_schemas/postSchemas";
import {useStyles} from "@src/components/cabinet/cabinet_pages/rating/useStyles";
import {months} from "@src/common_data/common";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {FormikTextarea} from "@src/components/elements/formik_textarea/FormikTextarea";
import {TEXT_LIMIT} from "@src/constants";
import {getErrorMsg} from "@src/helpers";
import {ReadMore} from '@src/components/elements/read_more/readMore';

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
        <>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <Box component="div">
                        <Rating
                            card
                            readOnly
                            name="rating"
                            ratingValue={rating}
                            ratingCount={number_of_ratings}
                        />
                    </Box>
                </Grid>
                <Divider variant='fullWidth' />
                <Grid item xs={12}>
                    <Typography variant='h6' gutterBottom>
                        Оценки и отзывы
                    </Typography>
                    {userRatings.map(({comments}, index) => {
                        return (
                            <Box key={index} className='review' pb={2} mb={2}>
                                {comments.map((commentData, index) => {
                                    const {comment, creator, created_at, author} = commentData;
                                    const date = new Date(created_at);
                                    const formatted_date = `${date.getDate()} ${t(`common:${months[date.getMonth()]}`)} ${date.getFullYear()}`;
                                    return (
                                        <Grid
                                            container
                                            key={index}
                                            spacing={1}
                                            className='review-item'
                                            justifyContent='flex-end'
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <Box display='flex' alignItems='center'>
                                                    {index === 0 && (
                                                        <UserAvatarComponent
                                                            width='50px'
                                                            height='50px'
                                                            avatar={author.avatar}
                                                        />
                                                    )}
                                                    <Box>
                                                        <Typography variant='subtitle1'>
                                                            {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                        </Typography>
                                                        <Box display='flex'>
                                                            <Rating
                                                                ratingValue={author.rating}
                                                                readOnly
                                                            />
                                                            <Typography variant='subtitle2'>
                                                                {formatted_date}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <ReadMore threshold={54}>
                                                    {index === 0
                                                        ? <Typography variant='subtitle2'>
                                                            {comments[0].comment}
                                                        </Typography>
                                                        : <Typography variant='subtitle2'>
                                                            {comment}
                                                        </Typography>
                                                    }
                                                </ReadMore>
                                            </Grid>
                                            {index === comments.length - 1 && !creator && (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    container
                                                    justifyContent='flex-end'
                                                >
                                                    <CustomButton
                                                        onClick={onReplyBtnClick(author, commentData)}
                                                    >
                                                        Ответить
                                                    </CustomButton>
                                                </Grid>
                                            )}
                                        </Grid>
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
        </>
    );
};