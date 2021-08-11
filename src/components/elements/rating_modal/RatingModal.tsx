import {FC, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {Box, Divider, Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {Form, FormikProvider, useFormik} from 'formik';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {getErrorMsg} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {Rating} from '@src/components/elements/rating/Rating';
import {useTranslation} from 'next-i18next';
import {ErrorCtx} from "@src/context";
import {TEXT_LIMIT} from "@src/constants";
import {useStyles} from './useStyles';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';

type RatingModalPropsType = {
    postId: number,
    user,
    open,
    handleCloseRating
};

export const RatingModal: FC<RatingModalPropsType> = (props) => {
    const {
        postId,
        user,
        open,
        handleCloseRating
    } = props;

    const initialValues = {
        rating: 0,
        comment: '',
        message: ''
    }

    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('cabinet');

    const onSubmit = async (values) => {
        try {
            const {rating, comment} = values;
            const params: any = {
                ads_id: postId,
                rating,
                receiver_id: user.id
            };
            if (comment !== '') params.comment = comment;
            await userAPI.setUserRating(params);
            unstable_batchedUpdates(() => {
                setValues(initialValues);
                handleCloseRating();
            });
        } catch ({message}) {
            setErrorMsg(message);
        }
    };

    const onChangeRating = (event, rating) => {
        setValues({...values, rating});
    };

    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema: null
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

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth='sm'
            openDialog={open}
            handleCloseDialog={handleCloseRating}
        >
            <ModalHeader title={t('rating')} handleCloseDialog={handleCloseRating} />
            <Box padding={2} width={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <UserInfoWithAvatar owner={user} isOwner={false} />
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item xs={12}>
                        <Typography variant='h6' align='center'>
                            {t('give_rating')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormikProvider value={formik}>
                            <Form onSubmit={handleSubmit}>
                                <Box
                                    width={1}
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='column'
                                >
                                    <Box my={2}>
                                        <Rating
                                            card
                                            name="rating"
                                            readOnly={false}
                                            ratingCount={user.rating}
                                            ratingValue={values.rating}
                                            onChangeRating={onChangeRating}
                                            className={classes.ratingComponent}
                                        />
                                    </Box>
                                    <FormikTextarea
                                        rows={10}
                                        name='comment'
                                        disableRequire
                                        limit={TEXT_LIMIT}
                                        onBlur={handleBlur}
                                        value={values.comment}
                                        onChange={handleChange}
                                        labelTxt={t('Оставьте коментарий')}
                                        placeholder={t('Поделитесь впечатлениями')}
                                        errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                    />
                                    <CustomButton type='submit' disabled={values.rating === 0} color='secondary'>
                                        <Typography variant='subtitle1' component='p'>
                                            {t('common:send')}
                                        </Typography>
                                    </CustomButton>
                                </Box>
                            </Form>
                        </FormikProvider>
                    </Grid>
                </Grid>
            </Box>
        </ResponsiveModal>
    );
};
