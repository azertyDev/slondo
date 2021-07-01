import {FC} from 'react';
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
import {useStyles} from './useStyles';

type RatingModalPropsType = {
    user,
    open,
    handleCloseRating
};

export const RatingModal: FC<RatingModalPropsType> = (props) => {
    const {
        user,
        open,
        handleCloseRating
    } = props;

    const txtLimit = 5000;
    const {t} = useTranslation('cabinet');

    const handleSubmitRating = async (values, {setSubmitting, setValues}) => {
        const {rating, comment} = values;
        try {
            setSubmitting(true);
            const {message} = await userAPI.setUserRating(rating, comment, user.id);
            await userAPI.getUserInfo();
            setSubmitting(false);
            setValues({...values, message});
            handleCloseRating();
        } catch ({message}) {
            setValues({...values, message});
        }
    };

    const onChangeRating = (event, rating) => {
        setValues({...values, rating});
    };

    const formik = useFormik({
        onSubmit: handleSubmitRating,
        initialValues: {
            rating: 0,
            comment: '',
            message: ''
        },
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
                display='flex'
                justifyContent='center'
                mb={1}
            >
                <Typography variant='h6'>
                    Рейтинг
                </Typography>
            </Box>
            <Box>
                <UserInfoWithAvatar owner={user} isOwner={false}/>
            </Box>
            <Divider className={classes.divider}/>
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
                            ratingCount={user.rating}
                        />
                        <FormikTextarea
                            placeholder='Поделитесь впечатлениями'
                            name='comment'
                            disableRequire
                            onChange={handleChange}
                            rows={10}
                            value={values.comment}
                            onBlur={handleBlur}
                            labelTxt={t('Оставьте коментарий')}
                            errorMsg={getErrorMsg(errors.description, touched.description, t)}
                            limit={txtLimit}
                        />
                        <CustomButton type='submit' disabled={values.rating === 0}>
                            <Typography variant='subtitle1'>
                                Оценить продавца
                            </Typography>
                        </CustomButton>
                    </Box>
                </Form>
            </FormikProvider>
        </ResponsiveModal>
    );
};
