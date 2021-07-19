import {FC, useContext, useState} from 'react';
import {WithT} from 'i18next';
import {Box, Divider, Grid, Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {months} from '@src/common_data/common';
import {useModal} from '@src/hooks/useModal';
import {userAPI} from '@src/api/api';
import {Form, FormikProvider, useFormik} from 'formik';
import {regularFormSchema} from '@root/validation_schemas/createPostSchemas';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {getErrorMsg} from '@src/helpers';
import {UserCtx} from "@src/context";
import {useStyles} from './useStyles';

type RatingsPropsType = {
    data,
    handleReply: (comment_id: number, comment: string) => () => void
} & WithT;

export const Ratings: FC<RatingsPropsType> = (props) => {
    const {
        t,
        data,
        handleReply
    } = props;

    const initialCommentDataState = {
        author: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: '',
            created_at: '',
            available_days: ''
        },
        comment: {
            id: null,
            comment: ''
        }
    };

    const {rating, observer: {number_of_ratings}} = useContext(UserCtx).user;
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const [commentData, setCommentData] = useState(initialCommentDataState);

    const onReplyBtnClick = (author, comment) => () => {
        setCommentData({author, comment});
        handleModalOpen();
    };

    const handleSubmitReply = async (values, {setSubmitting, setValues}) => {
        const {comment} = values;
        try {
            setSubmitting(true);
            await userAPI.setReplyComment(commentData.comment.id, comment);
            setSubmitting(false);
            setValues({...values, comment});
            handleModalClose();
        } catch ({message}) {
            setValues({...values, message});
        }
    };

    const txtLimit = 3000;
    const formik = useFormik({
        onSubmit: handleSubmitReply,
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs>
                <Box
                    component="div"
                    mb={2}
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
                    {data.map(({comments}) => {
                        return (
                            <Box key={comments.id}>
                                {comments.map((commentData, index) => {
                                    const {comment, creator, created_at, author} = commentData;
                                    const date = new Date(created_at);
                                    const formatted_date = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                                    return (
                                        <>
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
                                                    ? (<Typography variant='subtitle2'>
                                                        {comments[0].comment}
                                                    </Typography>)
                                                    : (<>
                                                        <Typography variant='subtitle2'>
                                                            {comment}
                                                        </Typography>
                                                    </>)
                                                }
                                                {index === comments.length - 1 && !creator && (
                                                    <CustomButton
                                                        onClick={onReplyBtnClick(author, commentData)}>
                                                        Ответить
                                                    </CustomButton>
                                                )}
                                            </Box>
                                        </>
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
                        <UserInfoWithAvatar owner={commentData.author}/>
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
