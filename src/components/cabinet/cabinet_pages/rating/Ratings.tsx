import {FC, useContext, useState} from 'react';
import {WithT} from 'i18next';
import {Box, Divider, Grid, Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {months} from '@src/common_data/common';
import {useModal} from '@src/hooks/useModal';
import {userAPI} from '@src/api/api';
import {Form, FormikProvider, useFormik} from 'formik';
import {regularFormSchema} from '@root/validation_schemas/postSchemas';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {getErrorMsg} from '@src/helpers';
import {AuthCtx} from "@src/context";
import {useStyles} from './useStyles';
import {ReadMore} from '@src/components/elements/read_more/readMore';

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

    const {user: {rating, observer: {number_of_ratings}}} = useContext(AuthCtx);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const [commentData, setCommentData] = useState(initCommentData);

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
                    {data.map(({comments}, index) => {
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
                </Grid>
            </Grid>
            <ResponsiveModal
                openDialog={modalOpen}
                handleCloseDialog={handleModalClose}
            >
                <Box p='30px 15px'>
                    <Box>
                        <UserInfoWithAvatar owner={commentData.author} />
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
        </>
    );
};
