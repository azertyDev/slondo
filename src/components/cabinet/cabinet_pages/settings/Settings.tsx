import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {cookieOpts, cookies, getErrorMsg, timeFormat} from '@src/helpers';
import {Form, FormikProvider, useFormik} from 'formik';
import {UploadAvatarForm} from '@src/components/cabinet/cabinet_pages/settings/upload_avatar_form/UploadAvatarForm';
import {userInfoSchema} from '@root/validation_schemas/authRegSchema';
import {AuthCtx, ErrorCtx} from '@src/context';
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {UserInfo} from '@root/interfaces/Auth';
import {WEEK_DAYS} from '@src/common_data/common';
import {ChangePasswordModal} from './change_password_modal/ChangePasswordModal';
import {avalTimeSchema} from '@root/validation_schemas/postSchemas';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import LockIcon from '@material-ui/icons/Lock';
import {AvailableDays} from '@root/src/components/post/create_post/third_step/first_form/available_days/AvailableDays';
import {useStyles, SettingsButton} from './useStyles';

export const Settings: FC = () => {
    const {t} = useTranslation('cabinet');
    const {user, addUser} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const initUserInfo = {
        name: user?.name,
        surname: user?.surname ?? '',
        avatar: user?.avatar,
        available_start_time: user?.available_start_time ?? '09:00',
        available_end_time: user?.available_end_time ?? '18:00',
        available_days: user?.available_days ?? [...WEEK_DAYS],
        balance: 0
    };

    const [isFetch, setIsFetch] = useState(false);
    const [editable, setEditable] = useState(false);
    const [timeEditable, setEditableTime] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const onSubmit = async (values: UserInfo) => {
        try {
            const {
                name,
                surname,
                avatar,
                available_start_time,
                available_end_time,
                available_days
            } = values;

            const newUserInfo: any = {name};

            setIsFetch(true);

            if (avatar !== null && typeof avatar === 'object') {
                await userAPI.changeUserAvatar(avatar);
            }

            if (avatar === null) {
                await userAPI.deleteUserAvatar(user.id);
            }

            if (surname !== '') {
                newUserInfo.surname = surname;
            }

            if (timeEditable) {
                newUserInfo.available_start_time =
                    timeFormat(available_start_time);
                newUserInfo.available_end_time = timeFormat(available_end_time);
                newUserInfo.available_days = available_days;
            }

            const updatedUserInfo = await userAPI.changeUserInfo(newUserInfo);

            cookies.set('slondo_user', updatedUserInfo, cookieOpts);
            unstable_batchedUpdates(() => {
                addUser(updatedUserInfo);
                setEditable(false);
                setIsFetch(false);
                setEditableTime(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleCancel = () => {
        unstable_batchedUpdates(() => {
            setValues(initUserInfo);
            setEditable(false);
            setEditableTime(false);
        });
    };

    const formik = useFormik<UserInfo>({
        initialValues: initUserInfo,
        validationSchema: timeEditable
            ? userInfoSchema.concat(avalTimeSchema)
            : userInfoSchema,
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting
    } = formik;

    const {available_days} = values;

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleAllowEdit = () => {
        setEditable(!editable);
    };

    const handleUpload = event => {
        setValues({...values, avatar: event.target.files[0]});
    };

    const handleDeleteAvatar = () => {
        setValues({...values, avatar: null});
    };

    const switchAvalDaysActive = (_, val) => {
        editable && setEditableTime(val);
    };

    const handleAvalDays = day => () => {
        const isExstDay = available_days.some(({id}) => id === day.id);
        const days = [...available_days];

        if (isExstDay) {
            days.map(({id}, index) => {
                if (id === day.id) {
                    days.splice(index, 1);
                }
            });
        } else {
            days.push(day);
        }

        setValues({
            ...values,
            available_days: days
        });
    };

    const handleTime = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };

    const uploadAvatarForm = (
        <UploadAvatarForm
            t={t}
            avatar={values.avatar}
            editable={editable}
            handleUpload={handleUpload}
            handleDeleteAvatar={handleDeleteAvatar}
        />
    );

    useEffect(() => {
        setValues(initUserInfo);
    }, [user]);

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container direction="column" spacing={4}>
                <Grid item container xs={12} spacing={1} direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="p">
                            <strong>{t('cabinet:personalData')}</strong>
                            <span className="hint">
                                {t('cabinet:editHint')}
                            </span>
                        </Typography>
                    </Grid>
                    {!editable && (
                        <Grid item xs={12}>
                            <Button
                                variant="text"
                                color="secondary"
                                onClick={handleAllowEdit}
                                className={classes.editButton}
                                startIcon={
                                    !editable && <EditIcon fontSize="small" />
                                }
                            >
                                <Typography variant="subtitle1">
                                    {t('cabinet:edit')}
                                </Typography>
                            </Button>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <Grid
                                item
                                container
                                spacing={3}
                                className={classes.form}
                            >
                                <Grid item xs={12}>
                                    {uploadAvatarForm}
                                </Grid>
                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sm={8}
                                    md={8}
                                    lg={6}
                                    spacing={2}
                                >
                                    <Grid item xs={12}>
                                        <FormikField
                                            t={t}
                                            name="name"
                                            labelText="user_name"
                                            value={values.name}
                                            onChange={handleChange}
                                            disabled={!editable}
                                            errorMsg={getErrorMsg(
                                                errors.name,
                                                touched.name,
                                                t,
                                                t('name_must')
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormikField
                                            t={t}
                                            name="surname"
                                            labelText="user_surname"
                                            value={values.surname}
                                            onChange={handleChange}
                                            disabled={!editable}
                                            errorMsg={getErrorMsg(
                                                errors.surname,
                                                touched.surname,
                                                t,
                                                t('surname_must')
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormikField
                                            t={t}
                                            disabled
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleChange}
                                            labelText="phone_number"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="text"
                                        color="secondary"
                                        disabled={!editable}
                                        component="span"
                                        onClick={handleOpenModal}
                                        className={classes.recoveryBtn}
                                        startIcon={
                                            <span className={classes.icon}>
                                                <LockIcon
                                                    color={
                                                        editable
                                                            ? 'secondary'
                                                            : 'action'
                                                    }
                                                    fontSize="small"
                                                />
                                            </span>
                                        }
                                    >
                                        <Typography variant="subtitle1">
                                            {t('auth_reg:change_password')}
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8} lg={6}>
                                    <AvailableDays
                                        t={t}
                                        isActive={editable && timeEditable}
                                        handleTime={handleTime}
                                        handleAvalDays={handleAvalDays}
                                        switchActive={switchAvalDaysActive}
                                        errors={errors}
                                        touched={touched}
                                        time={{
                                            available_days:
                                                values.available_days,
                                            available_start_time:
                                                values.available_start_time,
                                            available_end_time:
                                                values.available_end_time
                                        }}
                                    />
                                </Grid>
                                {editable && (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={8}
                                        md={8}
                                        lg={12}
                                        container
                                        spacing={2}
                                    >
                                        <Grid item xs={6} sm={6} lg={3}>
                                            <SettingsButton
                                                disableElevation
                                                color="secondary"
                                                disabled={!editable}
                                                className={classes.button}
                                                onClick={handleCancel}
                                            >
                                                <Typography variant="subtitle1">
                                                    {t('common:cancel')}
                                                </Typography>
                                            </SettingsButton>
                                        </Grid>
                                        <Grid item xs={6} sm={6} lg={3}>
                                            <SettingsButton
                                                type="submit"
                                                color="primary"
                                                size="large"
                                                disableElevation
                                                className={classes.button}
                                                disabled={
                                                    isSubmitting || !editable
                                                }
                                                startIcon={
                                                    isSubmitting && (
                                                        <CircularProgress
                                                            size={24}
                                                            className={
                                                                classes.progress
                                                            }
                                                        />
                                                    )
                                                }
                                            >
                                                <Typography variant="subtitle1">
                                                    {t('common:accept')}
                                                </Typography>
                                            </SettingsButton>
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        </Form>
                    </FormikProvider>
                </Grid>
            </Grid>
            <ChangePasswordModal
                open={openModal}
                handleModalClose={handleModalClose}
            />
        </Box>
    );
};
