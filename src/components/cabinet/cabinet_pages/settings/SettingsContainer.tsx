import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {userAPI} from '@src/api/api';
import {signInAction} from '@src/redux/slices/userSlice';
import {cookieOpts, cookies} from '@src/helpers';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useFormik} from 'formik';
import {SettingsForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/SettingsForm';
import {UploadAvatarForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/upload_avatar_form/UploadAvatarForm';
import {timeRegEx} from '@src/common_data/reg_exs';
import {CodeConfirm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/password_recovery/CodeConfirm';
import {regularFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PasswordConfirmForm} from '@root/src/components/header/auth_reg_page/auth_reg_form/recovery_form/PasswordConfirmForm';

const SettingsContainer: FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation(['cabinet', 'common', 'post', 'errors']);
    const userInfo = useSelector((store: RootState) => store.user.info);

    const initSeconds = 60;
    const initUserInfo = {
        user_name: userInfo.name,
        user_surname: userInfo.surname,
        phone: userInfo.phone,
        avalTime: {
            isActive: false,
            time: {
                start_time: userInfo.available_start_time ?? '09:00',
                end_time: userInfo.available_end_time ?? '18:00',
                week_days: userInfo.available_days
            }
        }
    };
    const [fetchingSmsCode, setFetchingSmsCode] = useState(false);
    const [formDisable, setFormDisable] = useState(true);
    const [file, setFile] = useState(null);
    const [isFileSelected, setIsSelected] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isPassConfirm, setIsPassConfirm] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [activeTimer, setActiveTimer] = useState(false);
    const [timer, setTimer] = useState(initSeconds);
    const [code, setCode] = useState('');

    const handleSubmit = async (values) => {
        try {
            const userData = { ...values };

            const {
                user_name,
                user_surname,
                avalTime: { isActive, time },
                ...otherData
            } = userData;

            if (isActive) {
                const { week_days, start_time, end_time } = time;
                otherData.week_days = week_days.map(({ id }) => ({ id }));
                otherData.start_time = start_time;
                otherData.end_time = end_time;
            }

            otherData.name = user_name;
            otherData.surname = user_surname;

            if (!!file) {
                const formData = new FormData();
                formData.append('avatar', file);
                await userAPI.changeUserAvatar(formData);
            }

            await userAPI.changeUserInfo({ ...userInfo, ...otherData });
            const newUserInfo = await userAPI.getUserInfo();

            setFormDisable(true);
            dispatch(signInAction(newUserInfo));
            cookies.set('slondo_user', newUserInfo, cookieOpts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleCancel = () => {
        setValues(initUserInfo);
        setFormDisable(true);
    };

    const formik = useFormik({
        initialValues: initUserInfo,
        validationSchema: regularFormSchema,
        onSubmit: handleSubmit
    });

    const {
        values,
        setValues
    } = formik;
    const { avalTime } = values;

    const handleDisableTimer = () => {
        setActiveTimer(false);
    };

    const handleOpenModal = async () => {
        try {
            await setFetchingSmsCode(true);
            await userAPI.getSmsCode(userInfo.phone);
            // await (_ => {
            //     return new Promise(function(resolve) {
            //         setTimeout(resolve, 1000);
            //     });
            // })();
            await setFetchingSmsCode(false);
            setOpenModal(true);
            setActiveTimer(true);
        } catch (e) {
            setOpenModal(false);
            dispatch(setErrorMsgAction(e.message))
            await setFetchingSmsCode(false);
        }
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handlePassConfirm = () => {
        setIsPassConfirm(true);
    };

    const handleAllowEdit = () => {
        setFormDisable(false);
    };

    const handleUpload = async (event) => {
        setFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleDeleteAvatar = (id) => async () => {
        try {
            await userAPI.deleteUserAvatar(id);
            setFile({});
            const newUserInfo = await userAPI.getUserInfo();

            dispatch(signInAction(newUserInfo));
            cookies.set('slondo_user', newUserInfo, cookieOpts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleSwitch = (_, value) => {
        setValues({ ...values, avalTime: { ...avalTime, isActive: value } });
    };

    const handleAvalDays = day => () => {
        const isExstDay = avalTime.time.week_days.some(({ id }) => id === day.id);
        let week_days = [...avalTime.time.week_days];
        if (isExstDay) {
            week_days.map(({ id }, index) => {
                if (id === day.id) {
                    week_days.splice(index, 1);
                }
            });
        } else {
            week_days.push(day);
        }
        setValues({
            ...values,
            avalTime: {
                ...avalTime,
                time: {
                    ...avalTime.time,
                    week_days
                }
            }
        });
    };

    const handleTime = ({ target: { value, name } }) => {
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            let time = { ...avalTime.time };
            time = { ...time, [name]: value };
            setValues({ ...values, avalTime: { ...avalTime, time } });
        }
    };

    const handleSignIn = (user) => () => {
        dispatch(signInAction(user));
    };

    const errorHandle = (errMsg) => {
        setErrorMsg(errMsg);
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            }
        } else {
            setTimer(initSeconds);
        }
    };

    const ModalContent = (
        isPassConfirm
            ? <PasswordConfirmForm
                t={t}
                phone={values.phone}
                code={code}
                setErrorMsg={errorHandle}
                handleCloseModal={handleModalClose}
                handleSignIn={handleSignIn}
            />
            : <CodeConfirm
                t={t}
                timer={timer}
                phone={userInfo.phone}
                setErrorMsg={setErrorMsg}
                setCode={setCode}
                handleDisableTimer={handleDisableTimer}
                handlePassConfirm={handlePassConfirm}
                setOpenModal={setOpenModal}
            />
    );

    const uploadAvatarForm = (
        <UploadAvatarForm
            file={file}
            handleUpload={handleUpload}
            isFileSelected={isFileSelected}
            formDisable={formDisable}
            handleDeleteAvatar={handleDeleteAvatar}
        />
    );

    const settingsForm = (
        <SettingsForm
            t={t}
            formik={formik}
            formDisable={formDisable}
            uploadAvatarForm={uploadAvatarForm}
            handleTime={handleTime}
            handleAvalDays={handleAvalDays}
            handleSwitch={handleSwitch}
            handleOpenModal={handleOpenModal}
            fetchingSmsCode={fetchingSmsCode}
            handleCancel={handleCancel}
        />
    );

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    useEffect(() => {
        setValues(initUserInfo);
    }, [userInfo]);

    console.log(values);
    return (
        <Settings
            handleAllowEdit={handleAllowEdit}
            settingsForm={settingsForm}
            openModal={openModal}
            modalContent={ModalContent}
            handleClose={handleModalClose}
        />

    );
};

export default withAuthRedirect(SettingsContainer);