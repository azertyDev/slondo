import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {useTranslation} from 'react-i18next';
import {userAPI} from '@src/api/api';
import {cookieOpts, cookies} from '@src/helpers';
import {useFormik} from 'formik';
import {SettingsForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/SettingsForm';
import {UploadAvatarForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/upload_avatar_form/UploadAvatarForm';
import {timeRegEx} from '@src/common_data/reg_exs';
import {userInfoSchema} from '@root/validation_schemas/authRegSchema';
import {AuthCtx, ErrorCtx} from "@src/context";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {UserInfo} from "@root/interfaces/Auth";
import {WEEK_DAYS} from "@src/common_data/common";
import {ChangePasswordModal} from "./settings_form/change_password_modal/ChangePasswordModal";
import {useStyles} from "./useStyles";

export const Settings: FC = () => {
    const {t} = useTranslation('cabinet');
    const {user, setUser, setIsAuth} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const initUserInfo = {
        name: user.name,
        surname: user.surname ?? '',
        avatar: user.avatar,
        phone: user.phone,
        available_start_time: user.available_start_time ?? '09:00',
        available_end_time: user.available_end_time ?? '18:00',
        available_days: user.available_days ?? [...WEEK_DAYS]
    };

    const [isFetch, setIsFetch] = useState(false);
    const [editable, setEditable] = useState(false);
    const [avalTimeActive, setAvalTimeActive] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const onSubmit = async (values: UserInfo) => {
        try {
            const {
                phone,
                avatar,
                ...otherData
            } = values;

            const newUserInfo: any = {
                ...otherData
            };

            setIsFetch(true);

            if (avatar !== null && typeof avatar === 'object') {
                await userAPI.changeUserAvatar(avatar);
            }

            if (avatar === null) {
                await userAPI.deleteUserAvatar(user.id);
            }

            const updatedUserInfo = await userAPI.changeUserInfo(newUserInfo);

            cookies.set('slondo_user', updatedUserInfo, cookieOpts);
            unstable_batchedUpdates(() => {
                setIsAuth(true);
                setUser(updatedUserInfo);
                setEditable(false);
                setIsFetch(false);
                setAvalTimeActive(false);
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
            setAvalTimeActive(false);
        });
    };

    const formik = useFormik<UserInfo>({
        initialValues: initUserInfo,
        validationSchema: userInfoSchema,
        onSubmit
    });

    const {
        values,
        setValues
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

    const handleUpload = (event) => {
        setValues({...values, avatar: event.target.files[0]});
    };

    const handleDeleteAvatar = () => {
        setValues({...values, avatar: null});
    };

    const switchAvalDaysActive = (_, val) => {
        editable && setAvalTimeActive(val);
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
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            setValues({...values, [name]: value});
        }
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
            <Grid container direction='column' spacing={4}>
                <Grid
                    item
                    xs={12}
                    container
                    direction='column'
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <Typography
                            variant='h6'
                            gutterBottom
                            component='p'
                        >
                            <strong>
                                {t('cabinet:personalData')}
                            </strong>
                            <span className='hint'>
                                {t('cabinet:editHint')}
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant='text'
                            color='secondary'
                            onClick={handleAllowEdit}
                            className={classes.editButton}
                            startIcon={!editable && <EditIcon fontSize='small' />}
                        >
                            <Typography variant='subtitle1'>
                                {editable ? t('cabinet:revoke') : t('cabinet:edit')}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <SettingsForm
                        t={t}
                        formik={formik}
                        editable={editable}
                        avalTimeActive={avalTimeActive}
                        switchAvalDaysActive={switchAvalDaysActive}
                        uploadAvatarForm={uploadAvatarForm}
                        handleTime={handleTime}
                        handleAvalDays={handleAvalDays}
                        handleOpenModal={handleOpenModal}
                        handleCancel={handleCancel}
                    />
                </Grid>
            </Grid>
            <ChangePasswordModal
                open={openModal}
                handleModalClose={handleModalClose}
            />
        </Box>
    );
};