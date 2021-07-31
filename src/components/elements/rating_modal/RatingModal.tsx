import {FC, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {Box, Divider, Typography} from '@material-ui/core';
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
            <Box
                mb={1}
                display='flex'
                justifyContent='center'
            >
                <Typography variant='h6'>
                    {t('rating')}
                </Typography>
            </Box>
            <Box>
                <UserInfoWithAvatar owner={user} isOwner={false}/>
            </Box>
            <Divider className={classes.divider}/>
            <Box
                mb={1}
                display='flex'
                justifyContent='center'
            >
                <Typography variant='h6'>
                    {t('give_rating')}
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
                            name="rating"
                            readOnly={false}
                            ratingCount={user.rating}
                            ratingValue={values.rating}
                            onChangeRating={onChangeRating}
                            className={classes.ratingComponent}
                        />
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
                        <CustomButton type='submit' disabled={values.rating === 0}>
                            <Typography variant='subtitle1'>
                                {t('common:send')}
                            </Typography>
                        </CustomButton>
                    </Box>
                </Form>
            </FormikProvider>
        </ResponsiveModal>
    );
};
